export const freeTier = {
  price: 0,
  name: 'Free',
  tagline: 'For native PDFs, unlimited. For scans, a fair daily slice.',
  includesTrue: true,
  features: [
    {
      text: 'Native (text-based) PDFs to Excel & CSV — unlimited files',
      detail: 'Parsed entirely in your browser. No upload, no server.',
    },
    { text: '3 scanned-PDF OCR conversions per day', detail: 'Each up to 20 pages.' },
    { text: 'Table preview before you download', detail: 'Check the extraction before committing.' },
    { text: 'No account, no watermark, no daily cap on native parsing', detail: 'One-off conversions, full stop.' },
  ] as { text: string; detail: string }[],
};

export const proTier = {
  priceMonthly: 9,
  priceYearly: 6,
  name: 'Pro',
  tagline: 'Everything in Free, plus OCR and batch handled at scale.',
  includesTrue: true,
  features: [
    { text: 'Unlimited OCR conversions', detail: 'Scanned PDFs, every day, no daily cap.' },
    { text: 'Up to 400 pages per scanned file', detail: 'Streaming OCR that copes with big scans.' },
    { text: 'Batch conversion — up to 20 files per run', detail: 'Native and scanned, mixed together.' },
    { text: 'Fidelity-preserving table detection', detail: 'Keeps layout, merged cells, and columns.' },
    { text: 'Priority OCR queue', detail: 'Your scans jump the queue on busy days.' },
  ] as { text: string; detail: string }[],
};

export const commonLimits = [
  { label: 'File formats out', value: '.xlsx and .csv' },
  { label: 'Native PDF page limit', value: '300 pages (browser permitting)' },
  { label: 'OCR free tier', value: '3 files / day, ≤ 20 pages each' },
  { label: 'OCR Pro tier', value: 'Unlimited, ≤ 400 pages each' },
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
    a: 'A scanned PDF is a picture of a page, and pictures have no "text" a browser can read. We detect that the file is image-based and switch to OCR — optical character recognition — which reads the letters out of the image. That is the one case where your file leaves your browser, because text recognition needs compute we cannot safely run client-side at scale.',
  },
  {
    q: 'Is OCR included in the free plan?',
    a: 'Yes. OCR is not a paid feature here. Free accounts get 3 scanned-file conversions per day, up to 20 pages each — enough for everyday receipts and forms. Pro lifts that to unlimited. Many online converters hide OCR behind a Pro trial; we state ours plainly instead.',
  },
  {
    q: 'Do I need to create an account to convert?',
    a: 'No. A single conversion never requires signup, for native or scanned files. Accounts exist only for Pro subscribers who want batch processing, higher limits, and a saved history. You can still use your quota of 3 free scans a day without an account.',
  },
  {
    q: 'What is the exact free limit on scanned files?',
    a: 'Free: 3 OCR conversions per day, each up to 20 pages. Pro: unlimited conversions, each up to 400 pages. Native PDFs have no file-size or daily limit in either plan — parsing happens on your hardware, so the file size is limited by your browser\'s capability, not our quota.',
  },
  {
    q: 'How do you handle large scanned PDFs?',
    a: 'Scans are processed in streaming batches rather than loaded whole, which is the common failure point for server-side OCR tools. On Pro, files of up to 400 pages convert without the timeouts that plague big scans elsewhere.',
  },
  {
    q: 'Why does a scanned PDF have to leave my browser at all?',
    a: 'Honest answer: text extraction from images is expensive. Doing it well at scale takes a trained recognition model and the compute to run it. Since we refuse to run models on your machine by silently shipping your data elsewhere, we are explicit about the trade-off — your scan goes to a dedicated OCR endpoint, is processed, and is deleted immediately afterwards. Your native PDFs never make that journey.',
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
    us: 'Included — 3 files/day, plainly stated',
    them: 'Gated behind a paid Pro trial',
  },
  {
    feature: 'Free-tier limits',
    us: 'Unlimited native + 3 scans/day, exact numbers',
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