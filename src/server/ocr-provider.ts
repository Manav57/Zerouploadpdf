import { demoOcrResult } from '../lib/shares/demo';

export interface RecognitionRequest {
  mimeType: string;
  name: string;
  size: number;
}

export interface RecognitionResult {
  sheets: { name: string; rows: { cells: { text: string }[] }[] }[];
  pages: number;
  confidence: number;
}

export async function recognize(
  _request: RecognitionRequest,
  bytes: ArrayBuffer,
): Promise<RecognitionResult> {
  if (bytes.byteLength === 0) throw new Error('empty-upload');
  const demo = demoOcrResult(16);
  return {
    sheets: demo.sheets,
    pages: demo.pages,
    confidence: demo.confidence,
  };
}