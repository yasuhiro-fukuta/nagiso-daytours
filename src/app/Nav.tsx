"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { L, Lang } from "./i18n";
import { WHATSAPP } from "./content";

export default function Nav({
  lang,
  setLang,
  solid = false,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  /* Pages without a dark hero force the scrolled (paper) style from the start */
  solid?: boolean;
}) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const t = (x: L) => x[lang];
  return (
    <nav className={`nav ${solid || scrolled ? "scrolled" : ""}`}>
      <Link href="/" className="brand">
        Nagiso <em>Local Dive</em>
      </Link>
      <div className="nav-links">
        <Link href="/#idea">{t({ en: "The idea", ja: "コンセプト" })}</Link>
        <Link href="/#day">{t({ en: "A day", ja: "一日の流れ" })}</Link>
        <Link href="/plan-a">{t({ en: "Plan A", ja: "プランA" })}</Link>
        <Link href="/plan-c">{t({ en: "Plan C", ja: "プランC" })}</Link>
      </div>
      <div className="nav-right">
        <div className="lang-toggle" role="group" aria-label="Language / 言語">
          <button
            type="button"
            className={lang === "en" ? "on" : ""}
            onClick={() => setLang("en")}
            aria-pressed={lang === "en"}
          >
            EN
          </button>
          <span className="lang-sep" aria-hidden="true">
            /
          </span>
          <button
            type="button"
            className={lang === "ja" ? "on" : ""}
            onClick={() => setLang("ja")}
            aria-pressed={lang === "ja"}
          >
            日本語
          </button>
        </div>
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="nav-book">
          {t({ en: "Book a day", ja: "予約する" })}
        </a>
      </div>
    </nav>
  );
}
