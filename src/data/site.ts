export const freeTier = {
  price: 0,
  name: 'Free',
  tagline: 'A working product, not a trial: 10 conversions a day, every day.',
  includesTrue: true,
  features: [
    {
      text: 'PDF, Word, PowerPoint & image files to Excel / CSV',
      detail: 'DOCX, DOC, PPTX, PPT, JPG, PNG and PDF — all in one allowance.',
    },
    {
      text: '10 conversions every day',
      detail: 'One shared allowance for native and OCR files. Resets at midnight UTC.',
    },
    { text: 'Table preview before you download', detail: 'Check the extraction before committing.' },
    { text: 'No account, no watermark, no surprises', detail: 'One-off conversions, full stop.' },
  ] as { text: string; detail: string }[],
};

export const proTier = {
  priceMonthly: 9,
  priceYearly: 6,
  name: 'Pro',
  tagline: 'Everything in Free, plus unlimited conversions and batch at scale.',
  includesTrue: true,
  features: [
    { text: 'Unlimited conversions', detail: 'Native and OCR, every day, no daily cap.' },
    { text: 'Up to 400 pages per file', detail: 'Streaming OCR that copes with big scans.' },
    { text: 'Batch conversion — up to 20 files per run', detail: 'Native and scanned, mixed together.' },
    { text: 'Fidelity-preserving table detection', detail: 'Keeps layout, merged cells, and columns.' },
    { text: 'Priority OCR queue', detail: 'Your scans jump the queue on busy days.' },
  ] as { text: string; detail: string }[],
};

export const commonLimits = [
  { label: 'File formats out', value: '.xlsx and .csv' },
  { label: 'Native PDF page limit', value: '300 pages (browser permitting)' },
  { label: 'Free daily allowance', value: '10 conversions, any format' },
  { label: 'Pro allowance', value: 'Unlimited conversions, ≤ 400 pages each' },
  { label: 'Batch', value: 'Pro only, ≤ 20 files / run' },
  { label: 'Storage', value: 'Nothing stored. Ever.' },
];

export const faqs = [
  {
    q: 'What does "zero upload" actually mean for my PDF?',
    a: 'When you drop in a native (text-based) PDF, the file is opened and parsed directly in your browser tab. It is read from your disk into memory on your machine, converted to a spreadsheet there, and never transmitted. The words "zero upload" describe exactly that: your document\'s bytes do not travel to a server.',
  },
  {
    q: 'Are my files stored anywhere after conversion?',
    a: 'No. Native conversions happen in memory and the file is discarded when the tab closes. For scanned PDFs that are sent to OCR, the image is held only long enough to recognize the text, then deleted — we do not retain, archive, or train on your documents, and the OCR copy is not written to any long-term store.',
  },
  {
    q: 'What happens if my PDF is a scan or photos?',
    a: 'A scanned PDF is a picture of a page, and pictures have no "text" a browser can read. To convert a scanned PDF to Excel, we detect that the file is image-based and switch to OCR — optical character recognition — which reads the letters out of the image. That is the one case where your file leaves your browser, because text recognition needs compute we cannot safely run client-side at scale.',
  },
  {
    q: 'Is OCR included in the free plan?',
    a: 'Yes. OCR is not a paid feature here. Free includes everything inside one clear allowance: 10 conversions every day, covering PDF, Word, PowerPoint and image files — native and scanned alike. Pro lifts that to unlimited. Many online converters hide OCR behind a Pro trial; we state ours plainly instead.',
  },
  {
    q: 'Do I need to create an account to convert?',
    a: 'No. A single conversion never requires signup, for native or scanned files. Accounts exist only for Pro subscribers who want batch processing, higher limits, and a saved history. You can still use your quota of 10 free conversions a day without an account.',
  },
  {
    q: 'What is the exact free limit?',
    a: 'Free: 10 conversions per day across every supported format — PDF, DOCX, DOC, PPTX, PPT, JPG and PNG. The allowance resets at midnight UTC. Pro: unlimited conversions, each up to 400 pages. Parsing happens on your hardware and runs entirely in the browser tab, so a single file\u2019s practical size is set by your browser\u2019s capability, not by our quota.',
  },
  {
    q: 'How do you handle large scanned PDFs?',
    a: 'Scans are processed in streaming batches rather than loaded whole, which is the common failure point for server-side OCR tools. On Pro, files of up to 400 pages convert without the timeouts that plague big scans elsewhere.',
  },
  {
    q: 'Why does a scanned PDF have to leave my browser at all?',
    a: 'Honest answer: text extraction from images is expensive. Doing it well at scale takes a trained recognition model and the compute to run it. Since we refuse to run models on your machine by silently shipping your data elsewhere, we are explicit about the trade-off — your scan goes to a dedicated OCR endpoint, is processed, and is deleted immediately afterwards. Your native PDFs never make that journey.',
  },
  {
    q: 'Which file formats can I convert?',
    a: 'PDF, Word (DOCX and DOC), and PowerPoint (PPTX and PPT) files, plus JPG and PNG images. Output is Excel (.xlsx) or CSV (.csv). Any of the input formats counts the same way against your daily allowance — one file, one conversion — so a scanned PDF and a native Word file are equally covered by the free 10-per-day limit.',
  },
  {
    q: 'Does the daily limit count pages or files?',
    a: 'Files. Each document you convert — whether it has one page or three hundred — is one conversion. So the free allowance is 10 files per day across every format, and a 200-page native PDF still counts as just one. On Pro, batch runs of up to 20 files each count as 20 conversions, against no daily cap.',
  },
  {
    q: 'Is there a file size or page limit?',
    a: 'Text-based PDFs of up to 300 pages convert in the browser, with the practical size set by your computer\'s memory rather than by a server quota. Scanned files use streaming OCR to stay well-behaved on large documents — free scans convert comfortably into the hundreds of pages, and Pro extends the guaranteed ceiling to 400 pages per file.',
  },
{
    q: 'Which browsers and devices are supported?',
    a: 'The converter runs on current versions of Chrome, Edge, Firefox, and Safari. Because native parsing happens in your browser, it works on Windows, macOS, Linux, and iOS and Android tablets — no software install needed. Very old browsers (pre-2021) may miss features the PDF parser relies on.',
  },
  {
    q: 'Do you ever sell, train on, or share my documents?',
    a: 'No. Native files never reach any server, so there is nothing to sell, train on, or share. OCR scans are recognized and then deleted without being written to any long-term store — we do not archive, and we do not train models on user documents. The only party that ever sees a file is the OCR endpoint doing the recognition.',
  },
] as { q: string; a: string }[];

export const comparisonRows = [
  {
    feature: 'Where the conversion happens',
    us: 'In your browser tab, on your hardware',
    them: 'On their servers',
  },
  {
    feature: 'Your PDF after conversion',
    us: 'Only in memory — discarded, never stored',
    them: 'Uploaded, then auto-deleted after ~1 hour',
  },
  {
    feature: 'OCR (scanned PDFs) on the free plan',
    us: 'Included in your 10 free daily conversions',
    them: 'Gated behind a paid Pro trial',
  },
  {
    feature: 'Free-tier limits',
    us: 'Exactly 10 conversions/day, plainly stated',
    them: 'Vague daily task limits',
  },
  {
    feature: 'Signup for a single conversion',
    us: 'Never required',
    them: 'Not required — but your file still uploads',
  },
  {
    feature: 'Large scanned files',
    us: 'Streaming OCR handles up to 400-page scans',
    them: 'OCR frequently struggles on large scans',
  },
  {
    feature: 'Preview before download',
    us: 'Extracted table preview built in',
    them: 'Download blind, then hope',
  },
] as { feature: string; us: string; them: string }[];