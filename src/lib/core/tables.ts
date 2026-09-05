import type { TableCell, TableRow } from './formats';

export function toCsv(rows: TableRow[]): string {
  return rows
    .map((row) =>
      row.cells
        .map((cell) => {
          const t = cell.text.replace(/\s+/g, ' ').trim();
          if (t.includes(',') || t.includes('"') || t.includes('\n')) {
            return `"${t.replace(/"/g, '""')}"`;
          }
          return t;
        })
        .join(','),
    )
    .join('\n');
}

export function rowsFromLines(lines: string[]): TableRow[] {
  return lines
    .map((line) => ({
      cells: line
        .split(/[\t,;]+/)
        .map((s) => s.trim())
        .filter((s) => s.length > 0)
        .map((text): TableCell => ({ text })),
    }))
    .filter((row) => row.cells.length > 0);
}

export function rowsFromCells(cells: string[][]): TableRow[] {
  return cells.map((cellRow) => ({
    cells: cellRow.map((text): TableCell => ({ text })),
  }));
}

/**
 * Group a flat list of "label : value"-ish tuples into a single-row sheet of
 * key/value pairs (used by PPT/PPTX where slides carry no true table grid).
 */
export function rowsFromPairs(pairs: [string, string][]): TableRow[] {
  return pairs.map(([name, value]) => ({
    cells: [{ text: name }, { text: value }],
  }));
}

export interface TextItem {
  str: string;
  x: number;
  y: number;
  w?: number;
}

export interface GroupedLine {
  y: number;
  cells: TextItem[];
}

export interface GroupOptions {
  yTolerance?: number;
  xGapPx?: number;
  sortY?: 'asc' | 'desc';
}

/**
 * Heuristic table reconstruction for PDF/PPTX text runs: group text items into
 * lines by vertical proximity, then horizontally by column gaps.
 *
 * `sortY` selects the line ordering that yields top-to-bottom reading order for
 * the document's coordinate system: PDFs grow upward (use `'desc'`), while
 * PPTX/DOCX grow downward (use `'asc'`, the default).
 */
export function groupTextItems(
  items: TextItem[],
  { yTolerance = 2, xGapPx = 14, sortY = 'asc' }: GroupOptions = {},
): GroupedLine[] {
  if (items.length === 0) return [];
  const dir = sortY === 'desc' ? -1 : 1;
  const sorted = [...items].sort((a, b) => dir * (a.y - b.y) || a.x - b.x);
  const lines: GroupedLine[] = [];
  for (const item of sorted) {
    const line = lines.find(
      (l) =>
        l.y - yTolerance <= item.y &&
        item.y <= l.y + yTolerance,
    );
    if (line) {
      line.cells.push(item);
      line.y = (line.y + item.y) / 2;
    } else {
      lines.push({ y: item.y, cells: [item] });
    }
  }
  for (const line of lines) {
    line.cells.sort((a, b) => a.x - b.x);
    const merged: TextItem[] = [];
    for (const cell of line.cells) {
      const prev = merged[merged.length - 1];
      const prevEnd = prev ? prev.x + (prev.w ?? cell.str.length * 5) : -Infinity;
      if (prev && cell.x - prevEnd < xGapPx) {
        prev.str = `${prev.str} ${cell.str}`.trim();
        prev.w = (prev.w ?? 0) + (cell.w ?? 0) + (cell.x - prevEnd);
      } else {
        merged.push({ ...cell });
      }
    }
    line.cells = merged;
  }
  return lines;
}