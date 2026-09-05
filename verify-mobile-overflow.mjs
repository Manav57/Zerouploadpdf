import { chromium } from '@playwright/test';

const base = 'http://localhost:4321';
const locales = ['', 'es', 'ja', 'fr', 'de', 'pt', 'ko', 'it'];
const sections = ['', 'convert', 'pricing', 'privacy', 'questions'];

const pages = [];
for (const l of locales) {
  for (const s of sections) {
    pages.push(`/${l}${s ? `/${s}` : ''}`.replace(/^\/\//, '/'));
  }
}

const browser = await chromium.launch();
const results = [];
for (const path of pages) {
  const page = await browser.newPage({ viewport: { width: 360, height: 800 } });
  await page.goto(base + path, { waitUntil: 'networkidle' });
  const overflow = await page.evaluate(() => {
    const doc = document.documentElement;
    return {
      scrollWidth: doc.scrollWidth,
      clientWidth: doc.clientWidth,
      offending: [...document.querySelectorAll('*')]
        .filter((el) => el.getBoundingClientRect().right > doc.clientWidth + 1)
        .slice(0, 5)
        .map((el) => `${el.tagName.toLowerCase()}${el.id ? '#' + el.id : ''}.${[...el.classList].join('.')}`),
    };
  });
  results.push({
    path,
    ok: overflow.scrollWidth <= overflow.clientWidth + 1,
    scrollWidth: overflow.scrollWidth,
    offending: overflow.offending,
  });
  await page.close();
}
await browser.close();

const bad = results.filter((r) => !r.ok);
console.log(`checked ${results.length} pages, ${bad.length} overflowing`);
for (const r of bad) {
  console.log(`OVERFLOW ${r.path} scrollWidth=${r.scrollWidth} -> ${r.offending.join(', ')}`);
}
process.exit(bad.length ? 1 : 0);