export type ConversionFormat = 'xlsx' | 'csv';

export type InputKind = 'native-text' | 'image-ocr';

export type FileFormatKey =
  | 'pdf-native'
  | 'pdf-scanned'
  | 'docx'
  | 'doc'
  | 'pptx'
  | 'ppt'
  | 'png'
  | 'jpg';

export interface FileFormatSpec {
  key: FileFormatKey;
  label: string;
  extensions: string[];
  mimeTypes: string[];
  kind: InputKind;
  pageUnit?: 'page' | 'slide';
}

const jpg = ['image/jpeg', 'image/pjpeg'];
const png = ['image/png'];

export const FILE_FORMATS: Record<FileFormatKey, FileFormatSpec> = {
  'pdf-native': {
    key: 'pdf-native',
    label: 'PDF (native text)',
    extensions: ['.pdf'],
    mimeTypes: ['application/pdf'],
    kind: 'native-text',
    pageUnit: 'page',
  },
  'pdf-scanned': {
    key: 'pdf-scanned',
    label: 'PDF (scanned)',
    extensions: ['.pdf'],
    mimeTypes: ['application/pdf'],
    kind: 'image-ocr',
    pageUnit: 'page',
  },
  docx: {
    key: 'docx',
    label: 'Word (.docx)',
    extensions: ['.docx'],
    mimeTypes: [
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ],
    kind: 'native-text',
    pageUnit: 'page',
  },
  doc: {
    key: 'doc',
    label: 'Word (.doc)',
    extensions: ['.doc'],
    mimeTypes: ['application/msword'],
    kind: 'native-text',
    pageUnit: 'page',
  },
  pptx: {
    key: 'pptx',
    label: 'PowerPoint (.pptx)',
    extensions: ['.pptx'],
    mimeTypes: [
      'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    ],
    kind: 'native-text',
    pageUnit: 'slide',
  },
  ppt: {
    key: 'ppt',
    label: 'PowerPoint (.ppt)',
    extensions: ['.ppt'],
    mimeTypes: ['application/vnd.ms-powerpoint'],
    kind: 'native-text',
    pageUnit: 'slide',
  },
  png: {
    key: 'png',
    label: 'Image (.png)',
    extensions: ['.png'],
    mimeTypes: png,
    kind: 'image-ocr',
  },
  jpg: {
    key: 'jpg',
    label: 'Image (.jpg/.jpeg)',
    extensions: ['.jpg', '.jpeg'],
    mimeTypes: jpg,
    kind: 'image-ocr',
  },
};

/** Supported input extensions, in display order. */
export const SUPPORTED_INPUT_EXTENSIONS: string[] = [
  '.pdf',
  '.docx',
  '.doc',
  '.pptx',
  '.ppt',
  '.png',
  '.jpg',
  '.jpeg',
];

export function normalizeExtension(name: string): string {
  const match = /\.([a-z0-9]+)$/i.exec(name);
  if (!match) return '';
  return `.${match[1].toLowerCase()}`;
}

export function extensionToFormatKey(
  ext: string,
  isScanned = false,
): FileFormatKey | null {
  const e = normalizeExtension(ext);
  if (e === '.pdf') return isScanned ? 'pdf-scanned' : 'pdf-native';
  for (const key of Object.keys(FILE_FORMATS) as FileFormatKey[]) {
    if (key === 'pdf-native' || key === 'pdf-scanned') continue;
    if (FILE_FORMATS[key].extensions.includes(e)) return key;
  }
  return null;
}

const IMAGE_TYPES = new Set(FILE_FORMATS.png.mimeTypes.concat(FILE_FORMATS.jpg.mimeTypes));

export function mimeToFormatKey(mime: string): FileFormatKey | null {
  const m = mime.toLowerCase();
  if (m === 'application/pdf') return 'pdf-native';
  if (IMAGE_TYPES.has(m)) return m === 'image/png' ? 'png' : 'jpg';
  for (const key of Object.keys(FILE_FORMATS) as FileFormatKey[]) {
    if (FILE_FORMATS[key].kind === 'image-ocr') continue;
    if (FILE_FORMATS[key].mimeTypes.includes(m)) return key;
  }
  return null;
}

export function isImageKey(key: FileFormatKey): boolean {
  return FILE_FORMATS[key].kind === 'image-ocr';
}

export interface TableCell {
  text: string;
}

export interface TableRow {
  cells: TableCell[];
}

export interface TableSheet {
  name: string;
  rows: TableRow[];
}

export interface ExtractResult {
  sheets: TableSheet[];
  /** number of pages or slides / images consumed */
  pages: number;
  /** 1-100 */
  confidence: number;
}

export const SAMPLE_CUSTOMER_BASE = [
  'Acme Northwind',
  'Blue Ridge Co.',
  'Cascade Logistics',
  'Dover Printing',
  'Evergreen Supply',
  'Falcon Works',
  'Granite & Oak',
  'Harborline Freight',
];