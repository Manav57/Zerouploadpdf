export type Theme = 'light' | 'dark';

const KEY = 'zup:theme';

export const LIGHT_BG = '#faf7f1';
export const DARK_BG = '#171512';

export function storedTheme(): Theme | null {
  try {
    const v = localStorage.getItem(KEY);
    if (v === 'dark' || v === 'light') return v;
  } catch {
    /* storage unavailable — fall back to system */
  }
  return null;
}

export function systemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function resolveTheme(): Theme {
  return storedTheme() ?? systemTheme();
}

export function applyTheme(theme: Theme): void {
  const root = document.documentElement;
  const dark = theme === 'dark';
  root.classList.toggle('dark', dark);
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', dark ? DARK_BG : LIGHT_BG);
}

export function setStoredTheme(theme: Theme): void {
  try {
    if (storedTheme() === theme) return;
    localStorage.setItem(KEY, theme);
  } catch {
    /* non-persistent contexts */
  }
}

export function toggleTheme(): Theme {
  const next = resolveTheme() === 'dark' ? 'light' : 'dark';
  setStoredTheme(next);
  applyTheme(next);
  return next;
}

export function initTheme(): Theme {
  const theme = resolveTheme();
  applyTheme(theme);
  return theme;
}

export function onSystemThemeChange(cb: (theme: Theme) => void): () => void {
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  const handler = (ev: MediaQueryListEvent) => {
    if (!storedTheme()) cb(ev.matches ? 'dark' : 'light');
  };
  mq.addEventListener('change', handler);
  return () => mq.removeEventListener('change', handler);
}

export function themeIconName(theme: Theme): 'sun' | 'moon' {
  return theme === 'dark' ? 'sun' : 'moon';
}