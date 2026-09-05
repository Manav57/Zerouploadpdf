import { describe, expect, it } from 'vitest';
import {
  type TextItem,
  groupTextItems,
  rowsFromCells,
  rowsFromLines,
  rowsFromPairs,
  toCsv,
} from '../../src/lib/core/tables';

const c = (str: string, x: number, y: number, w?: number): TextItem => ({
  str,
  x,
  y,
  w,
});

describe('toCsv', () => {
  it('joins cells with commas and lines with newlines', () => {
    const csv = toCsv([{ cells: [{ text: 'a' }, { text: 'b' }] }, { cells: [{ text: 'c' }] }]);
    expect(csv).toBe('a,b\nc');
  });

  it('quotes cells that contain commas or quotes', () => {
    expect(toCsv([{ cells: [{ text: 'a,b' }] }])).toBe('"a,b"');
    expect(toCsv([{ cells: [{ text: 'say "hi"' }] }])).toBe('"say ""hi"""');
  });

  it('normalizes newlines to spaces inside cells (no row injection)', () => {
    expect(toCsv([{ cells: [{ text: 'a\nb,c' }] }])).toBe('"a b,c"');
  });
});

describe('rowsFromLines / rowsFromCells / rowsFromPairs', () => {
  it('splits tab/semicolon/comma separated lines into cells', () => {
    const rows = rowsFromLines(['a\tb c', 'x;y', 'one,two']);
    expect(rows.map((r) => r.cells.map((c) => c.text))).toEqual([
      ['a', 'b c'],
      ['x', 'y'],
      ['one', 'two'],
    ]);
  });

  it('drops empty cells and empty rows', () => {
    const rows = rowsFromLines(['', '  ,  ', 'ok']);
    expect(rows).toHaveLength(1);
    expect(rows[0].cells[0].text).toBe('ok');
  });

  it('builds rows from a cell grid', () => {
    expect(rowsFromCells([['h1', 'h2'], ['a', 'b']])[1].cells[1].text).toBe('b');
  });

  it('builds key/value rows from pairs', () => {
    const rows = rowsFromPairs([
      ['Total', '120'],
      ['VAT', '20'],
    ]);
    expect(rows[0].cells.map((x) => x.text)).toEqual(['Total', '120']);
  });
});

describe('groupTextItems', () => {
  it('groups a single line into columns split by x gap', () => {
    const items = [
      c('Invoice', 72, 700),
      c('Customer', 210, 700),
      c('Amount', 420, 700),
    ];
    const lines = groupTextItems(items, { xGapPx: 18 });
    const cells = lines[0].cells.map((x) => x.str);
    expect(lines).toHaveLength(1);
    expect(cells).toEqual(['Invoice', 'Customer', 'Amount']);
  });

  it('orders lines top-to-bottom when sortY is desc (PDF coordinates)', () => {
    const items = [
      c('bottom', 72, 660),
      c('top', 72, 720),
      c('middle', 72, 690),
    ];
    const lines = groupTextItems(items, { sortY: 'desc' });
    expect(lines.map((l) => l.cells[0].str)).toEqual(['top', 'middle', 'bottom']);
  });

  it('orders lines top-to-bottom when sortY is asc (slide coordinates)', () => {
    const items = [
      c('top', 72, 100),
      c('middle', 72, 150),
      c('bottom', 72, 200),
    ];
    const lines = groupTextItems(items);
    expect(lines.map((l) => l.cells[0].str)).toEqual(['top', 'middle', 'bottom']);
  });

  it('merges horizontally-adjacent fragments on the same line', () => {
    const lines = groupTextItems(
      [c('In', 72, 700), c('voice', 90, 700), c('Acme', 210, 700)],
      { xGapPx: 18 },
    );
    expect(lines[0].cells.map((x) => x.str)).toEqual(['In voice', 'Acme']);
  });

  it('keeps fragments with a large x gap as separate columns', () => {
    const lines = groupTextItems([c('A', 72, 700, 10), c('B', 430, 700, 10)], { xGapPx: 18 });
    expect(lines[0].cells.map((x) => x.str)).toEqual(['A', 'B']);
  });

  it('returns an empty array for no items', () => {
    expect(groupTextItems([])).toEqual([]);
  });
});