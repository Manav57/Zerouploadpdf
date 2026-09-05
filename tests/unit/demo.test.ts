import { describe, expect, it } from 'vitest';
import {
  OCR_HEADERS,
  demoInvoices,
  demoOcrResult,
  invoiceLine,
} from '../../src/lib/shares/demo';
import { recognize } from '../../src/server/ocr-provider';

describe('demoInvoices', () => {
  it('produces well-formed invoice rows', () => {
    const rows = demoInvoices(4);
    expect(rows).toHaveLength(4);
    expect(rows[0].cells).toHaveLength(OCR_HEADERS.length);
    expect(rows[0].cells[0].text).toBe('INV-2001');
  });

  it('produces stable deterministic values', () => {
    expect(invoiceLine(0)).toEqual(invoiceLine(0));
    expect(invoiceLine(1)[0]).toBe('INV-2002');
  });
});

describe('demoOcrResult', () => {
  it('returns a native-shaped extract result', () => {
    const r = demoOcrResult(12);
    expect(r.sheets).toHaveLength(1);
    expect(r.sheets[0].name).toBe('Sheet1');
    expect(r.sheets[0].rows).toHaveLength(12);
    expect(r.confidence).toBe(88);
    expect(r.pages).toBe(1);
  });
});

describe('recognize (demo provider)', () => {
  it('returns OCR-shaped rows', async () => {
    const res = await recognize({ mimeType: 'image/png', name: 'x.png', size: 4 }, new ArrayBuffer(4));
    expect(res.sheets[0].rows.length).toBeGreaterThan(0);
    expect(res.confidence).toBeGreaterThanOrEqual(1);
  });

  it('rejects empty uploads', async () => {
    await expect(
      recognize({ mimeType: 'image/png', name: 'x.png', size: 0 }, new ArrayBuffer(0)),
    ).rejects.toThrow('empty-upload');
  });
});