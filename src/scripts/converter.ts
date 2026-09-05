import type { ExtractResult, FileFormatKey, TableSheet } from '../lib/core/formats';
import { extensionToFormatKey, normalizeExtension } from '../lib/core/formats';
import { runConversion, type PipeOutcome } from '../lib/core/pipeline';
import { toCsv } from '../lib/core/tables';
import { toWorkbook } from '../lib/core/xlsx';

type State = 'idle' | 'reading' | 'processing' | 'preview' | 'error';
type Path = 'native' | 'ocr';

interface LimitDecision {
  allowed: boolean;
  used: number;
  limit: number;
  remaining: number;
}

interface ConverterElements {
  root: HTMLElement;
  panes: Record<State, HTMLElement>;
  fileName: HTMLElement;
  fileSize: HTMLElement;
  readingNote: HTMLElement;
  processTitle: HTMLElement;
  processSub: HTMLElement;
  progressLabel: HTMLElement;
  pathTag: HTMLElement;
  previewHead: HTMLElement;
  previewRows: HTMLElement;
  previewHint: HTMLElement;
  resultMeta: HTMLElement;
  extractSheet: HTMLElement;
  extractRows: HTMLElement;
  errorTitle: HTMLElement;
  errorMessage: HTMLElement;
  dropzone: HTMLElement;
  fileInput: HTMLInputElement;
  formatButtons: HTMLElement[];
  downloadXlsx: HTMLElement;
  downloadCsv: HTMLElement;
  limitBar: HTMLElement;
  limitLabel: HTMLElement;
  upgradeDialog: HTMLDialogElement;
  upgradeClose: HTMLElement;
  upgradePricing: HTMLElement;
}

const MAX_FILE_BYTES = 100 * 1024 * 1024;
const PREVIEW_ROWS = 12;

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

class Converter {
  private el: ConverterElements;
  private file: File | null = null;
  private formatKey: FileFormatKey | null = null;
  private path: Path = 'native';
  private forcedOcr = false;
  private result: ExtractResult | null = null;
  private timer: number | undefined;

  constructor(root: HTMLElement) {
    const q = <T extends HTMLElement>(sel: string) => root.querySelector<T>(sel)!;
    this.el = {
      root,
      panes: {
        idle: q('[data-pane="idle"]'),
        reading: q('[data-pane="reading"]'),
        processing: q('[data-pane="processing"]'),
        preview: q('[data-pane="preview"]'),
        error: q('[data-pane="error"]'),
      },
      fileName: q('[data-file-name]'),
      fileSize: q('[data-file-size]'),
      readingNote: q('[data-reading-note]'),
      processTitle: q('[data-process-title]'),
      processSub: q('[data-process-sub]'),
      progressLabel: q('[data-progress-label]'),
      pathTag: q('[data-path-tag]'),
      previewHead: q('[data-preview-head]'),
      previewRows: q('[data-preview-rows]'),
      previewHint: q('[data-preview-hint]'),
      resultMeta: q('[data-result-meta]'),
      extractSheet: q('[data-extract-sheet]'),
      extractRows: q('[data-extract-rows]'),
      errorTitle: q('[data-error-title]'),
      errorMessage: q('[data-error-message]'),
      dropzone: q('[data-dropzone]'),
      fileInput: q('[data-file-input]'),
      formatButtons: Array.from(root.querySelectorAll<HTMLElement>('[data-format]')),
      downloadXlsx: q('[data-download-xlsx]'),
      downloadCsv: q('[data-download-csv]'),
      limitBar: q('[data-limit-bar]'),
      limitLabel: q('[data-limit-label]'),
      upgradeDialog: q('[data-upgrade-modal]'),
      upgradeClose: q('[data-upgrade-close]'),
      upgradePricing: q('[data-upgrade-pricing]'),
    };

    this.readParams();
    this.bind();
    this.setState('idle');
    void this.refreshQuota();
  }

  private readParams(): void {
    const params = new URLSearchParams(window.location.search);
    const fmt = params.get('format');
    if (fmt === 'csv' || fmt === 'xlsx') this.setFormat(fmt);
    this.forcedOcr = params.get('ocr') === '1';
  }

  private bind(): void {
    const el = this.el;

    el.dropzone.addEventListener('click', () => el.fileInput.click());
    el.fileInput.addEventListener('change', () => {
      const file = el.fileInput.files?.[0];
      if (file) void this.handleFile(file);
    });

    for (const btn of el.formatButtons) {
      btn.addEventListener('click', () => this.setFormat(btn.dataset.format as 'xlsx' | 'csv'));
    }

    for (const evt of ['dragenter', 'dragover']) {
      el.dropzone.addEventListener(evt, (e) => {
        e.preventDefault();
        el.dropzone.classList.add('border-primary', 'bg-primary-soft/40');
      });
    }
    for (const evt of ['dragleave', 'drop']) {
      el.dropzone.addEventListener(evt, (e) => {
        e.preventDefault();
        el.dropzone.classList.remove('border-primary', 'bg-primary-soft/40');
      });
    }
    el.dropzone.addEventListener('drop', (e) => {
      const file = (e as DragEvent).dataTransfer?.files?.[0];
      if (file) void this.handleFile(file);
    });

    for (const reset of rootResolver()) reset.addEventListener('click', () => this.reset());

    el.downloadCsv.addEventListener('click', () => this.export('csv'));
    el.downloadXlsx.addEventListener('click', () => this.export('xlsx'));

    el.upgradeClose.addEventListener('click', () => el.upgradeDialog.close());
    el.upgradeDialog.addEventListener('click', (e) => {
      if (e.target === el.upgradeDialog) el.upgradeDialog.close();
    });
    el.upgradePricing.addEventListener('click', () => el.upgradeDialog.close());
  }

  private setFormat(fmt: 'xlsx' | 'csv'): void {
    for (const btn of this.el.formatButtons) {
      const active = btn.dataset.format === fmt;
      btn.classList.toggle('bg-primary', active);
      btn.classList.toggle('text-white', active);
      btn.classList.toggle('hover:bg-primary-strong', active);
      btn.classList.toggle('text-muted', !active);
      btn.classList.toggle('hover:text-ink', !active);
    }
  }

  private reset(): void {
    if (this.timer) window.clearInterval(this.timer);
    this.file = null;
    this.formatKey = null;
    this.result = null;
    this.el.fileInput.value = '';
    this.setState('idle');
  }

  private setState(state: State): void {
    this.el.root.dataset.state = state;
    for (const [name, pane] of Object.entries(this.el.panes) as [State, HTMLElement][]) {
      pane.hidden = name !== state;
    }
  }

  private setPath(path: Path): void {
    this.path = path;
    this.el.root.dataset.path = path;
  }

  private refreshQuota(): void {
    fetch('/api/limit', { method: 'GET', headers: { accept: 'application/json' } })
      .then((r) => r.json() as Promise<LimitDecision>)
      .then((d) => this.renderQuota(d))
      .catch(() => undefined);
  }

  private renderQuota(d: LimitDecision): void {
    const pct = Math.round((d.used / d.limit) * 100);
    this.el.limitBar.style.width = `${pct}%`;
    this.el.limitLabel.textContent = `${d.remaining} of ${d.limit} conversions left today`;
  }

  private async handleFile(file: File): Promise<void> {
    const key = extensionToFormatKey(normalizeExtension(file.name), this.forcedOcr);
    if (!key) {
      this.showError(
        'Unsupported file',
        'We convert PDF, DOCX, DOC, PPTX, PPT, JPG and PNG. That file type is not included — pick one of those instead.',
      );
      return;
    }
    if (file.size > MAX_FILE_BYTES) {
      this.showError(
        'File too large',
        `This file is ${formatBytes(file.size)}, over our 100 MB guardrail.`,
      );
      return;
    }
    this.file = file;
    this.formatKey = key;

    let decision: LimitDecision;
    try {
      decision = await fetch('/api/limit', {
        method: 'POST',
        headers: { 'content-type': 'application/json', accept: 'application/json' },
        body: JSON.stringify({ id: 'browser-conversion' }),
      }).then((r) => r.json() as Promise<LimitDecision>);
    } catch {
      this.showError(
        'Allowance check failed',
        'We could not confirm your daily allowance. Check your connection and try again.',
      );
      return;
    }
    if (!decision.allowed) {
      this.renderQuota(decision);
      if (!this.el.upgradeDialog.open) this.el.upgradeDialog.showModal();
      return;
    }
    this.renderQuota(decision);

    if (key === 'png' || key === 'jpg' || key === 'doc' || key === 'ppt') {
      this.setPath('ocr');
    } else if (key === 'docx' || key === 'pptx') {
      this.setPath('native');
    } else {
      this.setPath(this.forcedOcr ? 'ocr' : 'native');
    }
    await this.run();
  }

  private async run(): Promise<void> {
    const el = this.el;
    const f = this.file!;
    el.fileName.textContent = f.name;
    el.fileSize.textContent = formatBytes(f.size);

    const isOcr = this.path === 'ocr';
    el.readingNote.textContent = isOcr
      ? 'Sending to the recognition endpoint — the image is deleted right after.'
      : 'Opening in your browser — nothing has been uploaded.';

    this.setState('reading');
    await delay(650);

    this.renderProcessing();
    this.setState('processing');

    const outcome = await Promise.all([this.convert(), delay(1000)]).then(([o]) => o);

    if (this.timer) window.clearInterval(this.timer);
    el.progressLabel.textContent = 'Done';

    if (outcome.kind === 'error') {
      this.showErrorCode(outcome.code, outcome.message);
      return;
    }
    this.renderPreview(outcome);
    this.setState('preview');
  }

  private renderProcessing(): void {
    const el = this.el;
    const scanned = this.path === 'ocr';

    this.renderPathTag(scanned);

    el.processTitle.textContent = scanned
      ? 'Recognizing text in your scanned pages'
      : 'Extracting tables from your document';
    el.processSub.textContent = scanned
      ? 'The image is sent to a dedicated recognition endpoint and deleted immediately afterwards.'
      : 'Columns and text are parsed locally. Your file never leaves this device.';

    const total = scanned ? 8 + ((this.file?.size ?? 0) % 14) : 8;
    let step = 1;
    if (this.timer) window.clearInterval(this.timer);
    this.timer = window.setInterval(() => {
      step += 1 + Math.floor(Math.random() * 4);
      const capped = Math.min(step, total);
      el.progressLabel.textContent = `${capped * 10}%`;
    }, 160);
  }

  private renderPathTag(scanned: boolean): void {
    const el = this.el;
    el.pathTag.className =
      'inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[0.7rem] font-medium uppercase tracking-[0.08em] ' +
      (scanned ? 'bg-accent-soft text-accent' : 'bg-primary-soft text-primary');
    el.pathTag.textContent = scanned ? 'OCR · server-side' : 'Native · in browser';
  }

  private async convert(): Promise<PipeOutcome> {
    const file = this.file!;
    const key = this.formatKey!;

    if (key === 'pdf-native' && !this.forcedOcr) {
      const first = await runConversion(file, 'pdf-native');
      if (first.kind === 'error' && first.code === 'no-text') {
        this.setPath('ocr');
        return runConversion(file, 'pdf-scanned');
      }
      return first;
    }
    return runConversion(file, key);
  }

  private sheetForPreview(result: ExtractResult): TableSheet {
    return result.sheets.find((s) => s.rows.length > 0) ?? result.sheets[0];
  }

  private renderPreview(outcome: ExtractResult & { kind: 'native' | 'ocr' }): void {
    this.result = outcome;
    const el = this.el;
    const sheet = this.sheetForPreview(outcome);
    const rows = sheet.rows;
    const header = rows[0]?.cells.map((c) => c.text) ?? [];
    const bodyRows = rows.slice(1, 1 + PREVIEW_ROWS);

    this.renderPathTag(this.path === 'ocr');

    el.previewHead.innerHTML = '';
    for (const col of header) {
      const th = document.createElement('th');
      th.scope = 'col';
      th.textContent = col;
      th.className =
        'px-3 py-2 font-mono text-[0.7rem] font-medium uppercase tracking-[0.08em] text-ink-soft whitespace-nowrap';
      el.previewHead.appendChild(th);
    }

    el.previewRows.innerHTML = '';
    bodyRows.forEach((row, i) => {
      const tr = document.createElement('tr');
      tr.className = i % 2 ? 'bg-paper/50' : '';
      const cellCount = header.length || row.cells.length;
      for (let j = 0; j < cellCount; j++) {
        const td = document.createElement('td');
        td.textContent = row.cells[j]?.text ?? '';
        td.className = 'border-b border-border/60 px-3 py-2 whitespace-nowrap';
        tr.appendChild(td);
      }
      el.previewRows.appendChild(tr);
    });

    el.extractSheet.textContent = sheet.name;
    el.extractRows.textContent = String(rows.length);
    const base = this.file!.name.replace(normalizeExtension(this.file!.name), '');
    const kindLabel = this.path === 'ocr' ? 'OCR recognition' : 'native parse';
    const conf = this.path === 'ocr' ? ` · ${outcome.confidence}% confidence` : '';
    el.resultMeta.textContent = `${base} · ${sheet.name} · ${rows.length} rows · ${kindLabel}${conf}`;
    el.previewHint.textContent = rows.length > PREVIEW_ROWS
      ? `— first ${PREVIEW_ROWS} rows shown; the full extraction lands in your download.`
      : '— all extracted rows shown, ready to download.';
  }

  private showErrorCode(code: string, message: string): void {
    const map: Record<string, [string, string]> = {
      unsupported: [
        'Unsupported file',
        'We convert PDF, DOCX, DOC, PPTX, PPT, JPG and PNG. That file type is not included.',
      ],
      'no-text': ['No extractable text', message],
      'bad-container': ['Could not open the file', message],
      'ocr-failed': ['Recognition failed', message],
    };
    const entry = map[code];
    if (entry) {
      this.showError(entry[0], entry[1]);
    } else {
      this.showError('Conversion failed', message || 'Something went wrong while converting this file.');
    }
  }

  private showError(title: string, message: string): void {
    this.el.errorTitle.textContent = title;
    this.el.errorMessage.textContent = message;
    this.setState('error');
  }

  private export(kind: 'xlsx' | 'csv'): void {
    if (!this.file || !this.result) return;
    this.setFormat(kind);
    const sheets = this.result.sheets.filter((s) => s.rows.length > 0);
    if (sheets.length === 0) return;

    let blob: Blob;
    if (kind === 'xlsx') {
      const bytes = toWorkbook(sheets);
      const part = bytes.slice(0);
      blob = new Blob([part], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
    } else {
      blob = new Blob([toCsv(sheets[0].rows)], { type: 'text/csv;charset=utf-8' });
    }

    const base = this.file.name.replace(normalizeExtension(this.file.name), '');
    triggerDownload(blob, `${base}.${kind}`);
  }
}

function triggerDownload(blob: Blob, fileName: string): void {
  const a = document.createElement('a');
  const url = URL.createObjectURL(blob);
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function formatBytes(bytes: number): string {
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  return `${Math.round(bytes / 1024)} KB`;
}

function rootResolver(): HTMLElement[] {
  return Array.from(
    document.querySelectorAll<HTMLElement>('#zup-converter [data-reset], #zup-converter [data-retry]'),
  );
}

export function mountConverter(root: HTMLElement | null): void {
  if (!root || root.dataset.mounted) return;
  root.dataset.mounted = '1';
  new Converter(root);
}