import { describe, expect, it } from 'vitest';
import { unzipSync, strFromU8 } from 'fflate';
import { toWorkbook, toXlsx } from '../../src/lib/core/xlsx';

const row = (cells: string[]) => ({ cells: cells.map((text) => ({ text })) });

const unzipXml = (bytes: Uint8Array) => {
  const files = unzipSync(bytes);
  return Object.fromEntries(
    Object.entries(files).map(([k, v]) => [k, strFromU8(v)] as const),
  );
};

describe('toXlsx / toWorkbook', () => {
  it('produces an unzippable workbook with the expected parts', () => {
    const bytes = toXlsx([row(['Invoice', 'Amount']), row(['INV-1', '$10'])]);
    const files = unzipXml(bytes);
    expect(files['[Content_Types].xml']).toContain('sheet1.xml');
    expect(files['xl/workbook.xml']).toContain('<sheet name="Sheet1"');
    expect(files['xl/_rels/workbook.xml.rels']).toContain('worksheets/sheet1.xml');
    expect(files['xl/worksheets/sheet1.xml']).toContain('preserve">Invoice</t>');
    expect(files['xl/worksheets/sheet1.xml']).toContain('preserve">$10</t>');
  });

  it('writes Excel-friendly cell references (A1, B1, C1...)', () => {
    const files = unzipXml(toWorkbook([{ name: 'S', rows: [row(['a', 'b', 'c'])] }]));
    const sheet = files['xl/worksheets/sheet1.xml'];
    expect(sheet).toContain('r="A1"');
    expect(sheet).toContain('r="B1"');
    expect(sheet).toContain('r="C1"');
  });

  it('emits one worksheet per sheet and orders them', () => {
    const files = unzipXml(toWorkbook([
      { name: 'First', rows: [row(['1'])] },
      { name: 'Second', rows: [row(['2'])] },
    ]));
    expect(files['xl/worksheets/sheet1.xml']).toContain('preserve">1</t>');
    expect(files['xl/worksheets/sheet2.xml']).toContain('preserve">2</t>');
    expect(files['xl/workbook.xml']).toContain('First');
    expect(files['xl/workbook.xml']).toContain('Second');
  });

  it('sanitizes illegal sheet name characters', () => {
    const files = unzipXml(toWorkbook([{ name: 'A[B]:C?*D', rows: [row(['x'])] }]));
    expect(files['xl/workbook.xml']).toContain('A B C D');
  });

  it('XML-escapes cell text', () => {
    const files = unzipXml(toWorkbook([{ name: 'S', rows: [row(['A < B & C > D "E"'])] }]));
    expect(files['xl/worksheets/sheet1.xml']).toContain('A &lt; B &amp; C &gt; D &quot;E&quot;');
  });
});