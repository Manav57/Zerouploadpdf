import { test, expect } from '@playwright/test';

const PAGES = ['/', '/convert', '/pricing', '/privacy'];
const WIDTHS = [360, 768, 1024, 1440];

test.describe('QA audit — console, overflow, states, a11y', () => {
  for (const path of PAGES) {
    test(`no console errors or horizontal overflow on ${path}`, async ({ page }) => {
      const errors: string[] = [];
      page.on('console', (msg) => {
        if (msg.type() === 'error') errors.push(msg.text());
      });
      page.on('pageerror', (err) => errors.push(String(err)));

      for (const width of WIDTHS) {
        await page.setViewportSize({ width, height: 900 });
        await page.goto(path, { waitUntil: 'networkidle' });
        const overflow = await page.evaluate(
          () => document.documentElement.scrollWidth - window.innerWidth,
        );
        expect(overflow, `horizontal overflow of ${overflow}px at ${width}px on ${path}`).toBeLessThanOrEqual(1);
      }

      await page.goto(path, { waitUntil: 'networkidle' });
      expect(errors, `console/page errors on ${path}`).toEqual([]);
    });
  }

  test('converter exposes all five states', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto('/', { waitUntil: 'networkidle' });
    for (const pane of ['idle', 'reading', 'processing', 'preview', 'error']) {
      await expect(page.locator(`[data-pane="${pane}"]`)).toBeAttached();
    }
  });

  test('keyboard focus is visible when tabbing', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.keyboard.press('Tab');
    const focused = await page.evaluate(() => {
      const el = document.activeElement as HTMLElement;
      return {
        tag: el ? el.tagName : null,
        hasFocusVisible: el ? el.matches(':focus-visible') : false,
        outline: el ? getComputedStyle(el).outlineStyle : null,
      };
    });
    expect(focused.tag).toBeTruthy();
    expect(focused.hasFocusVisible).toBe(true);
    expect(focused.outline).not.toBe('none');
  });

  test('reduced-motion CSS ships in the loaded stylesheets', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/', { waitUntil: 'networkidle' });
    const prefersReduced = await page.evaluate(async () => {
      const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
      const assets = performance.getEntriesByType('resource')
        .map((r) => r.name)
        .filter((n) => n.endsWith('.css'));
      const css = await Promise.all(
        assets.map((url) => fetch(url).then((r) => r.text()).catch(() => '')),
      );
      return {
        reduced,
        inCss: css.join('\n').includes('prefers-reduced-motion'),
      };
    });
    expect(prefersReduced.reduced).toBe(true);
    expect(prefersReduced.inCss).toBe(true);
  });

  test('dark theme applies contrasting surface and text', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.locator('header button[data-theme-toggle]').first().click();
    const colors = await page.evaluate(() => {
      const body = getComputedStyle(document.body);
      return { bg: body.backgroundColor, color: body.color };
    });
    const lum = (hex: string) => {
      const m = hex.match(/\d+/g)!.map(Number);
      // luminance approximation from RGB
      return (0.2126 * m[0] + 0.7152 * m[1] + 0.0722 * m[2]) / 255;
    };
    expect(lum(colors.bg)).toBeLessThan(0.2);
    expect(lum(colors.color)).toBeGreaterThan(0.7);
  });
});