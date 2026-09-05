import { unzipSync } from 'fflate';
import type { ExtractResult } from './formats';
import { u8ToString } from './file-utils';
import { rowsFromCells } from './tables';

type OoxmlKind = 'docx' | 'pptx';

export interface OoxmlParseResult {
  sheets: ExtractResult['sheets'];
  pageCount: number;
}

function unzipBytes(bytes: Uint8Array | ArrayBuffer): Record<string, Uint8Array> {
  const u8 = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  return unzipSync(u8);
}

function decodeEntities(s: string): string {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"');
}

function readRuns(xml: string): string {
  const out: string[] = [];
  const re = /<w:t\b[^>]*>([^<]*)<\/w:t>|<w:tab\b[^>]*\/>/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(xml))) {
    if (m[1] !== undefined) out.push(m[1]);
    else out.push('\t');
  }
  return decodeEntities(out.join('')).replace(/\s+/g, ' ').trim();
}

export function docxToSheets(xml: string): ExtractResult['sheets'] {
  const sheets: ExtractResult['sheets'] = [];
  const tableRe = /<w:tbl[^>]*>([\s\S]*?)<\/w:tbl>/g;
  let tm: RegExpExecArray | null;
  while ((tm = tableRe.exec(xml))) {
    const rows: string[][] = [];
    const rowRe = /<w:tr\b[^>]*>([\s\S]*?)<\/w:tr>/g;
    let rm: RegExpExecArray | null;
    while ((rm = rowRe.exec(tm[1]))) {
      const cells: string[] = [];
      const cellRe = /<w:tc\b[^>]*>([\s\S]*?)<\/w:tc>/g;
      let cm: RegExpExecArray | null;
      while ((cm = cellRe.exec(rm[1]))) {
        cells.push(readRuns(cm[1]));
      }
      if (cells.some((c) => c.length > 0)) rows.push(cells);
    }
    if (rows.length > 0) {
      sheets.push({
        name: `Table${sheets.length + 1}`,
        rows: rowsFromCells(rows),
      });
    }
  }
  if (sheets.length === 0) {
    const lines: string[] = [];
    const paraRe = /<w:p\b[^>]*>([\s\S]*?)<\/w:p>/g;
    let pm: RegExpExecArray | null;
    while ((pm = paraRe.exec(xml))) {
      const text = readRuns(pm[1]);
      if (text) lines.push(text);
    }
    if (lines.length > 0) {
      sheets.push({
        name: 'Document',
        rows: rowsFromCells(lines.map((line) => [line])),
      });
    }
  }
  return sheets;
}

export function pptxToSheets(xml: string): ExtractResult['sheets'] {
  const slides = xml.split('<p:sld>');
  const sheets: ExtractResult['sheets'] = [];
  for (const [i, slide] of slides.entries()) {
    if (i === 0 || !slide) continue;
    const rows: string[][] = [];
    const tblRe = /<a:tbl\b[^>]*>([\s\S]*?)<\/a:tbl>/g;
    let tb: RegExpExecArray | null;
    while ((tb = tblRe.exec(slide))) {
      const gridRe = /<a:gc w="([^"]+)"\/>/g;
      const widths: string[] = [];
      let gm: RegExpExecArray | null;
      while ((gm = gridRe.exec(tb[1]))) widths.push(gm[1]);
      const rowRe = /<a:tr\b[^>]*>([\s\S]*?)<\/a:tr>/g;
      let rm: RegExpExecArray | null;
      while ((rm = rowRe.exec(tb[1]))) {
        const cells: string[] = [];
        const cellRe = /<a:tc\b[^>]*>([\s\S]*?)<\/a:tc>/g;
        let cm: RegExpExecArray | null;
        while ((cm = cellRe.exec(rm[1]))) {
          const c = decodeEntities((cm[1].match(/<a:t>([^<]*)<\/a:t>/g) ?? [])
            .map((t) => t.replace(/<\/?a:t>/g, ''))
            .join(' '))
            .replace(/\s+/g, ' ')
            .trim();
          cells.push(c);
        }
        if (cells.some((c) => c.length > 0)) rows.push(cells);
      }
    }
    if (rows.length > 0) {
      sheets.push({ name: `Slide ${i}`, rows: rowsFromCells(rows) });
    } else {
      const lines: string[] = [];
      const paraRe = /<a:p\b[^>]*>([\s\S]*?)<\/a:p>/g;
      let pm: RegExpExecArray | null;
      while ((pm = paraRe.exec(slide))) {
        const text = decodeEntities((pm[1].match(/<a:t>([^<]*)<\/a:t>/g) ?? [])
          .map((t) => t.replace(/<\/?a:t>/g, ''))
          .join(' '))
          .replace(/\s+/g, ' ')
          .trim();
        if (text) lines.push(text);
      }
      if (lines.length > 0) {
        sheets.push({
          name: `Slide ${i} text`,
          rows: rowsFromCells(lines.map((line) => [line])),
        });
      }
    }
  }
  return sheets;
}

function pageBreaks(xml: string): number {
  return (xml.match(/<w:br\b[^>]*w:type="page"[^>]*\/>/g) ?? []).length;
}

export function parseOoxml(
  bytes: Uint8Array | ArrayBuffer,
  kind: OoxmlKind,
): OoxmlParseResult {
  const zip = unzipBytes(bytes);
  if (kind === 'docx') {
    const document = zip['word/document.xml'];
    if (!document) throw new Error('Missing word/document.xml inside the .docx container.');
    const xml = u8ToString(document);
    return {
      sheets: docxToSheets(xml),
      pageCount: pageBreaks(xml) + 1,
    };
  }
  const slideParts = Object.keys(zip)
    .filter((k) => /^ppt\/slides\/slide\d+\.xml$/.test(k))
    .sort((a, b) => {
      const na = Number(a.match(/\d+/)?.[0] ?? 0);
      const nb = Number(b.match(/\d+/)?.[0] ?? 0);
      return na - nb;
    });
  if (slideParts.length === 0) throw new Error('Missing ppt/slides in the .pptx container.');
  let xml = '';
  for (const part of slideParts) {
    xml += '<p:sld>' + u8ToString(zip[part]) + '</p:sld>';
  }
  return {
    sheets: pptxToSheets(xml),
    pageCount: slideParts.length,
  };
}

/**
 * Cheap native-vs-scanned classifier for PDF bytes. A PDF carrying font
 * resources or text-drawing operators is text-native; one carrying only
 * images is scanned and must go through OCR.
 */
export function classifyPdfBytes(bytes: Uint8Array | ArrayBuffer): 'native' | 'scanned' {
  const u8 = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  const s = u8ToString(u8);
  if (/\/Font\b/.test(s) || /\bTJ\b/.test(s) || /\bTj\b/.test(s) || /\/Text\b/.test(s)) {
    return 'native';
  }
  if (/\/Image\b/.test(s) || /\bDCTDecode\b/.test(s) || /\bFlateDecode\b/.test(s)) {
    return 'scanned';
  }
  return 'native';
}