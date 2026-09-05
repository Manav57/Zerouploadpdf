import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import { classifyPdfBytes, parseOoxml } from '../../src/lib/core/ooxml';

const fixture = (name: string) =>
  readFileSync(fileURLToPath(new URL(`../fixtures/${name}`, import.meta.url)));

const texts = (rows: { cells: { text: string }[] }[]) =>
  rows.map((r) => r.cells.map((x) => x.text));

describe('parseOoxml (docx)', () => {
  it('extracts every table row and cell from the Word document', () => {
    const { sheets, pageCount } = parseOoxml(fixture('sample-template.docx'), 'docx');
    expect(pageCount).toBe(1);
    expect(sheets).toHaveLength(1);
    expect(sheets[0].name).toBe('Table1');
    expect(texts(sheets[0].rows)).toEqual([
      ['Invoice', 'Customer', 'Amount'],
      ['INV-2001', 'Acme Northwind', '$240.00'],
      ['INV-2002', 'Blue Ridge Co.', '$450.00'],
      ['INV-2003', 'Cascade Logistics', '$870.00'],
      ['INV-2004', 'Dover Printing', '$1260.00'],
    ]);
  });

  it('falls back to paragraphs when no table exists', () => {
    const { sheets } = parseOoxml(fixture('sample-template.docx'), 'docx');
    expect(sheets[0].rows.length).toBeGreaterThan(0);
  });

  it('throws when word/document.xml is missing', () => {
    expect(() => parseOoxml(new Uint8Array([0x50, 0x4b, 0x03, 0x04]), 'docx')).toThrow();
  });
});

describe('parseOoxml (pptx)', () => {
  it('extracts the slide table and counts slides', () => {
    const { sheets, pageCount } = parseOoxml(fixture('sample-template.pptx'), 'pptx');
    expect(pageCount).toBe(2);
    expect(sheets).toHaveLength(2);
    expect(sheets[0].name).toBe('Slide 1');
    expect(texts(sheets[0].rows)).toEqual([
      ['Region', 'Revenue', 'Growth'],
      ['East', '120000', '9.2%'],
      ['West', '98000', '4.1%'],
    ]);
    expect(sheets[1].name).toBe('Slide 2 text');
    expect(sheets[1].rows.map((r) => r.cells[0].text)).toEqual(['Outlook next quarter']);
  });
});

describe('classifyPdfBytes', () => {
  it('detects native text PDFs', () => {
    expect(classifyPdfBytes(fixture('sample-invoice.pdf'))).toBe('native');
  });

  it('detects image-only (scanned) PDFs', () => {
    const pngPixel = Buffer.from(
      'iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFUlEQVR42mP8z8AARAwMjIxgAAvvBggAAP5fAg8QIE6jAAAAAElFTkSuQmCC',
      'base64',
    );
    const scanned = Buffer.concat([
      Buffer.from('%PDF-1.4\n1 0 obj<<>>endobj\n'),
      Buffer.from('/Image /DCTDecode '),
      pngPixel,
      Buffer.from('\n%%EOF'),
    ]);
    expect(classifyPdfBytes(scanned)).toBe('scanned');
  });
});