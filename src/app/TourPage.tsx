"use client";

import Link from "next/link";
import Figure from "./Figure";
import Nav from "./Nav";
import Footer from "./Footer";
import { useLang } from "./i18n";
import { WHATSAPP, type Tour } from "./content";

export default function TourPage({ tour }: { tour: Tour }) {
  const { lang, setLang, t, tn } = useLang();

  return (
    <>
      <Nav lang={lang} setLang={setLang} solid />

      <main className="plan-main">
        {/* ======================= THE TOUR ======================= */}
        <div className="tours plan-tours">
          <div className="tours-wrap">
            <Link href="/#tours" className="back-link">
              ← {t({ en: "All tours", ja: "ツアー一覧へ" })}
            </Link>
            <article className="tour">
              <div className="tour-head">
                <div className="tour-head-text">
                  <span className="tour-plan">{tour.plan}</span>
                  <h3>{tn(tour.title)}</h3>
                  <div className="tour-jp">{t(tour.sub)}</div>
                  <dl className="tour-meta">
                    <div>
                      <dt>{t({ en: "Best for", ja: "おすすめ" })}</dt>
                      <dd>{t(tour.target)}</dd>
                    </div>
                    <div>
                      <dt>{t({ en: "Mobility", ja: "移動手段" })}</dt>
                      <dd>{t(tour.mobility)}</dd>
                    </div>
                    <div className="price-cell">
                      <dt>{t({ en: "Price · group of 4", ja: "料金 · 4名グループ" })}</dt>
                      <dd className="price">{tour.price}</dd>
                      <span className="price-note">
                        {t({ en: "±15% per ±1 person", ja: "1名増減ごとに±15%" })}
                      </span>
                    </div>
                  </dl>
                </div>
                <div className="tour-head-photo">
                  <Figure src={tour.headPhoto.src} label={t(tour.headPhoto.label)} />
                </div>
              </div>
              <div className="tour-body">
                <span className="eyebrow-dark">
                  {t({ en: "The day, stop by stop", ja: "一日の流れ、順を追って" })}
                </span>
                <ol className="timeline">
                  {tour.stops.map((s, i) => (
                    <li className="stop" key={i}>
                      <h4>{t(s.title)}</h4>
                      <p>{t(s.body)}</p>
                    </li>
                  ))}
                </ol>
                {tour.mapEmbed ? (
                  <div className="map-slot has-map">
                    <iframe
                      src={tour.mapEmbed}
                      title={`${tour.plan} route map`}
                      loading="lazy"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="map-slot">
                    <span>
                      {t({
                        en: "Route map — Google My Maps embed goes here",
                        ja: "ルートマップ — Google My Maps をここに埋め込み予定",
                      })}
                    </span>
                  </div>
                )}
                <div className="gallery">
                  {tour.gallery.map((g) => (
                    <Figure key={g.src} src={g.src} label={t(g.label)} />
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* ======================= SENSEIS (if any) ======================= */}
        {tour.senseis && (
          <section>
            <div className="section-head">
              <span className="eyebrow-dark">{t({ en: "Your local senseis", ja: "地元の先生たち" })}</span>
              <h2>
                {tn({
                  en: (
                    <>
                      Taught by the people who <em>actually live it.</em>
                    </>
                  ),
                  ja: (
                    <>
                      教えるのは、<em>それを生きてきた人。</em>
                    </>
                  ),
                })}
              </h2>
              <p>
                {t({
                  en: "Not performers for tourists — neighbours who have kept these crafts alive for a lifetime.",
                  ja: "観光客向けのパフォーマーではありません — この手仕事を一生かけて守ってきた、ご近所さんたちです。",
                })}
              </p>
            </div>
            <div className="sensei-grid">
              {tour.senseis.map((s) => (
                <div className="sensei" key={s.craft.en}>
                  <div className="sensei-photo">
                    <Figure src={s.src} label={t(s.craft)} ratio="1 / 1" />
                  </div>
                  <span className="sensei-craft">{t(s.craft)}</span>
                  <h4>{t(s.name)}</h4>
                  <p>{t(s.body)}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ======================= BOOK VIA WHATSAPP ======================= */}
        <div className="book-cta" id="book">
          <span className="eyebrow-dark">{t({ en: "Booking", ja: "ご予約" })}</span>
          <h2>
            {tn({
              en: (
                <>
                  Ready to <em>be a local?</em>
                </>
              ),
              ja: (
                <>
                  <em>ローカルになる</em>準備は、いい?
                </>
              ),
            })}
          </h2>
          <p>
            {t({
              en: "Message us on WhatsApp with your tour, date and group size — we'll confirm your seats and take it from there. And remember to book your own two nights in Nagiso (we'll point you to the good inns).",
              ja: "ツアーと日付、人数を添えて、WhatsAppでメッセージをお送りください — お席を確認して、そこからすべてご案内します。南木曽での2泊のご予約もお忘れなく(良い宿をご紹介します)。",
            })}
          </p>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            {t({ en: "Book via WhatsApp", ja: "WhatsAppで予約する" })}
          </a>
        </div>
      </main>

      <Footer t={t} />

      <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="float-book">
        {t({ en: "Book a day", ja: "予約する" })}
      </a>
    </>
  );
}
