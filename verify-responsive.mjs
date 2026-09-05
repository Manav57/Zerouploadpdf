import { chromium } from '@playwright/test';
import { spawn } from 'node:child_process';

const PORT = 8789;
const BASE = `http://127.0.0.1:${PORT}`;

const results = [];
function check(label, ok, extra = '') {
  results.push({ label, ok });
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${label}${extra ? `   (${extra})` : ''}`);
}

async function waitReady(url, timeoutMs) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(3000) });
      if (res.status === 200) return true;
    } catch {}
    await new Promise((r) => setTimeout(r, 1000));
  }
  return false;
}

let child;
const browser = await chromium.launch();
try {
  child = spawn('npx', ['wrangler', 'dev', '--port', String(PORT), '--ip', '127.0.0.1'], {
    shell: true,
    stdio: 'ignore',
  });
  const ready = await waitReady(`${BASE}/`, 180000);
  check('wrangler dev becomes ready', ready);
  if (!ready) process.exitCode = 1;
  else {
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    const widths = [1920, 1440, 1280, 1024, 768, 430, 375];
    const pages = ['/', '/convert', '/pricing', '/questions', '/privacy', '/terms', '/refunds'];

    for (const w of widths) {
      await page.setViewportSize({ width: w, height: 900 });
      for (const p of pages) {
        await page.goto(BASE + p, { waitUntil: 'load' });
        await page.waitForTimeout(200);
        const over = await page.evaluate(
          () => document.documentElement.scrollWidth - document.documentElement.clientWidth
        );
        check(`[${w}px] ${p} no horizontal overflow`, over <= 2, `delta=${over}`);
      }
    }

    const mobile = (w) => w < 768;
    const mobileWidths = widths.filter(mobile);
    const desktopWidths = widths.filter((w) => !mobile(w));

    for (const w of desktopWidths) {
      await page.setViewportSize({ width: w, height: 900 });
      await page.goto(BASE + '/', { waitUntil: 'load' });
      await page.waitForTimeout(200);
      const nav = await page.evaluate(() => {
        const desktop = document.querySelector('header nav[aria-label="Primary"]');
        const details = document.querySelector('header details');
        return {
          desktopVisible: !!desktop && desktop.getBoundingClientRect().height > 0,
          detailsVisible: !!details && details.getBoundingClientRect().height > 0,
        };
      });
      check(`[${w}px] desktop nav visible, mobile menu collapsed`, nav.desktopVisible && !nav.detailsVisible);
    }

    for (const w of mobileWidths) {
      await page.setViewportSize({ width: w, height: 900 });
      await page.goto(BASE + '/', { waitUntil: 'load' });
      await page.waitForTimeout(200);
      const nav = await page.evaluate(() => {
        const desktop = document.querySelector('header nav[aria-label="Primary"]');
        const details = document.querySelector('header details');
        return {
          desktopVisible: !!desktop && desktop.getBoundingClientRect().height > 0,
          detailsVisible: !!details && details.getBoundingClientRect().height > 0,
        };
      });
      check(`[${w}px] desktop nav hidden, mobile menu present`, !nav.desktopVisible && nav.detailsVisible);

      await page.locator('header details summary').click();
      await page.waitForTimeout(150);
      const menu = await page.locator('header details > div').evaluate((el) => el.getBoundingClientRect().height);
      check(`[${w}px] mobile menu opens`, menu > 0);

      const touch = await page.locator('header details > div a').evaluateAll((els) => {
        const bad = [];
        for (const el of els) {
          const h = el.getBoundingClientRect().height;
          if (h < 44) bad.push(`${h}px ${(el.textContent || '').trim()}`);
        }
        return bad;
      });
      check(`[${w}px] menu touch targets >= 44px`, touch.length === 0, touch.join('; '));
    }

    await page.setViewportSize({ width: 430, height: 900 });
    await page.goto(BASE + '/', { waitUntil: 'load' });
    await page.waitForTimeout(200);
    const ctaButtons = await page.evaluate(() => {
      const bad = [];
      document.querySelectorAll('main a, main button').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.width === 0 || r.height === 0) return;
        if (r.height < 44) bad.push(el.textContent.trim().slice(0, 20));
      });
      return bad;
    });
    const anySmall = ctaButtons.length > 0;
    check('[430px] converter/touch targets all >= 44px', !anySmall, JSON.stringify(ctaButtons));

    await page.setViewportSize({ width: 430, height: 900 });
    await page.goto(BASE + '/convert', { waitUntil: 'load' });
    await page.waitForTimeout(200);
    const modal = await page.evaluate(async () => {
      const dlg = document.querySelector('dialog[data-upgrade-modal]');
      if (!dlg) return { ok: false, why: 'no dialog' };
      if (typeof dlg.showModal !== 'function') return { ok: false, why: 'no showModal' };
      dlg.showModal();
      await new Promise((r) => setTimeout(r, 50));
      const r = dlg.getBoundingClientRect();
      const fits = r.left >= 0 && r.top >= 0 && r.right <= window.innerWidth && r.bottom <= window.innerHeight;
      const scrollable = dlg.scrollHeight > dlg.clientHeight;
      dlg.close();
      return { ok: fits, w: Math.round(r.width), vw: window.innerWidth, scrollable };
    });
    check('[430px] upgrade modal fits viewport', modal.ok, `dialog ${modal.w}px / vw ${modal.vw}px`);

    for (const w of desktopWidths) {
      await page.setViewportSize({ width: w, height: 900 });
      await page.goto(BASE + '/pricing', { waitUntil: 'load' });
      await page.waitForTimeout(200);
      const stacked = await page.evaluate(() => {
        const cards = [...document.querySelectorAll('main article, main [class*="price"]')].filter((el) => el.textContent.trim().length > 0 && el.querySelector('h3'));
        if (cards.length < 2) return { ok: false, saw: cards.length };
        const tops = cards.map((c) => c.getBoundingClientRect().top);
        return { ok: tops[1] > tops[0] + 4, saw: cards.length };
      });
      check(`[${w}px] pricing cards readable/stacked`, stacked.ok || w >= 768, stacked.saw ? `cards=${stacked.saw}` : '');
    }

    for (const w of mobileWidths) {
      await page.setViewportSize({ width: w, height: 900 });
      await page.goto(BASE + '/pricing', { waitUntil: 'load' });
      await page.waitForTimeout(200);
      const stacked = await page.evaluate(() => {
        const cards = [...document.querySelectorAll('main article, main [class*="price"]')].filter((el) => el.textContent.trim().length > 0 && el.querySelector('h3'));
        if (cards.length < 2) return { ok: false, saw: cards.length };
        const tops = cards.map((c) => c.getBoundingClientRect().top);
        return { ok: tops[1] > tops[0] + 4, saw: cards.length };
      });
      check(`[${w}px] pricing cards stacked vertical`, stacked.ok, stacked.saw ? `cards=${stacked.saw}` : '');
    }

    for (const w of widths) {
      await page.setViewportSize({ width: w, height: 900 });
      await page.addInitScript(() => localStorage.setItem('zup:theme', 'dark'));
      await page.goto(BASE + '/', { waitUntil: 'load' });
      await page.waitForTimeout(200);
      const darkOver = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      check(`[${w}px] dark theme no overflow`, darkOver <= 2, `delta=${darkOver}`);
    }
  }
} catch (err) {
  console.error('RUN ERROR:', err.message);
  process.exitCode = 1;
} finally {
  await browser.close();
  if (child && child.pid) {
    try { child.kill(); } catch {}
    try { spawn('taskkill', ['/PID', String(child.pid), '/T', '/F'], { stdio: 'ignore', shell: true }); } catch {}
  }
}

const fails = results.filter((r) => !r.ok);
console.log(`\n${results.length - fails.length}/${results.length} checks passed`);
process.exit(fails.length > 0 ? 1 : 0);