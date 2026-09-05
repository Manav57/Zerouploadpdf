export interface OcrServerSheet {
  name: string;
  rows: { cells: { text: string }[] }[];
}

export interface OcrServerResponse {
  ok: true;
  sheets: OcrServerSheet[];
  pages: number;
  confidence: number;
  kind: 'ocr';
}

export interface OcrServerError {
  ok: false;
  error: string;
  code?: string;
}

export type OcrResult = OcrServerResponse | OcrServerError;

export async function postForRecognition(
  file: Blob,
  fileName: string,
  mimeType: string,
  signal?: AbortSignal,
): Promise<OcrResult> {
  const form = new FormData();
  form.append('file', file, fileName);
  form.append('mimeType', mimeType);
  const res = await fetch('/api/ocr', {
    method: 'POST',
    body: form,
    signal,
  });
  let json: unknown = null;
  try {
    json = await res.json();
  } catch {
    json = null;
  }
  if (!res.ok || !json) {
    return {
      ok: false,
      error: 'The recognition service could not process this file.',
    };
  }
  return json as OcrResult;
}