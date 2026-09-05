import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { ExtractResult } from '../../src/lib/core/formats';

const mockExtractPdfNative = vi.hoisted(() => vi.fn());
const mockParseOoxml = vi.hoisted(() => vi.fn());
const mockPostForRecognition = vi.hoisted(() => vi.fn());

vi.mock('../../src/lib/core/pdf', () => ({ extractPdfNative: mockExtractPdfNative }));
vi.mock('../../src/lib/core/ooxml', () => ({ parseOoxml: mockParseOoxml }));
vi.mock('../../src/lib/ocr/transport', () => ({ postForRecognition: mockPostForRecognition }));

import { runConversion, type OcrTransport } from '../../src/lib/core/pipeline';

const cells = (text: string) => ({ cells: [{ text }] });
const sheet = (name: string, rows: { cells: { text: string }[] }[]): ExtractResult['sheets'][number] => ({
  name,
  rows,
});

const makeFile = (bytes: Uint8Array, name: string, type = 'application/octet-stream') =>
  new File([bytes.buffer as ArrayBuffer], name, { type });

beforeEach(() => {
  mockExtractPdfNative.mockReset();
  mockParseOoxml.mockReset();
  mockPostForRecognition.mockReset();
});

describe('runConversion — OCR formats (png/jpg/pdf-scanned/doc/ppt)', () => {
  it('returns a success for an OCR result', async () => {
    mockPostForRecognition.mockResolvedValue({
      ok: true,
      sheets: [sheet('Sheet1', [cells('INV-1'), cells('INV-2')])],
      pages: 1,
      confidence: 88,
      kind: 'ocr',
    });
    const out = await runConversion(makeFile(new Uint8Array([1]), 'scan.png', 'image/png'), 'png');
    expect(out).toMatchObject({ kind: 'ocr', pages: 1, confidence: 88 });
  });

  it('passes through an OCR error and its code', async () => {
    mockPostForRecognition.mockResolvedValue({ ok: false, error: 'boom', code: 'limit' });
    const out = await runConversion(makeFile(new Uint8Array([1]), 'scan.png', 'image/png'), 'png');
    expect(out).toEqual({ kind: 'error', code: 'limit', message: 'boom' });
  });

  it('uses a custom transport when provided', async () => {
    const custom: OcrTransport = vi.fn().mockResolvedValue({
      ok: true,
      sheets: [sheet('S', [cells('x')])],
      pages: 1,
      confidence: 70,
      kind: 'ocr',
    });
    const out = await runConversion(makeFile(new Uint8Array([1]), 'scan.jpg', 'image/jpeg'), 'jpg', {
      ocrTransport: custom,
    });
    expect(out.kind).toBe('ocr');
    expect(custom).toHaveBeenCalledWith(expect.anything(), 'scan.jpg', 'image/jpeg');
  });
});

describe('runConversion — OOXML (docx/pptx)', () => {
  it('returns native sheets from a parsed docx', async () => {
    mockParseOoxml.mockReturnValue({ sheets: [sheet('Table1', [cells('Invoice')])], pageCount: 1 });
    const out = await runConversion(makeFile(new Uint8Array([1]), 'report.docx'), 'docx');
    expect(out).toMatchObject({ kind: 'native', pages: 1, confidence: 95 });
  });

  it('signals no-text when the docx has no rows', async () => {
    mockParseOoxml.mockReturnValue({ sheets: [sheet('Table1', [])], pageCount: 1 });
    const out = await runConversion(makeFile(new Uint8Array([1]), 'empty.docx'), 'docx');
    expect(out).toMatchObject({ kind: 'error', code: 'no-text' });
  });

  it('returns bad-container on a broken container', async () => {
    mockParseOoxml.mockImplementation(() => {
      throw new Error('Missing word/document.xml inside the .docx container.');
    });
    const out = await runConversion(makeFile(new Uint8Array([1]), 'broken.docx'), 'docx');
    expect(out.kind).toBe('error');
    if (out.kind === 'error') {
      expect(out.code).toBe('bad-container');
      expect(out.message.length).toBeGreaterThan(0);
    }
  });

  it('counts pptx slides as pages', async () => {
    mockParseOoxml.mockReturnValue({ sheets: [sheet('Slide 1', [cells('A')])], pageCount: 2 });
    const out = await runConversion(makeFile(new Uint8Array([1]), 'deck.pptx'), 'pptx');
    expect(out).toMatchObject({ kind: 'native', pages: 2 });
  });
});

describe('runConversion — pdf-native', () => {
  it('returns native sheets when the PDF has text', async () => {
    mockExtractPdfNative.mockResolvedValue({
      sheets: [sheet('Page 1', [cells('Invoice')])],
      pages: 1,
      confidence: 92,
    });
    const out = await runConversion(makeFile(new Uint8Array([1]), 'text.pdf'), 'pdf-native');
    expect(out).toMatchObject({ kind: 'native', pages: 1, confidence: 92 });
  });

  it('returns a no-text error for scanned PDFs without a text layer', async () => {
    mockExtractPdfNative.mockResolvedValue({ sheets: [sheet('Page 1', [])], pages: 1, confidence: 20 });
    const out = await runConversion(makeFile(new Uint8Array([1]), 'scan.pdf'), 'pdf-native');
    expect(out.kind).toBe('error');
    if (out.kind === 'error') {
      expect(out.code).toBe('no-text');
      expect(out.message).toContain('scan');
    }
  });
});

describe('runConversion — unexpected key', () => {
  it('returns unsupported', async () => {
    const out = await runConversion(
      makeFile(new Uint8Array([1]), 'x.txt'),
      'txt' as unknown as never,
    );
    expect(out).toMatchObject({ kind: 'error', code: 'unsupported' });
  });
});