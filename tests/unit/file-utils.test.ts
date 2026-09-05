import { describe, expect, it } from 'vitest';
import {
  baseName,
  extPart,
  formatBytes,
  memReadToArrayBuffer,
  sniffOfficeKind,
  u8ToString,
} from '../../src/lib/core/file-utils';

const bytes = (...b: number[]) => new Uint8Array(b);

describe('sniffOfficeKind', () => {
  it('detects PK-based docx containers', () => {
    expect(sniffOfficeKind(bytes(0x50, 0x4b, 0x03, 0x04, 0x00))).toBe('docx');
  });

  it('detects OLE (doc/ppt) containers', () => {
    expect(sniffOfficeKind(bytes(0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1))).toBe('doc');
  });

  it('detects PDF, JPEG and PNG signatures', () => {
    expect(sniffOfficeKind(bytes(0x25, 0x50, 0x44, 0x46))).toBe('pdf-native');
    expect(sniffOfficeKind(bytes(0xff, 0xd8, 0xff, 0xe0))).toBe('jpg');
    expect(sniffOfficeKind(bytes(0x89, 0x50, 0x4e, 0x47))).toBe('png');
  });

  it('returns null for short or unknown payloads', () => {
    expect(sniffOfficeKind(bytes(1, 2))).toBeNull();
    expect(sniffOfficeKind(bytes(0x41, 0x42, 0x43, 0x44))).toBeNull();
  });
});

describe('formatBytes', () => {
  it('formats KB and MB', () => {
    expect(formatBytes(2048)).toBe('2 KB');
    expect(formatBytes(1024)).toBe('1 KB');
    expect(formatBytes(1024 * 1024 * 2)).toBe('2.0 MB');
    expect(formatBytes(500)).toBe('0 KB');
  });
});

describe('extPart / baseName', () => {
  it('splits filename and extension', () => {
    expect(extPart('report.docx')).toBe('report');
    expect(extPart('report')).toBe('report');
    expect(baseName('report.pdf')).toBe('report');
    expect(baseName('slides/Quarterly Report.PPTX')).toBe('Quarterly Report');
    expect(baseName('scan.v2.png')).toBe('scan.v2');
  });
});

describe('u8ToString / memReadToArrayBuffer', () => {
  it('decodes UTF-8 and yields standalone buffers', () => {
    expect(u8ToString(new TextEncoder().encode('héllo'))).toBe('héllo');
    const buf = memReadToArrayBuffer(new Uint8Array([1, 2, 3]));
    expect(new Uint8Array(buf)).toEqual(new Uint8Array([1, 2, 3]));
  });
});