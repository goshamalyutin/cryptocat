"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { getDictionary, type Dictionary } from "./index";
import { defaultLocale, locales, type Locale } from "./config";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  toggleLocale: () => void;
  t: Dictionary;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

const STORAGE_KEY = "cryptocat.locale";

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  // Restore persisted locale after hydration.
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (saved && locales.includes(saved)) setLocaleState(saved);
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
    document.documentElement.lang = l;
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === "en" ? "ru" : "en");
  }, [locale, setLocale]);

  const value = useMemo<LocaleContextValue>(
    () => ({ locale, setLocale, toggleLocale, t: getDictionary(locale) }),
    [locale, setLocale, toggleLocale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within a LocaleProvider");
  return ctx;
}
