import type { ExtractResult, FileFormatKey } from './formats';
import { extractPdfNative } from './pdf';
import { parseOoxml } from './ooxml';
import { postForRecognition, type OcrResult } from '../ocr/transport';

export type PipeKind = 'native' | 'ocr' | 'error';

export interface PipeSuccess {
  kind: 'native' | 'ocr';
  sheets: ExtractResult['sheets'];
  pages: number;
  confidence: number;
}

export interface PipeFailure {
  kind: 'error';
  code: string;
  message: string;
}

export type PipeOutcome = PipeSuccess | PipeFailure;

export type OcrTransport = (
  file: Blob,
  fileName: string,
  mimeType: string,
  signal?: AbortSignal,
) => Promise<OcrResult>;

function noTextError(kind: string): PipeFailure {
  return {
    kind: 'error',
    code: 'no-text',
    message: `This ${kind} contains no table or extractable text. If it is a scan, save the pages as an image and try again.`,
  };
}

function failureFromOcr(res: OcrResult): PipeFailure {
  if (!res.ok) {
    return {
      kind: 'error',
      code: res.code ?? 'ocr-failed',
      message: res.error,
    };
  }
  return {
    kind: 'error',
    code: 'ocr-failed',
    message: 'The recognition service did not return usable data.',
  };
}

export async function runConversion(
  file: File,
  formatKey: FileFormatKey,
  opts: { ocrTransport?: OcrTransport } = {},
): Promise<PipeOutcome> {
  const transport = opts.ocrTransport ?? postForRecognition;

  if (formatKey === 'png' || formatKey === 'jpg' || formatKey === 'pdf-scanned' || formatKey === 'doc' || formatKey === 'ppt') {
    const res = await transport(file, file.name, file.type);
    if (!res.ok) return failureFromOcr(res);
    return { kind: 'ocr', sheets: res.sheets, pages: res.pages, confidence: res.confidence };
  }

  if (formatKey === 'docx' || formatKey === 'pptx') {
    const bytes = new Uint8Array(await file.arrayBuffer());
    try {
      const parsed = parseOoxml(bytes, formatKey === 'docx' ? 'docx' : 'pptx');
      const sheets = parsed.sheets;
      const nonEmpty = sheets.filter((s) => s.rows.length > 0);
      if (nonEmpty.length === 0) return noTextError(formatKey === 'docx' ? 'Word file' : 'PowerPoint file');
      return {
        kind: 'native',
        sheets,
        pages: parsed.pageCount,
        confidence: 95,
      };
    } catch (err) {
      return {
        kind: 'error',
        code: 'bad-container',
        message: err instanceof Error ? err.message : 'This file could not be opened.',
      };
    }
  }

  if (formatKey === 'pdf-native') {
    const data = await file.arrayBuffer();
    const result = await extractPdfNative(data);
    const nonEmpty = result.sheets.filter((s) => s.rows.length > 0);
    if (nonEmpty.length === 0) {
      return {
        kind: 'error',
        code: 'no-text',
        message: 'This PDF has no text layer. It looks like a scan — send the page images through OCR instead.',
      };
    }
    return { kind: 'native', sheets: result.sheets, pages: result.pages, confidence: result.confidence };
  }

  return {
    kind: 'error',
    code: 'unsupported',
    message: 'This file type is not supported.',
  };
}