"use client";

import Link from "next/link";
import type { L } from "./i18n";

export default function Footer({ t }: { t: (x: L) => string }) {
  return (
    <footer className="lp-footer">
      <div className="lp-footer-inner">
        <div>
          <div className="ft-brand">Nagiso Local Dive</div>
          <p>
            {t({
              en: "Zero-night day tours in the Kiso Valley — catered meals to your inn, and a day with a local.",
              ja: "木曽谷のゼロ泊デイツアー — お食事は宿へお届け、一日は地元の人とともに。",
            })}
          </p>
          <p>{t({ en: "Departures from Nagiso Station, Nagano.", ja: "長野県・南木曽駅 発着。" })}</p>
        </div>
        <div>
          <h5>{t({ en: "Explore", ja: "めぐる" })}</h5>
          <Link href="/#idea">{t({ en: "The idea", ja: "コンセプト" })}</Link>
          <Link href="/#day">{t({ en: "A day, delivered", ja: "一日の流れ" })}</Link>
          <Link href="/plan-a">{t({ en: "Plan A — A Day, 300 Years Ago", ja: "プランA — 古民家で過ごす、江戸の一日" })}</Link>
          <Link href="/plan-c">{t({ en: "Plan C — Comfortable 50 km", ja: "プランC — 世界一ラクな50km" })}</Link>
        </div>
        <div>
          <h5>{t({ en: "Operator", ja: "運営" })}</h5>
          <p>{t({ en: "From Scratch LLC", ja: "合同会社 From Scratch" })}</p>
          <p>
            {t({
              en: "4181 Yomikaki, Nagiso-machi, Kiso-gun, Nagano",
              ja: "長野県木曽郡南木曽町読書4181",
            })}
          </p>
          <p>{t({ en: "Yasuhiro Fukuda, Representative", ja: "代表 Yasuhiro Fukuda" })}</p>
        </div>
      </div>
      <div className="ft-bottom">
        {t({
          en: `© ${new Date().getFullYear()} Nagiso Local Dive · From Scratch LLC · Trial launch September 2026`,
          ja: `© ${new Date().getFullYear()} Nagiso Local Dive · 合同会社 From Scratch · 2026年9月トライアル開始`,
        })}
      </div>
    </footer>
  );
}
