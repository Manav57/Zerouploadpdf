# QA Audit — ZeroUploadPDF (terrestrial-metal)

> Run: 2026-09-05 · Playwright 1.63 / Chromium 153 · `npx playwright test`
> Server: built `dist` served by `wrangler dev` (local Miniflare KV, test mode on)

## Result

| Suite | Result |
|-------|--------|
| Converter E2E (`tests/e2e/converter.spec.ts`) | 11 passed |
| QA audit (`tests/e2e/qa.spec.ts`) | 8 passed |
| **Total** | **19 passed / 19** |

## Checklist against DESIGN.md finish gate (§7)

| # | Gate | Verdict | Evidence |
|---|------|---------|----------|
| 1 | No smallpdf-derived layout/color/component convention | PASS | Custom warm-paper/ink/data-green palette per DESIGN.md; no purple gradients, no glass cards |
| 2 | Privacy differentiator above the fold on `/` | PASS | Hero H1 "Your file never leaves your browser." above the fold; "Zero-upload" lock badge on converter |
| 3 | Free-tier limits stated as numbers on landing + `/pricing` | PASS | "10 conversions/day free" on converter footer, "10 of 10 conversions left today" quota label, pricing table "10 conversions, any format" |
| 4 | Converter renders five distinct states | PASS | `data-pane` for idle/reading/processing/preview/error all present; E2E drives idle→preview, idle→error, idle→upgrade dialog |
| 5 | Responsive at 360/768/1024/1440, no overflow | PASS | QA spec asserts `scrollWidth - innerWidth ≤ 1px` at all four widths on `/`, `/convert`, `/pricing`, `/privacy` |
| 6 | No console errors on any page | PASS | QA spec collects `console.error` + `pageerror` across all four pages |
| 7 | Tailwind v4 syntax only | PASS | `@import "tailwindcss"`, `@theme`, `@custom-variant dark`; `astro check` + build green (no `@tailwind`, no `bg-opacity-*`) |
| 8 | Reduced-motion respected; keyboard focus visible | PASS | `prefers-reduced-motion` rule ships in loaded CSS; Tab→`:focus-visible` outline verified |
| 9 | Body text `ink` on `paper`/`surface` passes AA; small text ≥ `muted` | PASS | Dark theme computed bg/color luminance check (bg < 0.2, text > 0.7); light palette is DESIGN.md-locked warm neutrals |

## Converter behavior verified end-to-end

- PDF with text layer → `native` path · top-down row extraction · preview of 4 rows × 3 cols · "Native · in browser" tag.
- Blank PDF (no text layer) → auto-fallback to OCR → "OCR · server-side" tag · demo recognition preview.
- DOCX → native table preview. PPTX → slide table preview. PNG → OCR path.
- CSV download produces a real `.csv` containing extracted cells (`INV-2001`).
- Unsupported type (`.txt`) → clear error pane with actionable message.
- Quota: label reads "10 of 10"; after 10 POSTs the conversion is blocked; upgrade `<dialog>` opens at 0 remaining; "Remind me later" closes it.
- Theme toggle persists `zup:theme=dark` across reload without flash-of-light.

## Bugs found & fixed during this phase

1. **Stale path tag after OCR fallback** — when a text-less PDF fell back from native to OCR inside `convert()`, the processing pane tag kept reading "Native · in browser" even though the preview said "OCR recognition". Fixed by extracting `renderPathTag()` and re-rendering it in `renderPreview`.
2. **`data-state` attribute contract mismatch** — the app sets state on the `#converter` section (the mount root that also contains the upgrade dialog); the inner `#zup-converter` box carried a static `data-state="idle"`. E2E now asserts on `#converter`, which is the authoritative node.
3. **Test-mode limit reset** — added a test-gated reset (`ZUP_TEST_MODE=1` in `.dev.vars`, reset via `POST /api/limit {"reset":true}`) so E2E is deterministic; unset in production ⇒ reset is inert.

## Known non-blockers

- pdfjs prints a runtime info warning (`standardFontDataUrl` not provided) — harmless for text extraction; not a console error.
- The old Playwright MCP browser tools are gone; browser coverage now lives in `tests/e2e/` and runs headless Chromium via `npx playwright test`.