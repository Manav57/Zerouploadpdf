# DESIGN.md — ZeroUploadPDF design contract

This document is the single source of truth for visual design on the ZeroUploadPDF
site. Colors, type, spacing, tone, and layout must be implemented as described here.
If any product brief conflicts with this document, this document wins. Nothing in
this document is derived from smallpdf.com or any competitor UI.

## 1. Concept

**"Paperwork that stays on the desk."**

ZeroUploadPDF turns documents into spreadsheets. Its defining promise is that a
native PDF's data never leaves the visitor's machine. The visual language is built
from the artifacts of that promise: warm **paper**, precise **ink**, one confident
**data-green** accent, and technical **mono labels** (file names, sheet names, cell
references) that read like a fine print shop, not a generic SaaS template.

Tenets:

- Calm and exacting. Spacing is generous, decorations are scarce.
- Structure and typography carry the design. No decorative gradients, no glass
  cards, no floating blobs, no purple/indigo gradients.
- Borders and hairlines, not drop shadows, define surfaces.
- Every page must make the privacy angle visible above the fold. It is never a
  footnote.
- Motion only explains a state change (progress, reveal, feedback). Never
  decorative. Honor `prefers-reduced-motion`.

## 2. Color

Semantic tokens. Values are locked; do not invent new hues.

Light theme:

| Token              | Hex       | Use                                                                  |
| ------------------ | --------- | -------------------------------------------------------------------- |
| `--color-paper`    | `#FAF7F1` | Page background. Warm off-white.                                     |
| `--color-surface`  | `#FFFFFF` | Cards, wells, navbar, converter widget.                              |
| `--color-ink`      | `#1C1917` | Primary text. Warm near-black.                                       |
| `--color-ink-soft` | `#4F4943` | Secondary headings and emphasized body copy.                         |
| `--color-muted`    | `#6E685F` | Secondary body text.                                                 |
| `--color-faint`    | `#8C867C` | Captions, timestamps, placeholder text.                              |
| `--color-border`   | `#E6E0D4` | Default hairline borders.                                            |
| `--color-border-strong` | `#CFC8BA` | Stronger hairlines (table separators, focus-adjacent).          |
| `--color-primary`  | `#0E6B52` | Data-green. This is the only saturated accent. CTAs, links, key data.|
| `--color-primary-strong` | `#0A513E` | Primary hover / pressed.                                       |
| `--color-primary-soft` | `#E7F2ED` | Primary tinted backgrounds (badges, callouts, active states).   |
| `--color-primary-soft-strong` | `#D3E6DF` | Hover for primary-soft surfaces.                     |
| `--color-accent`   | `#A5661B`  | OCR / scanned path. Amber. Use sparingly (badges, path tags).        |
| `--color-accent-soft` | `#F6EBD9` | Amber tinted background for the scanned-path badge.              |
| `--color-danger`   | `#A62A1E`  | Errors (converter error state, validation).                          |
| `--color-danger-soft` | `#F9E7E4` | Error callout background.                                         |
| `--color-success`  | `#147A53`  | Success confirmations. Close to primary by design.                   |
| `--color-ring`     | `#0E6B52`  | Focus ring color (matches primary).                                  |

Dark theme — deep warm neutrals mirror paper/surface/ink; soft backgrounds reuse
the identical hue shifts as their light halves. Applied by a `.dark` class on
`<html>` that the boot script sets before first paint (so there is no flash):

| Token              | Hex       | Use                                                                  |
| ------------------ | --------- | -------------------------------------------------------------------- |
| `--color-paper`    | `#171512` | Page background. Deep warm brown-black.                              |
| `--color-surface`  | `#1F1C18` | Cards, wells, navbar, converter widget.                              |
| `--color-ink`      | `#F2EEE7` | Primary text. Warm off-white.                                        |
| `--color-ink-soft` | `#D8D2C6` | Secondary headings and emphasized body copy.                         |
| `--color-muted`    | `#A8A093` | Secondary body text.                                                 |
| `--color-faint`    | `#857C6F` | Captions, timestamps, placeholder text.                              |
| `--color-border`   | `#332E27` | Default hairline borders.                                            |
| `--color-border-strong` | `#4A443A` | Stronger hairlines (table separators, focus-adjacent).          |
| `--color-primary`  | `#3FAE8A` | Data-green, brightened for dark contrast. CTAs, links, key data.     |
| `--color-primary-strong` | `#52C19C` | Primary hover / pressed.                                       |
| `--color-primary-soft` | `#123F30` | Primary tinted backgrounds.                                     |
| `--color-primary-soft-strong` | `#1A5640` | Hover for primary-soft surfaces.                        |
| `--color-accent`   | `#E0A04A`  | OCR / scanned path. Amber. Use sparingly (badges, path tags).        |
| `--color-accent-soft` | `#3D2A12` | Amber tinted background for the scanned-path badge.              |
| `--color-danger`   | `#F07C6E`  | Errors.                                                              |
| `--color-danger-soft` | `#471D18` | Error callout background.                                         |
| `--color-success`  | `#4CC08F`  | Success confirmations.                                               |
| `--color-ring`     | `#3FAE8A`  | Focus ring color (matches primary).                                  |

Rules:

- White (`#FFFFFF`) only as surface fills. Never arbitrary grays like `#f9fafb`
  grid slop, never a purple/blue anywhere.
- Text on primary is white (`#FFFFFF`), weight 600.
- `primary-soft` surfaces keep `ink`-family text (>= `ink-soft`, not primary text).
- Borders default to `--color-border`; increase to `border-strong` only where a
  subtle line is insufficient.

## 3. Typography

Self-hosted variable fonts (Fontsource). No external font CDN at runtime.

| Role  | Family              | Weights used             | Notes                                   |
| ----- | ------------------- | ------------------------ | --------------------------------------- |
| Display | Space Grotesk     | 500, 600, 700            | Headings. Slightly technical, geometric. |
| Body  | Inter               | 400, 500, 600            | Paragraphs, UI text, buttons.            |
| Mono  | IBM Plex Mono      | 400, 500                 | Labels, filenames, sheet/cell refs, code.|

Scale (use Tailwind `text-*` utilities; values below are the targets):

| Stage        | Size / line-height          | Weight | Tracking      |
| ------------ | --------------------------- | ------ | ------------- |
| Display / H1 | `clamp(2.25rem, 5vw, 3.5rem)` / `1.05`  | 600 | `-0.02em` |
| H2           | `clamp(1.75rem, 3.5vw, 2.25rem)` / `1.15` | 600 | `-0.015em` |
| H3           | `1.25rem` / `1.3`           | 600 | `-0.01em` |
| Quote/Ledebody | `1.125rem` / `1.6`       | 400 | normal |
| Body         | `1rem` / `1.65`             | 400 | normal |
| Small        | `0.875rem` / `1.5`          | 400 | normal |
| Caption      | `0.8125rem` / `1.45`        | 400 | normal |
| Mono label   | `0.75rem`, uppercase        | 500 | `0.08em` |
| Eyebrow      | Space Grotesk `0.8125rem`, uppercase | 600 | `0.06em` |

Rules:

- Titles and slugs never exceed ~1.7 lines in intent on can lines.
- Mono labels are uppercase with wide tracking when short (eyebrows, tags,
  file/sheet names); for multi-line technical notes use normal case, normal
  tracking.
- Max measure for body copy: `65ch`.
- Emphasis in headings may use `ink-soft` or `primary` spans, sparingly.

## 4. Spacing and layout

- Base unit `4px`. Tailwind default spacing scale. Also expose
  `--spacing-section` for vertical rhythm.
- Section vertical rhythm: `clamp(4rem, 8vw, 6.5rem)` top/bottom.
- Card padding: `1.5rem` default, `2rem` on large cards.
- Between stacked cards/rows: `1rem`; between major content blocks in a section:
  `2.5rem`.
- Unrelated typographic blocks: `1rem`; related inline: `0.5rem`.

Layouts:

- Content column: `max-width 72rem`, `padding-inline clamp(1.25rem, 4vw, 2rem)`.
- Stripped page layout (privacy/pricing): column `max-width 48rem` prose with a
  wider `64rem` band for pricing cards.
- The hero uses a two-column grid at `lg`: copy `7 / 12`, converter `5 / 12`.
  It stacks below `lg` (converter below copy).
- Section headers: eyebrow (mono/uppercase) → H2 → lede paragraph. Optional
  right-aligned "learn more" link only at `≥ md`.

Radii:

- Buttons / inputs / small wells: `6px` (`rounded-md`).
- Cards: `10px` (`rounded-lg`).
- Badges/tags: full pill (`rounded-full`).
- Never large card radius ≥ 20px.

Shadows: default `shadow-card` (`0 1px 2px rgb(28 25 23 / 0.05), 0 1px 1px rgb(28 25 23 / 0.03)`).
Lift layer `shadow-raised` (`0 4px 12px rgb(28 25 23 / 0.08)`) reserved for
overlays/active elements only. Prefer borders over shadows throughout.

## 5. Components

### Button
- Primary: `bg-primary text-white` `rounded-md` `h-11 px-5`, weight 600, `hover:bg-primary-strong`,
  focus `ring-2 ring-offset-2 ring-ring`.
- Secondary: `surface`, `border border-border-strong`, `ink` text, hover raises
  border strength + `bg-paper`.
- Ghost / link-button: mono uppercase label with arrow, primary text on hover.
- Danger variant for destructive actions in the converter (reset).
- All interactive elements ship `hover` / `focus-visible` / `active` / `disabled`.

### Card
- `bg-surface border border-border rounded-lg`. Padding per §4.
- Optional header (title + separated hairline `border-b border-border`).

### Badge / tag
- Pill: `bg-primary-soft text-primary` mono uppercase `0.75rem`. Scanned path
  variant: `bg-accent-soft text-accent`.

### Form fields (converter)
- `h-11 bg-surface border border-border-strong rounded-md px-3`, focus
  `ring-2 ring-ring`. Placeholder text `faint`.
- File drop zone: dashed `border-border-strong`, `rounded-lg`, hover/border-primary
  on drag; `bg-primary-soft` when dragging over. **Never** translucent + blur.

### Table (preview)
- `bg-surface`, header row `bg-paper` with `text-ink-soft` mono uppercase small
  labels, `border-b border-border-strong`, row hover `bg-paper/60`. Cell padding
  `0.625rem 0.75rem`, `text-sm`.

### Accordion (FAQ)
- Native `<details>`, `border-b border-border`, disclosure triangle custom drawn.
  `summary` is an H3-sized Space Grotesk button; body `muted` text.

### Navigation / footer
- Navbar: `bg-surface`, hairline bottom border. Links: mono uppercase small,
  hover primary. Active page: primary text + underline offset. Mobile: full
  overlay drawer (solid surface, no blur).
- Footer: `bg-paper`, top hairline, two tiers (nav columns + bottom bar).

## 6. Voice and copy

- Direct, plain, second person. No hype, no exclamation-heavy marketing.
- Privacy is the lead: "Your files never leave your browser" belongs in the hero,
  verbatim or near-verbatim, as the first thing a visitor reads.
- Concrete numbers everywhere a limit exists. Never "unlimited for a limited
  time" or "limited free use."
- Technical honesty: label client-side parse vs OCR fallback precisely. Use mono
  for file names, sheet names, and cell references in copy.
- State the free-tier allowance explicitly (10 conversions/day across every
  format) and present it as a contrast to competitors that paywall OCR.

## 7. Finish gate (self-check before done)

1. No smallpdf-derived layout, color, or component convention is present.
2. Privacy/differentiator visible above the fold on `/`.
3. Free-tier limits stated as numbers on landing + `/pricing`.
4. Converter widget renders five distinct states: idle, reading (uploading),
   processing, preview, error — each visually clear.
5. Responsive at 360 / 768 / 1024 / 1440: no overflow, readable hierarchy,
   sane stacking.
6. No console errors on any page.
7. Tailwind v4 syntax only (`@import "tailwindcss"`, `@theme`, no `@tailwind`,
   no `bg-opacity-*`, no `bg-gradient-to-*`).
8. Reduced-motion respected; keyboard focus visible everywhere.
9. Contrast: body text `ink` on `paper`/`surface` passes AA; small text never
   below `muted`.