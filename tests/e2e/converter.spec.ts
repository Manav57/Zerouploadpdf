import { test, expect, type Page } from '@playwright/test';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const here = fileURLToPath(new URL('.', import.meta.url));
const fixture = (name: string) => join(here, '..', 'fixtures', name);

const convertHome = (p: Page) => p.goto('/', { waitUntil: 'networkidle' });

async function resetQuota(p: Page): Promise<void> {
  const res = await p.request.post('http://127.0.0.1:8787/api/limit', {
    data: { reset: true },
    headers: { accept: 'application/json' },
  });
  expect(res.status()).toBe(200);
  const body = (await res.json()) as { ok: boolean; used: number };
  expect(body.ok).toBe(true);
  expect(body.used).toBe(0);
}

async function pathToIdle(p: Page) {
  const root = p.locator('#converter');
  await expect(root).toHaveAttribute('data-state', 'idle');
}

test.describe('ZeroUploadPDF — landing + converter', () => {
  test.beforeEach(async ({ page }) => {
    await resetQuota(page);
  });

  test('home page renders the privacy promise, converter, and supported formats', async ({ page }) => {
    await convertHome(page);
    await expect(page).toHaveTitle(/PDF/);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.locator('#converter')).toBeVisible();
    await pathToIdle(page);
    await expect(page.locator('[data-dropzone]')).toBeVisible();
    for (const chip of ['PDF', 'DOCX', 'DOC', 'PPTX', 'PPT', 'JPG', 'PNG']) {
      await expect(page.getByText(chip, { exact: true }).first()).toBeVisible();
    }
  });

  test('quota label reports 10 conversions left today', async ({ page }) => {
    await convertHome(page);
    await expect(page.locator('[data-limit-label]')).toContainText('10 of 10 conversions left today');
  });

  test('theme toggle flips to dark and persists', async ({ page }) => {
    await convertHome(page);
    const root = page.locator('html');
    await expect(root).not.toHaveClass(/dark/);
    await page.locator('header button[data-theme-toggle]').first().click();
    await expect(root).toHaveClass(/dark/);
    const stored = await page.evaluate(() => localStorage.getItem('zup:theme'));
    expect(stored).toBe('dark');
    await page.reload();
    await expect(root).toHaveClass(/dark/);
  });
});

test.describe('ZeroUploadPDF — native conversions', () => {
  test.beforeEach(async ({ page }) => {
    await resetQuota(page);
    await convertHome(page);
    await pathToIdle(page);
  });

  test('PDF with extractable text parses natively and shows a preview', async ({ page }) => {
    await page.locator('[data-file-input]').setInputFiles(fixture('sample-invoice.pdf'));
    await expect(page.locator('#converter')).toHaveAttribute('data-path', 'native');
    await expect(page.locator('#converter')).toHaveAttribute('data-state', 'preview', { timeout: 30_000 });
    await expect(page.locator('[data-result-meta]')).toContainText('sample-invoice');
    await expect(page.locator('[data-extract-rows]')).toHaveText(/^[1-9][0-9]*$/);
    expect(await page.locator('[data-preview-head] th').count()).toBeGreaterThanOrEqual(3);
    expect(await page.locator('[data-preview-rows] tr').count()).toBeGreaterThan(0);
    await expect(page.locator('[data-path-tag]')).toContainText('Native');
  });

  test('PDF without a text layer falls back to the OCR path', async ({ page }) => {
    await page.locator('[data-file-input]').setInputFiles(fixture('sample-blank.pdf'));
    await expect(page.locator('#converter')).toHaveAttribute('data-state', 'preview', { timeout: 30_000 });
    await expect(page.locator('[data-path-tag]')).toContainText('OCR');
  });

  test('DOCX native conversion renders a table preview', async ({ page }) => {
    await page.locator('[data-file-input]').setInputFiles(fixture('sample-template.docx'));
    await expect(page.locator('#converter')).toHaveAttribute('data-path', 'native');
    await expect(page.locator('#converter')).toHaveAttribute('data-state', 'preview', { timeout: 30_000 });
    await expect(page.locator('[data-result-meta]')).toContainText('sample-template');
    expect(await page.locator('[data-preview-rows] tr').count()).toBeGreaterThan(0);
  });

  test('PPTX native conversion shows slide table', async ({ page }) => {
    await page.locator('[data-file-input]').setInputFiles(fixture('sample-template.pptx'));
    await expect(page.locator('#converter')).toHaveAttribute('data-path', 'native');
    await expect(page.locator('#converter')).toHaveAttribute('data-state', 'preview', { timeout: 30_000 });
    expect(await page.locator('[data-preview-rows] tr').count()).toBeGreaterThan(0);
  });

  test('downloads a CSV via the exported link', async ({ page }) => {
    const downloadPromise = page.waitForEvent('download');
    await page.locator('[data-file-input]').setInputFiles(fixture('sample-invoice.pdf'));
    await page.locator('#converter[data-state="preview"]').waitFor({ timeout: 30_000 });
    await page.locator('[data-download-csv]').click();
    const download = await downloadPromise;
    expect(download.suggestedFilename()).toMatch(/\.csv$/);
    const path = await download.path();
    const fs = await import('node:fs');
    const content = fs.readFileSync(path!, 'utf8');
    expect(content).toContain('INV-2001');
  });
});

test.describe('ZeroUploadPDF — OCR path', () => {
  test.beforeEach(async ({ page }) => {
    await resetQuota(page);
    await convertHome(page);
    await pathToIdle(page);
  });

  test('PNG routes through OCR and previews recognized rows', async ({ page }) => {
    await page.locator('[data-file-input]').setInputFiles(fixture('sample-scan.png'));
    await expect(page.locator('#converter')).toHaveAttribute('data-path', 'ocr');
    await expect(page.locator('#converter')).toHaveAttribute('data-state', 'preview', { timeout: 30_000 });
    await expect(page.locator('[data-path-tag]')).toContainText('OCR');
    expect(await page.locator('[data-preview-rows] tr').count()).toBeGreaterThan(0);
  });
});

test.describe('ZeroUploadPDF — errors and limits', () => {
  test.beforeEach(async ({ page }) => {
    await resetQuota(page);
    await convertHome(page);
    await pathToIdle(page);
  });

  test('unsupported file type shows a clear error', async ({ page }) => {
    await page.locator('[data-file-input]').setInputFiles({ name: 'notes.txt', mimeType: 'text/plain', buffer: Buffer.from('hello') });
    await expect(page.locator('#converter')).toHaveAttribute('data-state', 'error');
    await expect(page.locator('[data-error-title]')).toContainText('Unsupported');
  });

  test('exhausting the quota opens the upgrade dialog', async ({ page }) => {
    for (let i = 0; i < 10; i++) {
      const res = await page.request.post('http://127.0.0.1:8787/api/limit', {
        data: { id: 'browser-conversion' },
      });
      expect((await res.json()).allowed).toBe(true);
    }
    await page.locator('[data-file-input]').setInputFiles(fixture('sample-invoice.pdf'));
    await expect(page.locator('[data-upgrade-modal]')).toBeVisible();
    await expect(page.locator('[data-limit-label]')).toContainText('0 of 10 conversions left today');
    await page.locator('[data-upgrade-close]').click();
    await expect(page.locator('[data-upgrade-modal]')).not.toBeVisible();
  });
});