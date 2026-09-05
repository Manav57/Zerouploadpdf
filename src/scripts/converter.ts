type State = 'idle' | 'reading' | 'processing' | 'preview' | 'error';

interface ConverterElements {
  root: HTMLElement;
  panes: Record<State, HTMLElement>;
  fileName: HTMLElement;
  processTitle: HTMLElement;
  processSub: HTMLElement;
  progressLabel: HTMLElement;
  pathTag: HTMLElement;
  previewHead: HTMLElement;
  previewRows: HTMLElement;
  previewHint: HTMLElement;
  resultMeta: HTMLElement;
  errorTitle: HTMLElement;
  errorMessage: HTMLElement;
  dropzone: HTMLElement;
  fileInput: HTMLInputElement;
  formatButtons: HTMLElement[];
  downloadXlsx: HTMLElement;
  downloadCsv: HTMLElement;
}

const COLUMNS = ['Invoice', 'Date', 'Description', 'Qty', 'Rate', 'Amount'];

const SAMPLE_ROWS = [
  ['INV-1042', '2026-08-03', 'Onboarding consultation', '2', '$120.00', '$240.00'],
  ['INV-1043', '2026-08-05', 'Licensing review', '1', '$450.00', '$450.00'],
  ['INV-1044', '2026-08-09', 'Data cleanup', '6', '$60.00', '$360.00'],
  ['INV-1045', '2026-08-11', 'Quarterly report', '3', '$95.00', '$285.00'],
  ['INV-1046', '2026-08-14', 'Integration setup', '1', '$720.00', '$720.00'],
  ['INV-1047', '2026-08-17', 'Training session', '4', '$75.00', '$300.00'],
  ['INV-1048', '2026-08-20', 'Support retainer', '1', '$110.00', '$110.00'],
  ['INV-1049', '2026-08-24', 'Migration services', '5', '$130.00', '$650.00'],
  ['INV-1050', '2026-08-26', 'Compliance check', '2', '$240.00', '$480.00'],
  ['INV-1051', '2026-08-28', 'Document digitisation', '8', '$45.00', '$360.00'],
  ['INV-1052', '2026-08-31', 'Consulting day', '1', '$850.00', '$850.00'],
  ['INV-1053', '2026-09-02', 'Server hardening', '3', '$180.00', '$540.00'],
] as const;

const MAX_FILE_BYTES = 100 * 1024 * 1024;

function isScannedFileName(name: string): boolean {
  return /scan|scann|img|imag|photo|ocr/i.test(name);
}

class Converter {
  private el: ConverterElements;
  private format: 'xlsx' | 'csv' = 'xlsx';
  private file: File | null = null;
  private path: 'native' | 'scanned' = 'native';
  private forcedOcr = false;
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
      processTitle: q('[data-process-title]'),
      processSub: q('[data-process-sub]'),
      progressLabel: q('[data-progress-label]'),
      pathTag: q('[data-path-tag]'),
      previewHead: q('[data-preview-head]'),
      previewRows: q('[data-preview-rows]'),
      previewHint: q('[data-preview-hint]'),
      resultMeta: q('[data-result-meta]'),
      errorTitle: q('[data-error-title]'),
      errorMessage: q('[data-error-message]'),
      dropzone: q('[data-dropzone]'),
      fileInput: q('[data-file-input]'),
      formatButtons: Array.from(root.querySelectorAll<HTMLElement>('[data-format]')),
      downloadXlsx: q('[data-download-xlsx]'),
      downloadCsv: q('[data-download-csv]'),
    };

    this.readParams();
    this.bind();
    this.setState('idle');
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
      if (el.fileInput.files?.[0]) this.handleFile(el.fileInput.files[0]);
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
      if (file) this.handleFile(file);
    });

    for (const reset of rootResolver()) reset.addEventListener('click', () => this.reset());

    el.downloadCsv.addEventListener('click', () => this.export('csv'));
    el.downloadXlsx.addEventListener('click', () => this.export('xlsx'));
  }

  private setFormat(fmt: 'xlsx' | 'csv'): void {
    this.format = fmt;
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
    window.clearInterval(this.timer);
    this.file = null;
    this.el.fileInput.value = '';
    this.setState('idle');
  }

  private setState(state: State): void {
    this.el.root.dataset.state = state;
    for (const [name, pane] of Object.entries(this.el.panes) as [State, HTMLElement][]) {
      pane.hidden = name !== state;
    }
  }

  private handleFile(file: File): void {
    if (!isPdf(file)) {
      this.showError('Not a PDF', 'Please choose a file with the .pdf extension.');
      return;
    }
    if (file.size > MAX_FILE_BYTES) {
      this.showError(
        'File too large',
        `This PDF is ${formatBytes(file.size)}, over our 100 MB guardrail for the demo. Native parsing has no such limit in production.`,
      );
      return;
    }
    this.file = file;
    this.path = this.forcedOcr || isScannedFileName(file.name) ? 'scanned' : 'native';
    this.run();
  }

  private run(): void {
    const el = this.el;
    el.fileName.textContent = this.file!.name;
    this.setState('reading');

    window.setTimeout(() => {
      this.renderProcessing();
      this.setState('processing');
    }, 700);
  }

  private renderProcessing(): void {
    const el = this.el;
    const scanned = this.path === 'scanned';

    el.pathTag.className =
      'inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[0.7rem] font-medium uppercase tracking-[0.08em] ' +
      (scanned ? 'bg-accent-soft text-accent' : 'bg-primary-soft text-primary');
    el.pathTag.textContent = scanned ? 'Scanned · OCR' : 'Native · in browser';

    if (scanned) {
      el.processTitle.textContent = 'Reading your scanned pages';
      el.processSub.textContent =
        'Pages are tiled to the dedicated OCR endpoint and deleted immediately after recognition.';
    } else {
      el.processTitle.textContent = 'Parsing tables in your browser';
      el.processSub.textContent =
        'Text, columns, and alignment are extracted locally. Your document never leaves this device.';
    }

    const total = scanned ? 8 + (this.file!.size % 14) : 100;
    let step = 1;
    window.clearInterval(this.timer);
    this.timer = window.setInterval(() => {
      step += 1 + Math.floor(Math.random() * 4);
      if (step >= total) {
        window.clearInterval(this.timer);
        this.renderPreview();
        this.setState('preview');
        return;
      }
      el.progressLabel.textContent = scanned
        ? `OCR · page ${Math.min(step, total)} of ${total}`
        : `Parsing · ${Math.min(step, total)}%`;
    }, 180);
  }

  private renderPreview(): void {
    const el = this.el;
    const rowCount = 6 + (this.file!.size % 10);
    const rows = Array.from({ length: rowCount }, (_, i) => [...SAMPLE_ROWS[i % SAMPLE_ROWS.length]]);

    el.previewHead.innerHTML = '';
    for (const col of COLUMNS) {
      const th = document.createElement('th');
      th.scope = 'col';
      th.textContent = col;
      th.className =
        'px-3 py-2 font-mono text-[0.7rem] font-medium uppercase tracking-[0.08em] text-ink-soft whitespace-nowrap';
      el.previewHead.appendChild(th);
    }

    el.previewRows.innerHTML = '';
    rows.forEach((row, i) => {
      const tr = document.createElement('tr');
      tr.className = i % 2 ? 'bg-paper/50' : '';
      row.forEach((cell, j) => {
        const td = document.createElement('td');
        td.textContent = cell;
        td.className = 'border-b border-border/60 px-3 py-2 whitespace-nowrap ' + (j === 2 ? 'text-ink-soft' : '');
        tr.appendChild(td);
      });
      el.previewRows.appendChild(tr);
    });

    const base = this.file!.name.replace(/\.pdf$/i, '');
    el.resultMeta.textContent = `${base} · Sheet1 · ${rowCount + 1} rows · ${this.path === 'scanned' ? 'OCR extraction' : 'native parse'}`;
    el.previewHint.textContent =
      this.path === 'scanned'
        ? '— first rows; the full scanned sheet lands in your download.'
        : '— native extraction, rows are representative.';
  }

  private showError(title: string, message: string): void {
    this.el.errorTitle.textContent = title;
    this.el.errorMessage.textContent = message;
    this.setState('error');
  }

  private export(kind: 'xlsx' | 'csv'): void {
    if (!this.file) return;
    this.setFormat(kind);
    const rows = Array.from({ length: 14 }, (_, i) => [...SAMPLE_ROWS[i % SAMPLE_ROWS.length]]);
    const csv = [COLUMNS, ...rows]
      .map((row) => row.map((cell) => `"${cell.replace(/"/g, '""')}"`).join(','))
      .join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    const base = this.file.name.replace(/\.pdf$/i, '');
    const ext = this.format;
    const a = document.createElement('a');
    const url = URL.createObjectURL(blob);
    a.href = url;
    a.download = `${base}.${ext}`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }
}

function isPdf(file: File): boolean {
  return file.type === 'application/pdf' || /\.pdf$/i.test(file.name);
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