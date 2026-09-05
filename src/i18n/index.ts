import type { Loc, LocaleCode } from './types';
import { loc as es } from './es';
import { loc as ja } from './ja';
import { loc as fr } from './fr';
import { loc as de } from './de';
import { loc as pt } from './pt';
import { loc as ko } from './ko';
import { loc as it } from './it';

export type { Loc, LocaleCode } from './types';

export const locales: Loc[] = [es, ja, fr, de, pt, ko, it];
export const localeCodes: LocaleCode[] = locales.map((l) => l.code);

export function getLoc(code: string): Loc {
  const found = locales.find((l) => l.code === code);
  if (!found) throw new Error(`Unknown locale: ${code}`);
  return found;
}