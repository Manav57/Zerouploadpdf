import workerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
import type { ExtractResult } from './formats';
import { type TextItem, groupTextItems, rowsFromCells } from './tables';

function itemFromPdfItem(item: {
  str?: string;
  transform?: number[];
  width?: number;
}): TextItem | null {
  const text = (item.str ?? '').trim();
  if (!text) return null;
  const t = item.transform ?? [0, 0, 0, 0, 0, 0];
  return { str: text, x: t[4], y: t[5], w: item.width };
}

function sheetFromItems(p: number, items: TextItem[]): ExtractResult['sheets'][number] {
  const glyphW = 18;
  const lines = groupTextItems(items, { yTolerance: 3, xGapPx: glyphW, sortY: 'desc' });
  const cellRows = lines.map((line) => line.cells.map((c) => c.str)).filter((r) => r.length > 0);
  return {
    name: `Page ${p}`,
    rows: rowsFromCells(cellRows),
  };
}

export async function extractPdfNative(
  data: ArrayBuffer,
  maxPages = 300,
): Promise<{ sheets: ExtractResult['sheets']; pages: number; confidence: number }> {
  const pdfjs = await import('pdfjs-dist');
  pdfjs.GlobalWorkerOptions.workerSrc = workerUrl;
  const loadingTask = pdfjs.getDocument({
    data: new Uint8Array(data),
    useWorkerFetch: false,
    useWasm: true,
    disableFontFace: true,
    useSystemFonts: false,
    isOffscreenCanvasSupported: false,
  });
  const doc = await loadingTask.promise;
  const sheets: ExtractResult['sheets'] = [];
  const pageCount = Math.min(doc.numPages, maxPages);
  let textItems = 0;
  let emptyCount = 0;
  try {
    for (let p = 1; p <= pageCount; p++) {
      const page = await doc.getPage(p);
      const content = await page.getTextContent();
      const items = content.items
        .map((item) =>
          itemFromPdfItem(item as { str?: string; transform?: number[]; width?: number }),
        )
        .filter((it): it is TextItem => it !== null);
      if (items.length === 0) emptyCount++;
      textItems += items.length;
      sheets.push(sheetFromItems(p, items));
    }
  } finally {
    try {
      await loadingTask.destroy();
    } catch {
      /* already torn down */
    }
  }
  const hasContent = textItems > 0;
  const confidence = !hasContent ? 20 : Math.round(100 - (emptyCount / pageCount) * 80);
  return { sheets, pages: pageCount, confidence };
}