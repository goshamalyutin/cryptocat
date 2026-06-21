import en, { type Dictionary } from "./en";
import ru from "./ru";
import type { Locale } from "./config";

export const dictionaries: Record<Locale, Dictionary> = { en, ru };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? en;
}

export type { Dictionary } from "./en";
export * from "./config";
