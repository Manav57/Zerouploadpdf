import { zipSync, strToU8 } from 'fflate';
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
mkdirSync(here, { recursive: true });

// ---------- DOCX with a 3-column table ----------
const docxRows = (() => {
  const inv = ['2001', '2002', '2003', '2004'];
  const cust = ['Acme Northwind', 'Blue Ridge Co.', 'Cascade Logistics', 'Dover Printing'];
  const amt = ['240.00', '450.00', '870.00', '1260.00'];
  let cells = '';
  for (let i = 0; i < inv.length; i++) {
    cells +=
      `<w:tr><w:tc><w:p><w:r><w:t>INV-${inv[i]}</w:t></w:r></w:p></w:tc>` +
      `<w:tc><w:p><w:r><w:t>${cust[i]}</w:t></w:r></w:p></w:tc>` +
      `<w:tc><w:p><w:r><w:t>$${amt[i]}</w:t></w:r></w:p></w:tc></w:tr>`;
  }
  return cells;
})();

const documentXml =
  `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>` +
  `<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">` +
  `<w:body>` +
  `<w:p><w:r><w:t>Invoice summary - generated fixture</w:t></w:r></w:p>` +
  `<w:tbl><w:tblGrid><w:gridCol w:w="2000"/><w:gridCol w:w="3000"/><w:gridCol w:w="1500"/></w:tblGrid>` +
  `<w:tr><w:tc><w:p><w:r><w:t>Invoice</w:t></w:r></w:p></w:tc>` +
  `<w:tc><w:p><w:r><w:t>Customer</w:t></w:r></w:p></w:tc>` +
  `<w:tc><w:p><w:r><w:t>Amount</w:t></w:r></w:p></w:tc></w:tr>` +
  docxRows +
  `</w:tbl><w:p><w:r><w:t>End of fixture.</w:t></w:r></w:p>` +
  `</w:body></w:document>`;

const docx = zipSync({
  '[Content_Types].xml': strToU8(
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">' +
      '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>' +
      '<Default Extension="xml" ContentType="application/xml"/>' +
      '<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>' +
      '</Types>',
  ),
  '_rels/.rels': strToU8(
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
      '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>' +
      '</Relationships>',
  ),
  'word/document.xml': strToU8(documentXml),
});
writeFileSync(join(here, 'sample-template.docx'), docx);

// ---------- PPTX with title + table ----------
const slide1Xml =
  `<p:sld xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main">` +
  `<p:cSld><p:spTree>` +
  `<p:sp><p:txBody><a:p><a:r><a:t>Quarterly report - fixture</a:t></a:r></a:p></p:txBody></p:sp>` +
  `<p:graphicFrame><p:graphicFramePr/><a:graphic><a:graphicData>` +
  `<a:tbl><a:tblGrid><a:gridCol w="2500"/><a:gridCol w="2500"/><a:gridCol w="2500"/></a:tblGrid>` +
  `<a:tr h="400"><a:tc><a:txBody><a:p><a:r><a:t>Region</a:t></a:r></a:p></a:txBody></a:tc>` +
  `<a:tc><a:txBody><a:p><a:r><a:t>Revenue</a:t></a:r></a:p></a:txBody></a:tc>` +
  `<a:tc><a:txBody><a:p><a:r><a:t>Growth</a:t></a:r></a:p></a:txBody></a:tc></a:tr>` +
  `<a:tr h="400"><a:tc><a:txBody><a:p><a:r><a:t>East</a:t></a:r></a:p></a:txBody></a:tc>` +
  `<a:tc><a:txBody><a:p><a:r><a:t>120000</a:t></a:r></a:p></a:txBody></a:tc>` +
  `<a:tc><a:txBody><a:p><a:r><a:t>9.2%</a:t></a:r></a:p></a:txBody></a:tc></a:tr>` +
  `<a:tr h="400"><a:tc><a:txBody><a:p><a:r><a:t>West</a:t></a:r></a:p></a:txBody></a:tc>` +
  `<a:tc><a:txBody><a:p><a:r><a:t>98000</a:t></a:r></a:p></a:txBody></a:tc>` +
  `<a:tc><a:txBody><a:p><a:r><a:t>4.1%</a:t></a:r></a:p></a:txBody></a:tc></a:tr>` +
  `</a:tbl></a:graphicData></a:graphic></p:graphicFrame>` +
  `</p:spTree></p:cSld></p:sld>`;

const slide2Xml =
  `<p:sld xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main">` +
  `<p:cSld><p:spTree>` +
  `<p:sp><p:txBody><a:p><a:r><a:t>Outlook next quarter</a:t></a:r></a:p></p:txBody></p:sp>` +
  `</p:spTree></p:cSld></p:sld>`;

const pptx = zipSync({
  '[Content_Types].xml': strToU8(
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">' +
      '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>' +
      '<Default Extension="xml" ContentType="application/xml"/>' +
      '<Override PartName="/ppt/presentation.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml"/>' +
      '<Override PartName="/ppt/slides/slide1.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slide+xml"/>' +
      '<Override PartName="/ppt/slides/slide2.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slide+xml"/>' +
      '</Types>',
  ),
  '_rels/.rels': strToU8(
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
      '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="ppt/presentation.xml"/>' +
      '</Relationships>',
  ),
  'ppt/presentation.xml': strToU8(
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<p:presentation xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main">' +
      '<p:sldIdLst><p:sldId id="256" r:id="rId1"/><p:sldId id="257" r:id="rId2"/></p:sldIdLst>' +
      '<p:sldSz cx="9144000" cy="6858000"/></p:presentation>',
  ),
  'ppt/_rels/presentation.xml.rels': strToU8(
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
      '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide" Target="slides/slide1.xml"/>' +
      '<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide" Target="slides/slide2.xml"/>' +
      '</Relationships>',
  ),
  'ppt/slides/slide1.xml': strToU8(slide1Xml),
  'ppt/slides/slide2.xml': strToU8(slide2Xml),
});
writeFileSync(join(here, 'sample-template.pptx'), pptx);

// ---------- Minimal text-bearing PDF ----------
const ROWS = [
  ['Invoice', 'Customer', 'Amount'],
  ['INV-2001', 'Acme Northwind', '$240.00'],
  ['INV-2002', 'Blue Ridge Co.', '$450.00'],
  ['INV-2003', 'Cascade Logistics', '$870.00'],
];
const X = [72, 210, 420];
const Y0 = 720;
const ROW_H = 28;

let content = 'BT\n/F1 12 Tf\n2 TL\n';
ROWS.forEach((row, r) => {
  row.forEach((cell, c) => {
    content += `1 0 0 1 ${X[c]} ${Y0 - r * ROW_H} Tm (${cell}) Tj\n`;
  });
});
content += 'ET\n';

const stream = Buffer.from(content, 'latin1');
const pdfObjects = [
  '<< /Type /Catalog /Pages 2 0 R >>',
  '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
  `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>`,
  '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
  `<< /Length ${stream.length} >>\nstream\n${content}endstream`,
];

let pdf = '%PDF-1.4\n';
const offsets = [];
for (let i = 0; i < pdfObjects.length; i++) {
  offsets.push(Buffer.byteLength(pdf));
  pdf += `${i + 1} 0 obj ${pdfObjects[i]} endobj\n`;
}
const xrefStart = Buffer.byteLength(pdf);
pdf += 'xref\n0 6\n0000000000 65535 f \n';
for (const off of offsets) {
  pdf += `${String(off).padStart(10, '0')} 00000 n \n`;
}
pdf += `trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF\n`;
writeFileSync(join(here, 'sample-invoice.pdf'), Buffer.from(pdf, 'latin1'));

// ---------- Blank-page PDF (no text layer; forces OCR fallback) ----------
const blankStream = Buffer.from('BT\nET\n', 'latin1');
const blankObjects = [
  '<< /Type /Catalog /Pages 2 0 R >>',
  '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
  '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>',
  '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
  `<< /Length ${blankStream.length} >>\nstream\nBT\nET\nendstream`,
];

let blankPdf = '%PDF-1.4\n';
const blankOffsets = [];
for (let i = 0; i < blankObjects.length; i++) {
  blankOffsets.push(Buffer.byteLength(blankPdf));
  blankPdf += `${i + 1} 0 obj ${blankObjects[i]} endobj\n`;
}
const blankXrefStart = Buffer.byteLength(blankPdf);
blankPdf += 'xref\n0 6\n0000000000 65535 f \n';
for (const off of blankOffsets) {
  blankPdf += `${String(off).padStart(10, '0')} 00000 n \n`;
}
blankPdf += `trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${blankXrefStart}\n%%EOF\n`;
writeFileSync(join(here, 'sample-blank.pdf'), Buffer.from(blankPdf, 'latin1'));

// ---------- Tiny valid PNG (for OCR path) ----------
const tinyPng = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFUlEQVR42mP8z8AARAwMjIxgAAvvBggAAP5fAg8QIE6jAAAAAElFTkSuQmCC',
  'base64',
);
writeFileSync(join(here, 'sample-scan.png'), tinyPng);

console.log('fixtures written to', here);