"use client";

import { useEffect, useState } from "react";

export type Lang = "en" | "ja";
export type L = { en: string; ja: string };
export type LN = { en: React.ReactNode; ja: React.ReactNode };

/* Language state shared across pages via localStorage (`nld-lang`). */
export function useLang() {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("nld-lang");
    if (saved === "ja" || saved === "en") setLangState(saved);
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem("nld-lang", l);
  };

  const t = (x: L) => x[lang];
  const tn = (x: LN) => x[lang];
  return { lang, setLang, t, tn };
}
