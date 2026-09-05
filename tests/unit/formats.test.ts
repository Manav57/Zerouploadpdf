import { describe, expect, it } from 'vitest';
import {
  FILE_FORMATS,
  extensionToFormatKey,
  isImageKey,
  mimeToFormatKey,
  normalizeExtension,
} from '../../src/lib/core/formats';

describe('normalizeExtension', () => {
  it('lowercases and keeps the dot', () => {
    expect(normalizeExtension('REPORT.PDF')).toBe('.pdf');
    expect(normalizeExtension('scan.PNG')).toBe('.png');
  });

  it('returns empty string when there is no extension', () => {
    expect(normalizeExtension('README')).toBe('');
  });

  it('treats a dotted filename suffix as its extension', () => {
    expect(normalizeExtension('.hidden')).toBe('.hidden');
  });
});

describe('extensionToFormatKey', () => {
  it('maps every text format extension', () => {
    expect(extensionToFormatKey('file.PDF')).toBe('pdf-native');
    expect(extensionToFormatKey('file.docx')).toBe('docx');
    expect(extensionToFormatKey('file.DOC')).toBe('doc');
    expect(extensionToFormatKey('file.pptx')).toBe('pptx');
    expect(extensionToFormatKey('file.ppt')).toBe('ppt');
    expect(extensionToFormatKey('file.jpg')).toBe('jpg');
    expect(extensionToFormatKey('file.jpeg')).toBe('jpg');
    expect(extensionToFormatKey('file.png')).toBe('png');
  });

  it('returns pdf-scanned when the scanned flag is set', () => {
    expect(extensionToFormatKey('scan.pdf', true)).toBe('pdf-scanned');
  });

  it('returns null for unsupported types', () => {
    expect(extensionToFormatKey('file.txt')).toBeNull();
    expect(extensionToFormatKey('file.exe')).toBeNull();
  });
});

describe('mimeToFormatKey', () => {
  it('maps MIME types to format keys', () => {
    expect(mimeToFormatKey('application/pdf')).toBe('pdf-native');
    expect(mimeToFormatKey('application/msword')).toBe('doc');
    expect(mimeToFormatKey('application/vnd.ms-powerpoint')).toBe('ppt');
    expect(mimeToFormatKey('image/png')).toBe('png');
    expect(mimeToFormatKey('image/jpeg')).toBe('jpg');
    expect(mimeToFormatKey('application/octet-stream')).toBeNull();
  });
});

describe('FILE_FORMATS', () => {
  it('keeps one native key per supported input extension', () => {
    const seen = new Map<string, string>();
    for (const spec of Object.values(FILE_FORMATS)) {
      if (spec.key === 'pdf-scanned') continue; // shares .pdf with pdf-native
      for (const ext of spec.extensions) {
        const current = seen.get(ext);
        if (current) throw new Error(`extension ${ext} claimed by both ${current} and ${spec.key}`);
        seen.set(ext, spec.key);
      }
    }
    expect(seen.size).toBe(Object.keys(FILE_FORMATS).length);
  });

  it('flags only images as OCR kinds', () => {
    expect(isImageKey('png')).toBe(true);
    expect(isImageKey('jpg')).toBe(true);
    expect(isImageKey('docx')).toBe(false);
    expect(isImageKey('pdf-scanned')).toBe(true);
    expect(isImageKey('pdf-native')).toBe(false);
  });
});