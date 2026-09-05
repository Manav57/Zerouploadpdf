import { beforeEach, describe, expect, it, vi } from 'vitest';

const fakeGetDocument = vi.hoisted(() => vi.fn());
const fakeDestroy = vi.hoisted(() => vi.fn());

vi.mock('pdfjs-dist', () => ({
  GlobalWorkerOptions: { workerSrc: '' },
  getDocument: fakeGetDocument,
}));

import { extractPdfNative } from '../../src/lib/core/pdf';

function makeDoc(pages: { items: { str: string; width?: number; transform?: number[] }[] }[]) {
  return {
    numPages: pages.length,
    getPage: vi.fn().mockImplementation(async (p: number) => ({
      getTextContent: async () => ({ items: pages[p - 1].items }),
    })),
  };
}

function loadingTask(doc: unknown) {
  fakeDestroy.mockReset();
  return {
    promise: Promise.resolve(doc),
    destroy: fakeDestroy,
  };
}

const line = (y: number, text: string, x = 72) => ({
  str: text,
  width: text.length * 7,
  transform: [1, 0, 0, 1, x, y],
});

beforeEach(() => {
  fakeGetDocument.mockReset();
});

describe('extractPdfNative', () => {
  it('extracts pages into top-to-bottom row sheets', async () => {
    fakeGetDocument.mockReturnValue(
      loadingTask(
        makeDoc([
          {
            items: [
              line(720, 'Invoice', 72),
              line(720, 'Customer', 210),
              line(692, 'INV-1', 72),
              line(692, 'Acme', 210),
            ],
          },
          { items: [line(720, 'Second page', 72)] },
        ]),
      ),
    );

    const { sheets, pages, confidence } = await extractPdfNative(new ArrayBuffer(4));
    expect(pages).toBe(2);
    expect(confidence).toBeGreaterThan(50);
    expect(sheets[0].name).toBe('Page 1');
    expect(sheets[0].rows[0].cells.map((c) => c.text)).toEqual(['Invoice', 'Customer']);
    expect(sheets[0].rows[1].cells.map((c) => c.text)).toEqual(['INV-1', 'Acme']);
    expect(sheets[1].rows[0].cells[0].text).toBe('Second page');
    expect(fakeDestroy).toHaveBeenCalled();
  });

  it('skips whitespace-only items and drops empty lines', async () => {
    fakeGetDocument.mockReturnValue(
      loadingTask(makeDoc([{ items: [{ str: '   ', width: 1, transform: [0, 0, 0, 0, 1, 1] }, line(700, 'X')] }])),
    );
    const { sheets } = await extractPdfNative(new ArrayBuffer(4));
    expect(sheets[0].rows).toHaveLength(1);
    expect(sheets[0].rows[0].cells[0].text).toBe('X');
  });

  it('caps the page count at maxPages', async () => {
    fakeGetDocument.mockReturnValue(
      loadingTask(makeDoc([{ items: [line(700, '1')] }, { items: [line(700, '2')] }, { items: [line(700, '3')] }])),
    );
    const { pages, sheets } = await extractPdfNative(new ArrayBuffer(4), 2);
    expect(pages).toBe(2);
    expect(sheets).toHaveLength(2);
  });

  it('reports low confidence when no text is present', async () => {
    fakeGetDocument.mockReturnValue(loadingTask(makeDoc([{ items: [] }])));
    const { confidence, sheets } = await extractPdfNative(new ArrayBuffer(4));
    expect(confidence).toBe(20);
    expect(sheets[0].rows).toHaveLength(0);
  });
});