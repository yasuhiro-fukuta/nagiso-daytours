"use client";

import { useEffect, useState } from "react";
import Figure from "./Figure";

const IMG = "/img";

type Stop = { title: string; body: string };
type Tour = {
  plan: string;
  title: React.ReactNode;
  jp: string;
  target: string;
  mobility: string;
  price: string;
  headPhoto: { src: string; label: string };
  stops: Stop[];
  gallery: { src: string; label: string }[];
  mapEmbed?: string;
};

/* Shared start & end of every day */
const BREAKFAST: Stop = {
  title: "Breakfast delivered to your inn",
  body: "Ochazuke — rice in a savoury broth — with miso soup and pickles. Vegan & gluten-free.",
};
const EBIKE: Stop = {
  title: "E-bike hiring",
  body: "Fat-tire e-bikes for the day. On request we can arrange a taxi instead.",
};
const DINNER: Stop = {
  title: "Dinner delivered to your inn",
  body: "Vegan hot pot — soy meat with local vegetables and mushrooms in a rich broth. Vegan & gluten-free.",
};

const TOURS: Tour[] = [
  {
    plan: "Plan A",
    title: (
      <>
        A Day, <em>300 Years Ago</em>
      </>
    ),
    jp: "古民家で過ごす、江戸の一日",
    target: "Seniors & families",
    mobility: "On foot / e-bike",
    price: "¥40,000",
    headPhoto: { src: `${IMG}/explanation_kominka_kashiwaya_1.jpg`, label: "Kominka Kashiwaya" },
    stops: [
      BREAKFAST,
      EBIKE,
      { title: "AM activity: Zazen & morning yoga", body: "Sit, breathe, and stretch on tatami as the valley wakes up." },
      { title: "Lunch: Gohei-mochi by the irori", body: "Rice mochi glazed and grilled over the sunken hearth, the way families here ate on a good day." },
      {
        title: "PM activity: Hands of the village",
        body: "Choose your craft with a local sensei — wagashi sweets, calligraphy, carving a small Buddha, or warazaiku straw work.",
      },
      DINNER,
    ],
    gallery: [
      { src: `${IMG}/activities_zazen.jpg`, label: "Zazen" },
      { src: `${IMG}/activities_yoga.jpg`, label: "Yoga" },
      { src: `${IMG}/lunch_irori_goheimochi_1.jpg`, label: "Gohei-mochi at the irori" },
      { src: `${IMG}/lunch_lunchbox_1.jpg`, label: "Lunch box" },
      { src: `${IMG}/activities_wagashi.jpg`, label: "Wagashi" },
      { src: `${IMG}/activities_calligraphy.jpg`, label: "Calligraphy" },
      { src: `${IMG}/activities_warazaiku.jpg`, label: "Warazaiku straw work" },
      { src: `${IMG}/explanation_kominka_koubou_1.jpg`, label: "Carving workshop" },
    ],
  },
  {
    plan: "Plan B",
    title: (
      <>
        Three-Color <em>Ride</em>
      </>
    ),
    jp: "渓谷のシャワーサイクリング",
    target: "Active couples, 30s",
    mobility: "E-bike + tour transfer",
    price: "¥60,000",
    headPhoto: { src: `${IMG}/explanation_all_gorge_1.jpg`, label: "The gorges of Nagiso" },
    stops: [
      BREAKFAST,
      EBIKE,
      { title: "AM activity: Downhill from Tadachi", body: "A long, easy coast down from the white water of Tadachi Falls." },
      { title: "Lunch: Gohei-mochi by the irori", body: "Hearth-grilled mochi at a kominka beside the water." },
      {
        title: "PM activity: Kakizore green to Atera blue",
        body: "Over one peak, from the green of Kakizore Gorge to the blue of Atera — dip into the river along the way as you wish.",
      },
      DINNER,
    ],
    gallery: [
      { src: `${IMG}/place_tadachi_gorge_1.jpg`, label: "Tadachi Gorge" },
      { src: `${IMG}/place_takahashi_fishing_1.jpg`, label: "By the river" },
      { src: `${IMG}/place_kominka_kikori_1.jpg`, label: "Woodcutter's kominka" },
      { src: `${IMG}/lunch_irori_goheimochi_1.jpg`, label: "Gohei-mochi lunch" },
      { src: `${IMG}/road_koiji_trail_1.jpg`, label: "Koiji trail" },
      { src: `${IMG}/place_kakizore_gorge_1.jpg`, label: "Kakizore Gorge" },
      { src: `${IMG}/place_atera_gorge_1.jpg`, label: "Atera Gorge" },
      { src: `${IMG}/place_atera_onsen_1.jpg`, label: "Atera onsen" },
      { src: `${IMG}/place_nojiri_end_1.jpg`, label: "Finish at Nojiri" },
    ],
  },
  {
    plan: "Plan C",
    title: (
      <>
        The World's Most <em>Comfortable 50 km</em>
      </>
    ),
    jp: "木曽川をひたすら下る、世界一ラクな50km",
    target: "Beginner cyclists",
    mobility: "E-bike + tour transfer",
    price: "¥80,000",
    headPhoto: { src: `${IMG}/explanation_kiso_river_1.jpg`, label: "The Kiso River" },
    stops: [
      BREAKFAST,
      EBIKE,
      {
        title: "Shuttle up to Yabuhara",
        body: "We lift you and the bikes to the top of the valley, where the Kiso River begins — from here you only ever roll down.",
      },
      {
        title: "AM activity: Down the upper Kiso",
        body: "Through three post towns — Yabuhara, Miyanokoshi and Kiso-Fukushima — into Agematsu.",
      },
      { title: "Lunch: in Agematsu", body: "A break in the old post town of Agematsu." },
      {
        title: "PM activity: Down the lower Kiso",
        body: "Through four post towns — Agematsu, Suhara, Nojiri and Midono — to the finish.",
      },
      DINNER,
    ],
    gallery: [
      { src: `${IMG}/explanation_all_post_town_1.jpg`, label: "Post towns" },
      { src: `${IMG}/explanation_all_station_1.jpg`, label: "Stations en route" },
      { src: `${IMG}/transportation_ebike_on_jr_1.jpg`, label: "E-bike on the JR" },
      { src: `${IMG}/place_yabuhara_1.jpg`, label: "Yabuhara" },
      { src: `${IMG}/place_kiso_river_beggining_1.jpg`, label: "River source" },
      { src: `${IMG}/place_yabuhara_cafe_1.jpg`, label: "Yabuhara café" },
      { src: `${IMG}/road_upper_kiso.jpg`, label: "Upper Kiso road" },
      { src: `${IMG}/lunch_kisofukushima_1.jpg`, label: "Agematsu lunch" },
      { src: `${IMG}/road_downer_kiso.jpg`, label: "Lower Kiso road" },
      { src: `${IMG}/place_atera_gorge_1.jpg`, label: "Atera Gorge" },
      { src: `${IMG}/place_atera_onsen_1.jpg`, label: "Atera onsen" },
      { src: `${IMG}/place_midono_end_1.jpg`, label: "Finish in Midono" },
    ],
    mapEmbed: "https://www.google.com/maps/d/embed?mid=1LgL4RlnePF5JdvpqzADrpsrrW7oTVDE",
  },
];

const SENSEIS = [
  { craft: "Wagashi", src: `${IMG}/local_sensei_wagashi.jpg`, name: "The sweets maker", body: "Seasonal wagashi, shaped by hand from bean and rice." },
  { craft: "Yoga", src: `${IMG}/local_sensei_yoga.jpg`, name: "The yoga teacher", body: "A slow morning flow on tatami, open to every body." },
  { craft: "Zazen", src: `${IMG}/local_sensei_zazen.jpg`, name: "The zazen guide", body: "Sitting meditation, taught the plain old way." },
  { craft: "Shodō", src: `${IMG}/local_sensei_calligraphy.jpg`, name: "The calligrapher", body: "Ink, brush, and breath — one honest line at a time." },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <a href="#top" className="brand">
        Nagiso <em>Local Dive</em>
      </a>
      <div className="nav-links">
        <a href="#idea">The idea</a>
        <a href="#day">A day</a>
        <a href="#tours">Tours</a>
        <a href="#people">People</a>
      </div>
      <a href="#book" className="nav-book">
        Book a day
      </a>
    </nav>
  );
}

export default function Page() {
  return (
    <>
      <Nav />

      {/* ============================ HERO ============================ */}
      <header className="hero" id="top">
        <Figure src={`${IMG}/top_local_dive_experience.jpg`} label="Nagiso — local dive experience" />
        <div className="hero-inner">
          <span className="eyebrow">Nagiso · Kiso Valley · Zero-night day tours</span>
          <h1>
            Dive into the <em>local.</em>
          </h1>
          <p className="hero-lede">
            Just book two nights in Nagiso yourself. We take care of the rest — breakfast and dinner
            delivered to your inn, your transport, and a day of activities guided by local senseis, set in a
            kominka and the nature around it.
          </p>
          <div className="hero-ctas">
            <a href="#tours" className="btn-primary">
              See the three tours
            </a>
            <a href="#idea" className="btn-secondary">
              How it works
            </a>
          </div>
        </div>
      </header>

      {/* ========================== MARQUEE ========================== */}
      <div className="marquee">
        <div className="marquee-inner">
          <span>
            Book two nights &nbsp;·&nbsp; we arrange the day &nbsp;·&nbsp; catered meals to your inn
            &nbsp;·&nbsp; a day with a local sensei &nbsp;·&nbsp; e-bikes &amp; gorges &nbsp;·&nbsp; dive into
            the local &nbsp;·&nbsp;
          </span>
          <span aria-hidden="true">
            Book two nights &nbsp;·&nbsp; we arrange the day &nbsp;·&nbsp; catered meals to your inn
            &nbsp;·&nbsp; a day with a local sensei &nbsp;·&nbsp; e-bikes &amp; gorges &nbsp;·&nbsp; dive into
            the local &nbsp;·&nbsp;
          </span>
        </div>
      </div>

      {/* ===================== WHY / HOW / WHAT ===================== */}
      <div className="circle" id="idea">
        <div className="circle-wrap">
          <div className="circle-head">
            <span className="eyebrow-dark">The local dive experience</span>
          </div>
          <div className="circle-grid">
            <article className="circle-card">
              <div className="circle-photo">
                <Figure src={`${IMG}/why_local_dive_experience.jpg`} label="Why" />
              </div>
              <div className="circle-body">
                <span className="circle-key">Why</span>
                <h3>The best of the valley isn't in the guidebook.</h3>
                <p>
                  The experiences only locals know never make it onto the internet. Once travellers here
                  ourselves, and now residents, we want to share them with the people who visit — through the
                  eyes of someone who came, and stayed.
                </p>
              </div>
            </article>
            <article className="circle-card">
              <div className="circle-photo">
                <Figure src={`${IMG}/how_local_dive_experience.jpg`} label="How" />
              </div>
              <div className="circle-body">
                <span className="circle-key">How</span>
                <h3>Not more lodging — one integrated day.</h3>
                <p>
                  To really share them, we decided the answer wasn't building ever more places to sleep. It
                  was to integrate the daytime itself — the activities, the food, and the way you move — and
                  offer it as a single, seamless day.
                </p>
              </div>
            </article>
            <article className="circle-card">
              <div className="circle-photo">
                <Figure src={`${IMG}/what_local_dive_experience.jpg`} label="What" />
              </div>
              <div className="circle-body">
                <span className="circle-key">What</span>
                <h3>Three ways to spend one day.</h3>
                <p>
                  So we provide the whole daytime in Nagiso — breakfast delivered to your inn, transport, and
                  a full day of local activities, then dinner delivered to your inn that evening. All you do
                  is book two nights in Nagiso.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>

      {/* ===================== THE DAY (delivered) ===================== */}
      <section id="day" className="day">
        <div className="section-head compact">
          <span className="eyebrow-dark">A day, delivered</span>
          <h2>
            Wake, ride, <em>come home to dinner.</em>
          </h2>
          <p>
            Every tour begins and ends in Nagiso — breakfast to your inn, a day with us, dinner to your inn.
            Both nights of lodging stay right here.
          </p>
        </div>
        <div className="flow-grid">
          <div className="flow-step">
            <div className="flow-photo">
              <Figure src={`${IMG}/delivery_breakfast.jpg`} label="Breakfast delivered" ratio="16 / 10" />
            </div>
            <span className="flow-time">Morning · to your inn</span>
            <h3>Breakfast at the door</h3>
            <p>Ochazuke, miso soup and pickles, delivered to your inn.</p>
          </div>
          <div className="flow-step">
            <div className="flow-photo">
              <Figure src={`${IMG}/transportation_ebike_1.jpg`} label="E-bike day tour" ratio="16 / 10" />
            </div>
            <span className="flow-time">Daytime · with a guide</span>
            <h3>The day is ours</h3>
            <p>Meet at the station at 9:30 — on foot and by fat-tire e-bike.</p>
          </div>
          <div className="flow-step">
            <div className="flow-photo">
              <Figure src={`${IMG}/delivery_dinner.jpg`} label="Dinner delivered" ratio="16 / 10" />
            </div>
            <span className="flow-time">Evening · to your inn</span>
            <h3>Dinner comes to you</h3>
            <p>A vegan hot pot arrives at your inn. Soak, eat, sleep.</p>
          </div>
        </div>
        <p className="flow-note">
          On rainy days or on request, the e-bike legs switch to a comfortable car transfer — the day still
          happens, dry.
        </p>
      </section>

      {/* =========================== TOURS =========================== */}
      <div className="tours" id="tours">
        <div className="tours-wrap">
          <div className="section-head">
            <span className="eyebrow-dark">The line-up</span>
            <h2>
              Three ways to spend <em>the day</em>.
            </h2>
            <p>
              Same catered breakfast and dinner for all three. Departures from Nagiso Station at 9:30,
              finishing late afternoon. Up to 6 guests.
            </p>
          </div>

          {TOURS.map((t) => (
            <article className="tour" key={t.plan}>
              <div className="tour-head">
                <div className="tour-head-text">
                  <span className="tour-plan">{t.plan}</span>
                  <h3>{t.title}</h3>
                  <div className="tour-jp">{t.jp}</div>
                  <dl className="tour-meta">
                    <div>
                      <dt>Best for</dt>
                      <dd>{t.target}</dd>
                    </div>
                    <div>
                      <dt>Mobility</dt>
                      <dd>{t.mobility}</dd>
                    </div>
                    <div className="price-cell">
                      <dt>Price · group of 4</dt>
                      <dd className="price">{t.price}</dd>
                      <span className="price-note">±15% per ±1 person</span>
                    </div>
                  </dl>
                </div>
                <div className="tour-head-photo">
                  <Figure src={t.headPhoto.src} label={t.headPhoto.label} />
                </div>
              </div>
              <div className="tour-body">
                <span className="eyebrow-dark">The day, stop by stop</span>
                <ol className="timeline">
                  {t.stops.map((s, i) => (
                    <li className="stop" key={i}>
                      <h4>{s.title}</h4>
                      <p>{s.body}</p>
                    </li>
                  ))}
                </ol>
                {t.mapEmbed ? (
                  <div className="map-slot has-map">
                    <iframe src={t.mapEmbed} title={`${t.plan} route map`} loading="lazy" allowFullScreen />
                  </div>
                ) : (
                  <div className="map-slot">
                    <span>Route map — Google My Maps embed goes here</span>
                  </div>
                )}
                <div className="gallery">
                  {t.gallery.map((g) => (
                    <Figure key={g.src} src={g.src} label={g.label} />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ===================== SCHEDULE / BOOKING ===================== */}
      <div className="schedule" id="book">
        <div className="schedule-wrap">
          <div className="section-head">
            <span className="eyebrow-dark">Dates &amp; booking</span>
            <h2>
              Pick a date, <em>pay in a tap.</em>
            </h2>
            <p>
              Trial season opens September 2026, with a handful of seats each departure. Reserve and prepay
              online; you book your own inn separately (we'll point you to the good ones).
            </p>
          </div>

          <div className="schedule-photo">
            <Figure src={`${IMG}/middle_timeschedule.jpg`} label="Season schedule" ratio="16 / 7" />
          </div>

          <div className="square-slot">
            <span className="square-badge">Square booking</span>
            <p>The live class-schedule &amp; prepayment (Square) embed will live here — pick a date and check out.</p>
          </div>

          <ol className="book-steps">
            <li>
              <span className="n">1</span>
              <h4>Book your inn</h4>
              <p>Reserve a night before and after in Nagiso. We share a shortlist of local inns.</p>
            </li>
            <li>
              <span className="n">2</span>
              <h4>Reserve the day</h4>
              <p>Choose a tour and a date, and prepay securely through Square.</p>
            </li>
            <li>
              <span className="n">3</span>
              <h4>Just arrive</h4>
              <p>Meals come to your inn; meet us at the station at 9:30. We handle the rest.</p>
            </li>
          </ol>
        </div>
      </div>

      {/* =========================== SENSEIS =========================== */}
      <section id="people">
        <div className="section-head">
          <span className="eyebrow-dark">Your local senseis</span>
          <h2>
            Taught by the people who <em>actually live it.</em>
          </h2>
          <p>Not performers for tourists — neighbours who have kept these crafts alive for a lifetime.</p>
        </div>
        <div className="sensei-grid">
          {SENSEIS.map((s) => (
            <div className="sensei" key={s.craft}>
              <div className="sensei-photo">
                <Figure src={s.src} label={s.craft} ratio="1 / 1" />
              </div>
              <span className="sensei-craft">{s.craft}</span>
              <h4>{s.name}</h4>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================== ORGANIZER =========================== */}
      <div className="organizer">
        <div className="organizer-inner">
          <div className="organizer-photo">
            <Figure src={`${IMG}/yakkun.jpg`} label="Yakkun — founder" ratio="4 / 5" />
          </div>
          <div>
            <span className="eyebrow-light">The organizer</span>
            <h3>
              Yakkun, who <em>never left.</em>
            </h3>
            <div className="organizer-role">Yasuhiro Fukuda · From Scratch LLC</div>
            <p>
              He came here once, as a traveller. Then Nagiso got under his skin — enough that he quit the
              salaryman life and moved to the valley, alone.
            </p>
            <p>
              Today he runs Kashiwaya Guesthouse and a small web of tourism around it: bike rental, guided
              tours, luggage shuttles. His one rule is simple — share the real rural Japan he found, first as
              a visitor and then as a local, exactly as it is, with nothing polished away.
            </p>
          </div>
        </div>
      </div>

      {/* ============================ FAQ ============================ */}
      <div className="faq">
        <div className="section-head">
          <span className="eyebrow-dark">Good to know</span>
          <h2>Before you book</h2>
        </div>
        <details className="faq-item">
          <summary>What's included in the price?</summary>
          <p>
            A catered breakfast and dinner delivered to your inn, the full guided day tour, fat-tire e-bike
            and gear, any tour-incidental transfers, and recreation insurance. Your lodging is booked and
            paid separately, directly with the inn.
          </p>
        </details>
        <details className="faq-item">
          <summary>Do I book my room through you?</summary>
          <p>
            No — you reserve your own inn in Nagiso, so we need no travel-agency licence. We only provide
            information and a shortlist, then deliver your meals within the town.
          </p>
        </details>
        <details className="faq-item">
          <summary>Are the meals really vegan?</summary>
          <p>
            Yes — both the ochazuke breakfast and the hot-pot dinner are fully vegan and gluten-free, made
            with local vegetables, mushrooms and soy.
          </p>
        </details>
        <details className="faq-item">
          <summary>Do I need to be fit?</summary>
          <p>
            Plan A is gentle (walking and easy e-bike) and Plan C is almost all downhill — great for
            beginners. Plan B has real distance and climbs, so it's best for confident riders.
          </p>
        </details>
        <details className="faq-item">
          <summary>How do I pay?</summary>
          <p>Securely online, in advance, via Square. Cancellation terms are shown before checkout.</p>
        </details>
      </div>

      {/* =========================== FOOTER =========================== */}
      <footer className="lp-footer">
        <div className="lp-footer-inner">
          <div>
            <div className="ft-brand">Nagiso Local Dive</div>
            <p>Zero-night day tours in the Kiso Valley — catered meals to your inn, and a day with a local.</p>
            <p>Departures from Nagiso Station, Nagano.</p>
          </div>
          <div>
            <h5>Explore</h5>
            <a href="#idea">The idea</a>
            <a href="#day">A day, delivered</a>
            <a href="#tours">The three tours</a>
            <a href="#book">Dates &amp; booking</a>
          </div>
          <div>
            <h5>Operator</h5>
            <p>From Scratch LLC</p>
            <p>4181 Yomikaki, Nagiso-machi, Kiso-gun, Nagano</p>
            <p>Yasuhiro Fukuda, Representative</p>
          </div>
        </div>
        <div className="ft-bottom">
          © {new Date().getFullYear()} Nagiso Local Dive · From Scratch LLC · Trial launch September 2026
        </div>
      </footer>

      <a href="#book" className="float-book">
        Book a day
      </a>
    </>
  );
}
