import type { FileFormatKey } from './formats';

export function formatBytes(bytes: number): string {
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  return `${Math.round(bytes / 1024)} KB`;
}

export function fileToString(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result ?? ''));
    reader.onerror = () => reject(reader.error ?? new Error('Read failed'));
    reader.readAsText(file);
  });
}

export function fileToArrayBuffer(file: File): Promise<ArrayBuffer> {
  return file.arrayBuffer();
}

export function extPart(name: string): string {
  const i = name.lastIndexOf('.');
  if (i <= 0) return name;
  return name.slice(0, i);
}

export function baseName(name: string): string {
  return (name.match(/([^/\\]+)$/)?.[1] ?? name).replace(/\.(pdf|docx|doc|pptx|ppt|png|jpe?g|tiff?)$/i, '');
}

export interface ParsedZipEntry {
  name: string;
  data?: Uint8Array;
}

/**
 * Infers a structural input kind from a RAW BYTE SIGNATURE, which is the
 * strongest signal available in a browser context (extension + mime can lie).
 * Every tag here corresponds to an ECMA-376 XML part name for .docx/.pptx.
 * For binary formats (DOC/PPT/OLE + PDF) we return the leaf tag instead and
 * let callers decide.
 */
export function sniffOfficeKind(bytes: Uint8Array | ArrayBuffer): FileFormatKey | null {
  const u8 = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  if (u8.length < 4) return null;
  if (u8[0] === 0x50 && u8[1] === 0x4b && u8[2] === 0x03 && u8[3] === 0x04) {
    return 'docx';
  }
  if (u8[0] === 0xd0 && u8[1] === 0xcf && u8[2] === 0x11 && u8[3] === 0xe0) {
    return 'doc';
  }
  if (u8[0] === 0x25 && u8[1] === 0x50 && u8[2] === 0x44 && u8[3] === 0x46) {
    return 'pdf-native';
  }
  if (u8[0] === 0xff && u8[1] === 0xd8 && u8[2] === 0xff) {
    return 'jpg';
  }
  if (u8[0] === 0x89 && u8[1] === 0x50 && u8[2] === 0x4e && u8[3] === 0x47) {
    return 'png';
  }
  return null;
}

export function u8ToString(u8: Uint8Array): string {
  return new TextDecoder('utf-8').decode(u8);
}

export function memReadToArrayBuffer(u8: Uint8Array): ArrayBuffer {
  return u8.slice().buffer;
}