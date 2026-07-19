"use client";

import { useEffect, useState } from "react";
import Figure from "./Figure";

const IMG = "/img";

/* ==================== i18n ==================== */
type Lang = "en" | "ja";
type L = { en: string; ja: string };
type LN = { en: React.ReactNode; ja: React.ReactNode };

type Stop = { title: L; body: L };
type Tour = {
  plan: string;
  title: LN;
  /* Accent line under the title — shows the *other* language:
     `en` = Japanese subtitle shown in EN mode, `ja` = English subtitle shown in JA mode */
  sub: L;
  target: L;
  mobility: L;
  price: string;
  headPhoto: { src: string; label: L };
  stops: Stop[];
  gallery: { src: string; label: L }[];
  mapEmbed?: string;
};

/* Shared start & end of every day */
const BREAKFAST: Stop = {
  title: { en: "Breakfast delivered to your inn", ja: "朝食を宿へお届け" },
  body: {
    en: "Ochazuke — rice in a savoury broth — with miso soup and pickles. Vegan & gluten-free.",
    ja: "お茶漬け — 出汁をかけたご飯 — にお味噌汁とお漬物。ヴィーガン&グルテンフリー。",
  },
};
const EBIKE: Stop = {
  title: { en: "E-bike hiring", ja: "Eバイクの貸し出し" },
  body: {
    en: "Fat-tire e-bikes for the day. On request we can arrange a taxi instead.",
    ja: "ファットタイヤEバイクを終日ご利用いただけます。ご希望に応じてタクシーの手配も。",
  },
};
const DINNER: Stop = {
  title: { en: "Dinner delivered to your inn", ja: "夕食を宿へお届け" },
  body: {
    en: "Vegan hot pot — soy meat with local vegetables and mushrooms in a rich broth. Vegan & gluten-free.",
    ja: "ヴィーガン鍋 — 大豆ミートと地元の野菜、きのこを濃厚な出汁で。ヴィーガン&グルテンフリー。",
  },
};

const TOURS: Tour[] = [
  {
    plan: "Plan A",
    title: {
      en: (
        <>
          A Day, <em>300 Years Ago</em>
        </>
      ),
      ja: (
        <>
          古民家で過ごす、<em>江戸の一日</em>
        </>
      ),
    },
    sub: { en: "古民家で過ごす、江戸の一日", ja: "A Day, 300 Years Ago" },
    target: { en: "Seniors & families", ja: "シニア・ご家族" },
    mobility: { en: "On foot / e-bike", ja: "徒歩 / Eバイク" },
    price: "¥40,000",
    headPhoto: {
      src: `${IMG}/explanation_kominka_kashiwaya_1.jpg`,
      label: { en: "Kominka Kashiwaya", ja: "古民家 柏屋" },
    },
    stops: [
      BREAKFAST,
      EBIKE,
      {
        title: { en: "AM activity: Zazen & morning yoga", ja: "午前:坐禅と朝ヨガ" },
        body: {
          en: "Sit, breathe, and stretch on tatami as the valley wakes up.",
          ja: "谷が目覚める頃、畳の上で座り、呼吸を整え、体を伸ばす。",
        },
      },
      {
        title: { en: "Lunch: Gohei-mochi by the irori", ja: "昼食:囲炉裏で五平餅" },
        body: {
          en: "Rice mochi glazed and grilled over the sunken hearth, the way families here ate on a good day.",
          ja: "囲炉裏でタレを塗って焼き上げる五平餅。この土地の家々が、ハレの日に食べてきた味。",
        },
      },
      {
        title: { en: "PM activity: Hands of the village", ja: "午後:村の手仕事" },
        body: {
          en: "Choose your craft with a local sensei — wagashi sweets, calligraphy, carving a small Buddha, or warazaiku straw work.",
          ja: "地元の先生と、好きな手仕事をひとつ — 和菓子づくり、書道、小さな仏像彫り、わら細工。",
        },
      },
      DINNER,
    ],
    gallery: [
      { src: `${IMG}/activities_zazen.jpg`, label: { en: "Zazen", ja: "坐禅" } },
      { src: `${IMG}/activities_yoga.jpg`, label: { en: "Yoga", ja: "ヨガ" } },
      { src: `${IMG}/lunch_irori_goheimochi_1.jpg`, label: { en: "Gohei-mochi at the irori", ja: "囲炉裏の五平餅" } },
      { src: `${IMG}/lunch_lunchbox_1.jpg`, label: { en: "Lunch box", ja: "お弁当" } },
      { src: `${IMG}/activities_wagashi.jpg`, label: { en: "Wagashi", ja: "和菓子" } },
      { src: `${IMG}/activities_calligraphy.jpg`, label: { en: "Calligraphy", ja: "書道" } },
      { src: `${IMG}/activities_warazaiku.jpg`, label: { en: "Warazaiku straw work", ja: "わら細工" } },
      { src: `${IMG}/explanation_kominka_koubou_1.jpg`, label: { en: "Carving workshop", ja: "彫刻の工房" } },
    ],
  },
  {
    plan: "Plan B",
    title: {
      en: (
        <>
          Three-Color <em>Ride</em>
        </>
      ),
      ja: (
        <>
          渓谷の<em>シャワーサイクリング</em>
        </>
      ),
    },
    sub: { en: "渓谷のシャワーサイクリング", ja: "Three-Color Ride" },
    target: { en: "Active couples, 30s", ja: "アクティブなカップル・30代" },
    mobility: { en: "E-bike + tour transfer", ja: "Eバイク+ツアー送迎" },
    price: "¥60,000",
    headPhoto: {
      src: `${IMG}/explanation_all_gorge_1.jpg`,
      label: { en: "The gorges of Nagiso", ja: "南木曽の渓谷" },
    },
    stops: [
      BREAKFAST,
      EBIKE,
      {
        title: { en: "AM activity: Downhill from Tadachi", ja: "午前:田立からダウンヒル" },
        body: {
          en: "A long, easy coast down from the white water of Tadachi Falls.",
          ja: "田立の滝の白い水しぶきから、長くゆるやかに下っていく。",
        },
      },
      {
        title: { en: "Lunch: Gohei-mochi by the irori", ja: "昼食:囲炉裏で五平餅" },
        body: {
          en: "Hearth-grilled mochi at a kominka beside the water.",
          ja: "川辺の古民家で、囲炉裏焼きの五平餅を。",
        },
      },
      {
        title: { en: "PM activity: Kakizore green to Atera blue", ja: "午後:柿其の緑から阿寺の青へ" },
        body: {
          en: "Over one peak, from the green of Kakizore Gorge to the blue of Atera — dip into the river along the way as you wish.",
          ja: "峠をひとつ越えて、柿其渓谷の緑から阿寺の青へ — 道中、好きなだけ川に浸かって。",
        },
      },
      DINNER,
    ],
    gallery: [
      { src: `${IMG}/place_tadachi_gorge_1.jpg`, label: { en: "Tadachi Gorge", ja: "田立の渓谷" } },
      { src: `${IMG}/place_takahashi_fishing_1.jpg`, label: { en: "By the river", ja: "川辺にて" } },
      { src: `${IMG}/place_kominka_kikori_1.jpg`, label: { en: "Woodcutter's kominka", ja: "木こりの古民家" } },
      { src: `${IMG}/lunch_irori_goheimochi_1.jpg`, label: { en: "Gohei-mochi lunch", ja: "五平餅の昼食" } },
      { src: `${IMG}/road_koiji_trail_1.jpg`, label: { en: "Koiji trail", ja: "恋路峠の道" } },
      { src: `${IMG}/place_kakizore_gorge_1.jpg`, label: { en: "Kakizore Gorge", ja: "柿其渓谷" } },
      { src: `${IMG}/place_atera_gorge_1.jpg`, label: { en: "Atera Gorge", ja: "阿寺渓谷" } },
      { src: `${IMG}/place_atera_onsen_1.jpg`, label: { en: "Atera onsen", ja: "阿寺温泉" } },
      { src: `${IMG}/place_nojiri_end_1.jpg`, label: { en: "Finish at Nojiri", ja: "野尻でゴール" } },
    ],
  },
  {
    plan: "Plan C",
    title: {
      en: (
        <>
          The World's Most <em>Comfortable 50 km</em>
        </>
      ),
      ja: (
        <>
          木曽川をくだる、<em>世界一ラクな50km</em>
        </>
      ),
    },
    sub: { en: "木曽川をひたすら下る、世界一ラクな50km", ja: "The World's Most Comfortable 50 km" },
    target: { en: "Beginner cyclists", ja: "サイクリング初心者" },
    mobility: { en: "E-bike + tour transfer", ja: "Eバイク+ツアー送迎" },
    price: "¥80,000",
    headPhoto: {
      src: `${IMG}/explanation_kiso_river_1.jpg`,
      label: { en: "The Kiso River", ja: "木曽川" },
    },
    stops: [
      BREAKFAST,
      EBIKE,
      {
        title: { en: "Shuttle up to Yabuhara", ja: "藪原までシャトル送迎" },
        body: {
          en: "We lift you and the bikes to the top of the valley, where the Kiso River begins — from here you only ever roll down.",
          ja: "あなたと自転車を、木曽川の始まる谷の上流まで運びます — ここから先は、下るだけ。",
        },
      },
      {
        title: { en: "AM activity: Down the upper Kiso", ja: "午前:上流の木曽路を下る" },
        body: {
          en: "Through three post towns — Yabuhara, Miyanokoshi and Kiso-Fukushima — into Agematsu.",
          ja: "藪原、宮ノ越、木曽福島 — 3つの宿場町を抜けて、上松へ。",
        },
      },
      {
        title: { en: "Lunch: in Agematsu", ja: "昼食:上松にて" },
        body: {
          en: "A break in the old post town of Agematsu.",
          ja: "古い宿場町・上松でひと休み。",
        },
      },
      {
        title: { en: "PM activity: Down the lower Kiso", ja: "午後:下流の木曽路を下る" },
        body: {
          en: "Through four post towns — Agematsu, Suhara, Nojiri and Midono — to the finish.",
          ja: "上松、須原、野尻、三留野 — 4つの宿場町を抜けて、ゴールへ。",
        },
      },
      DINNER,
    ],
    gallery: [
      { src: `${IMG}/explanation_all_post_town_1.jpg`, label: { en: "Post towns", ja: "宿場町" } },
      { src: `${IMG}/explanation_all_station_1.jpg`, label: { en: "Stations en route", ja: "沿線の駅" } },
      { src: `${IMG}/transportation_ebike_on_jr_1.jpg`, label: { en: "E-bike on the JR", ja: "JRにEバイクを載せて" } },
      { src: `${IMG}/place_yabuhara_1.jpg`, label: { en: "Yabuhara", ja: "藪原" } },
      { src: `${IMG}/place_kiso_river_beggining_1.jpg`, label: { en: "River source", ja: "木曽川の始まり" } },
      { src: `${IMG}/place_yabuhara_cafe_1.jpg`, label: { en: "Yabuhara café", ja: "藪原のカフェ" } },
      { src: `${IMG}/road_upper_kiso.jpg`, label: { en: "Upper Kiso road", ja: "上流の木曽路" } },
      { src: `${IMG}/lunch_kisofukushima_1.jpg`, label: { en: "Agematsu lunch", ja: "上松の昼食" } },
      { src: `${IMG}/road_downer_kiso.jpg`, label: { en: "Lower Kiso road", ja: "下流の木曽路" } },
      { src: `${IMG}/place_atera_gorge_1.jpg`, label: { en: "Atera Gorge", ja: "阿寺渓谷" } },
      { src: `${IMG}/place_atera_onsen_1.jpg`, label: { en: "Atera onsen", ja: "阿寺温泉" } },
      { src: `${IMG}/place_midono_end_1.jpg`, label: { en: "Finish in Midono", ja: "三留野でゴール" } },
    ],
    mapEmbed: "https://www.google.com/maps/d/embed?mid=1LgL4RlnePF5JdvpqzADrpsrrW7oTVDE",
  },
];

const SENSEIS: { craft: L; src: string; name: L; body: L }[] = [
  {
    craft: { en: "Wagashi", ja: "和菓子" },
    src: `${IMG}/local_sensei_wagashi.jpg`,
    name: { en: "The sweets maker", ja: "和菓子職人" },
    body: {
      en: "Seasonal wagashi, shaped by hand from bean and rice.",
      ja: "豆と米から手で形づくる、季節の和菓子。",
    },
  },
  {
    craft: { en: "Yoga", ja: "ヨガ" },
    src: `${IMG}/local_sensei_yoga.jpg`,
    name: { en: "The yoga teacher", ja: "ヨガの先生" },
    body: {
      en: "A slow morning flow on tatami, open to every body.",
      ja: "畳の上の、ゆったりとした朝のフロー。どんな体にも開かれています。",
    },
  },
  {
    craft: { en: "Zazen", ja: "坐禅" },
    src: `${IMG}/local_sensei_zazen.jpg`,
    name: { en: "The zazen guide", ja: "坐禅の導き手" },
    body: {
      en: "Sitting meditation, taught the plain old way.",
      ja: "昔ながらの、飾らない坐禅の作法。",
    },
  },
  {
    craft: { en: "Shodō", ja: "書道" },
    src: `${IMG}/local_sensei_calligraphy.jpg`,
    name: { en: "The calligrapher", ja: "書家" },
    body: {
      en: "Ink, brush, and breath — one honest line at a time.",
      ja: "墨と筆と呼吸 — 正直な一線を、一本ずつ。",
    },
  },
];

const FAQS: { q: L; a: L }[] = [
  {
    q: { en: "What's included in the price?", ja: "料金には何が含まれますか?" },
    a: {
      en: "A catered breakfast and dinner delivered to your inn, the full guided day tour, fat-tire e-bike and gear, any tour-incidental transfers, and recreation insurance. Your lodging is booked and paid separately, directly with the inn.",
      ja: "宿への朝食・夕食のお届け、ガイド付きデイツアーの全行程、ファットタイヤEバイクと装備、ツアーに付随する送迎、レクリエーション保険が含まれます。宿泊は宿と直接、別途ご予約・お支払いください。",
    },
  },
  {
    q: { en: "Do I book my room through you?", ja: "宿の予約もお願いできますか?" },
    a: {
      en: "No — you reserve your own inn in Nagiso, so we need no travel-agency licence. We only provide information and a shortlist, then deliver your meals within the town.",
      ja: "いいえ — 宿は南木曽の宿をご自身でご予約いただきます(そのため旅行業登録は不要です)。私たちは宿の情報とおすすめリストのご案内、そして町内でのお食事のお届けを行います。",
    },
  },
  {
    q: { en: "Are the meals really vegan?", ja: "食事は本当にヴィーガンですか?" },
    a: {
      en: "Yes — both the ochazuke breakfast and the hot-pot dinner are fully vegan and gluten-free, made with local vegetables, mushrooms and soy.",
      ja: "はい — 朝のお茶漬けも夜のお鍋も、地元の野菜ときのこ、大豆でつくる完全ヴィーガン&グルテンフリーです。",
    },
  },
  {
    q: { en: "Do I need to be fit?", ja: "体力に自信がなくても大丈夫?" },
    a: {
      en: "Plan A is gentle (walking and easy e-bike) and Plan C is almost all downhill — great for beginners. Plan B has real distance and climbs, so it's best for confident riders.",
      ja: "プランAはゆったり(徒歩とやさしいEバイク)、プランCはほぼ下りだけなので初心者に最適です。プランBは距離も登りも本格的なので、走り慣れた方向けです。",
    },
  },
  {
    q: { en: "How do I pay?", ja: "支払い方法は?" },
    a: {
      en: "Securely online, in advance, via Square. Cancellation terms are shown before checkout.",
      ja: "Squareを通じて、オンラインで安全に事前決済いただきます。キャンセル規定はチェックアウト前に表示されます。",
    },
  },
];

function Nav({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const t = (x: L) => x[lang];
  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <a href="#top" className="brand">
        Nagiso <em>Local Dive</em>
      </a>
      <div className="nav-links">
        <a href="#idea">{t({ en: "The idea", ja: "コンセプト" })}</a>
        <a href="#day">{t({ en: "A day", ja: "一日の流れ" })}</a>
        <a href="#tours">{t({ en: "Tours", ja: "ツアー" })}</a>
        <a href="#people">{t({ en: "People", ja: "ひとびと" })}</a>
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
        <a href="#book" className="nav-book">
          {t({ en: "Book a day", ja: "予約する" })}
        </a>
      </div>
    </nav>
  );
}

export default function Page() {
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

  const marquee = t({
    en: "Book two nights  ·  we arrange the day  ·  catered meals to your inn  ·  a day with a local sensei  ·  e-bikes & gorges  ·  dive into the local  · ",
    ja: "2泊のご予約だけ  ·  昼間はまるごとおまかせ  ·  お食事は宿へお届け  ·  地元の先生と過ごす一日  ·  Eバイクと渓谷  ·  ローカルに飛び込む  · ",
  });

  return (
    <>
      <Nav lang={lang} setLang={setLang} />

      {/* ============================ HERO ============================ */}
      <header className="hero" id="top">
        <Figure
          src={`${IMG}/top_local_dive_experience.jpg`}
          label={t({ en: "Nagiso — local dive experience", ja: "南木曽 — ローカルダイブ体験" })}
        />
        <div className="hero-inner">
          <span className="eyebrow">
            {t({ en: "Nagiso · Kiso Valley · Zero-night day tours", ja: "南木曽 · 木曽谷 · ゼロ泊デイツアー" })}
          </span>
          <h1>
            {tn({
              en: (
                <>
                  Dive into the <em>local.</em>
                </>
              ),
              ja: (
                <>
                  ローカルに、<em>飛び込む。</em>
                </>
              ),
            })}
          </h1>
          <p className="hero-lede">
            {t({
              en: "Just book two nights in Nagiso yourself. We take care of the rest — breakfast and dinner delivered to your inn, your transport, and a day of activities guided by local senseis, set in a kominka and the nature around it.",
              ja: "あなたがするのは、南木曽で2泊を予約することだけ。あとはすべてお任せください — 朝食と夕食はお泊まりの宿へお届け。移動手段も、古民家とその周りの自然を舞台に地元の先生たちが導く一日のアクティビティも、私たちがご用意します。",
            })}
          </p>
          <div className="hero-ctas">
            <a href="#tours" className="btn-primary">
              {t({ en: "See the three tours", ja: "3つのツアーを見る" })}
            </a>
            <a href="#idea" className="btn-secondary">
              {t({ en: "How it works", ja: "仕組みを知る" })}
            </a>
          </div>
        </div>
      </header>

      {/* ========================== MARQUEE ========================== */}
      <div className="marquee">
        <div className="marquee-inner">
          <span>{marquee}</span>
          <span aria-hidden="true">{marquee}</span>
        </div>
      </div>

      {/* ===================== WHY / HOW / WHAT ===================== */}
      <div className="circle" id="idea">
        <div className="circle-wrap">
          <div className="circle-head">
            <span className="eyebrow-dark">
              {t({ en: "The local dive experience", ja: "ローカルダイブ体験" })}
            </span>
          </div>
          <div className="circle-grid">
            <article className="circle-card">
              <div className="circle-photo">
                <Figure src={`${IMG}/why_local_dive_experience.jpg`} label="Why" />
              </div>
              <div className="circle-body">
                <span className="circle-key">Why</span>
                <h3>
                  {t({
                    en: "The best of the valley isn't in the guidebook.",
                    ja: "谷のいちばんの魅力は、ガイドブックに載っていない。",
                  })}
                </h3>
                <p>
                  {t({
                    en: "The experiences only locals know never make it onto the internet. Once travellers here ourselves, and now residents, we want to share them with the people who visit — through the eyes of someone who came, and stayed.",
                    ja: "地元の人しか知らない体験は、インターネットには出てきません。かつて旅人としてこの谷に来て、いまは住人になった私たちが、訪れる人にそれを分かち合いたい — 来て、そのまま住み着いた者の目で。",
                  })}
                </p>
              </div>
            </article>
            <article className="circle-card">
              <div className="circle-photo">
                <Figure src={`${IMG}/how_local_dive_experience.jpg`} label="How" />
              </div>
              <div className="circle-body">
                <span className="circle-key">How</span>
                <h3>
                  {t({
                    en: "Not more lodging — one integrated day.",
                    ja: "宿を増やすのではなく、一日をまるごと。",
                  })}
                </h3>
                <p>
                  {t({
                    en: "To really share them, we decided the answer wasn't building ever more places to sleep. It was to integrate the daytime itself — the activities, the food, and the way you move — and offer it as a single, seamless day.",
                    ja: "本当に分かち合うには、泊まる場所を増やすことが答えではないと考えました。昼間そのもの — アクティビティ、食事、移動 — をひとつにまとめ、切れ目のない一日としてお届けすること。それが私たちの答えです。",
                  })}
                </p>
              </div>
            </article>
            <article className="circle-card">
              <div className="circle-photo">
                <Figure src={`${IMG}/what_local_dive_experience.jpg`} label="What" />
              </div>
              <div className="circle-body">
                <span className="circle-key">What</span>
                <h3>
                  {t({
                    en: "Three ways to spend one day.",
                    ja: "一日の過ごし方は、3通り。",
                  })}
                </h3>
                <p>
                  {t({
                    en: "So we provide the whole daytime in Nagiso — breakfast delivered to your inn, transport, and a full day of local activities, then dinner delivered to your inn that evening. All you do is book two nights in Nagiso.",
                    ja: "南木曽での昼間を、まるごとご用意します。宿への朝食のお届け、移動、地元アクティビティに満ちた一日、そして夜には夕食を宿へ。あなたがするのは、南木曽で2泊を予約することだけ。",
                  })}
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>

      {/* ===================== THE DAY (delivered) ===================== */}
      <section id="day" className="day">
        <div className="section-head compact">
          <span className="eyebrow-dark">{t({ en: "A day, delivered", ja: "届く、一日" })}</span>
          <h2>
            {tn({
              en: (
                <>
                  Wake, ride, <em>come home to dinner.</em>
                </>
              ),
              ja: (
                <>
                  目覚めて、走って、<em>夕食の待つ宿へ。</em>
                </>
              ),
            })}
          </h2>
          <p>
            {t({
              en: "Every tour begins and ends in Nagiso — breakfast to your inn, a day with us, dinner to your inn. Both nights of lodging stay right here.",
              ja: "すべてのツアーは南木曽で始まり、南木曽で終わります — 朝食は宿へ、昼間は私たちと、夕食もまた宿へ。2泊分の宿泊は、まるごとこの町に。",
            })}
          </p>
        </div>
        <div className="flow-grid">
          <div className="flow-step">
            <div className="flow-photo">
              <Figure
                src={`${IMG}/delivery_breakfast.jpg`}
                label={t({ en: "Breakfast delivered", ja: "朝食のお届け" })}
                ratio="16 / 10"
              />
            </div>
            <span className="flow-time">{t({ en: "Morning · to your inn", ja: "朝 · お泊まりの宿へ" })}</span>
            <h3>{t({ en: "Breakfast at the door", ja: "朝食が玄関先に" })}</h3>
            <p>
              {t({
                en: "Ochazuke, miso soup and pickles, delivered to your inn.",
                ja: "お茶漬けとお味噌汁、お漬物を宿までお届けします。",
              })}
            </p>
          </div>
          <div className="flow-step">
            <div className="flow-photo">
              <Figure
                src={`${IMG}/transportation_ebike_1.jpg`}
                label={t({ en: "E-bike day tour", ja: "Eバイクのデイツアー" })}
                ratio="16 / 10"
              />
            </div>
            <span className="flow-time">{t({ en: "Daytime · with a guide", ja: "昼 · ガイドとともに" })}</span>
            <h3>{t({ en: "The day is ours", ja: "一日は私たちのもの" })}</h3>
            <p>
              {t({
                en: "Meet at the station at 9:30 — on foot and by fat-tire e-bike.",
                ja: "9時30分に駅で集合 — 徒歩と、ファットタイヤのEバイクで。",
              })}
            </p>
          </div>
          <div className="flow-step">
            <div className="flow-photo">
              <Figure
                src={`${IMG}/delivery_dinner.jpg`}
                label={t({ en: "Dinner delivered", ja: "夕食のお届け" })}
                ratio="16 / 10"
              />
            </div>
            <span className="flow-time">{t({ en: "Evening · to your inn", ja: "夜 · お泊まりの宿へ" })}</span>
            <h3>{t({ en: "Dinner comes to you", ja: "夕食は向こうからやって来る" })}</h3>
            <p>
              {t({
                en: "A vegan hot pot arrives at your inn. Soak, eat, sleep.",
                ja: "ヴィーガン鍋が宿に届きます。湯に浸かって、食べて、眠るだけ。",
              })}
            </p>
          </div>
        </div>
        <p className="flow-note">
          {t({
            en: "On rainy days or on request, the e-bike legs switch to a comfortable car transfer — the day still happens, dry.",
            ja: "雨の日やご希望に応じて、Eバイクの区間は快適な車での送迎に切り替えます — 濡れることなく、一日はそのままに。",
          })}
        </p>
      </section>

      {/* =========================== TOURS =========================== */}
      <div className="tours" id="tours">
        <div className="tours-wrap">
          <div className="section-head">
            <span className="eyebrow-dark">{t({ en: "The line-up", ja: "ラインナップ" })}</span>
            <h2>
              {tn({
                en: (
                  <>
                    Three ways to spend <em>the day</em>.
                  </>
                ),
                ja: (
                  <>
                    <em>一日</em>の過ごし方、3通り。
                  </>
                ),
              })}
            </h2>
            <p>
              {t({
                en: "Same catered breakfast and dinner for all three. Departures from Nagiso Station at 9:30, finishing late afternoon. Up to 6 guests.",
                ja: "朝食と夕食のケータリングは3プラン共通。南木曽駅9時30分発、夕方前に終了。最大6名さままで。",
              })}
            </p>
          </div>

          {TOURS.map((tour) => (
            <article className="tour" key={tour.plan}>
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
          ))}
        </div>
      </div>

      {/* ===================== SCHEDULE / BOOKING ===================== */}
      <div className="schedule" id="book">
        <div className="schedule-wrap">
          <div className="section-head">
            <span className="eyebrow-dark">{t({ en: "Dates & booking", ja: "日程と予約" })}</span>
            <h2>
              {tn({
                en: (
                  <>
                    Pick a date, <em>pay in a tap.</em>
                  </>
                ),
                ja: (
                  <>
                    日付を選んで、<em>その場で決済。</em>
                  </>
                ),
              })}
            </h2>
            <p>
              {t({
                en: "Trial season opens September 2026, with a handful of seats each departure. Reserve and prepay online; you book your own inn separately (we'll point you to the good ones).",
                ja: "2026年9月、トライアルシーズンが始まります。各回の席はわずか。オンラインでご予約・事前決済を。宿はご自身で別途ご予約ください(良い宿をご案内します)。",
              })}
            </p>
          </div>

          <div className="schedule-photo">
            <Figure
              src={`${IMG}/middle_timeschedule.jpg`}
              label={t({ en: "Season schedule", ja: "シーズンスケジュール" })}
              ratio="16 / 7"
            />
          </div>

          <div className="square-slot">
            <span className="square-badge">{t({ en: "Square booking", ja: "Square予約" })}</span>
            <p>
              {t({
                en: "The live class-schedule & prepayment (Square) embed will live here — pick a date and check out.",
                ja: "ここにSquareのクラススケジュール&事前決済の埋め込みが入ります — 日付を選んで、そのままチェックアウト。",
              })}
            </p>
          </div>

          <ol className="book-steps">
            <li>
              <span className="n">1</span>
              <h4>{t({ en: "Book your inn", ja: "宿を予約する" })}</h4>
              <p>
                {t({
                  en: "Reserve a night before and after in Nagiso. We share a shortlist of local inns.",
                  ja: "南木曽で前泊と後泊をご予約ください。地元の宿のおすすめリストをお渡しします。",
                })}
              </p>
            </li>
            <li>
              <span className="n">2</span>
              <h4>{t({ en: "Reserve the day", ja: "一日を予約する" })}</h4>
              <p>
                {t({
                  en: "Choose a tour and a date, and prepay securely through Square.",
                  ja: "ツアーと日付を選び、Squareで安全に事前決済。",
                })}
              </p>
            </li>
            <li>
              <span className="n">3</span>
              <h4>{t({ en: "Just arrive", ja: "あとは来るだけ" })}</h4>
              <p>
                {t({
                  en: "Meals come to your inn; meet us at the station at 9:30. We handle the rest.",
                  ja: "お食事は宿へ届きます。9時30分に駅で待ち合わせ。あとはすべてお任せください。",
                })}
              </p>
            </li>
          </ol>
        </div>
      </div>

      {/* =========================== SENSEIS =========================== */}
      <section id="people">
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
          {SENSEIS.map((s) => (
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

      {/* =========================== ORGANIZER =========================== */}
      <div className="organizer">
        <div className="organizer-inner">
          <div className="organizer-photo">
            <Figure
              src={`${IMG}/yakkun.jpg`}
              label={t({ en: "Yakkun — founder", ja: "やっくん — 主催者" })}
              ratio="4 / 5"
            />
          </div>
          <div>
            <span className="eyebrow-light">{t({ en: "The organizer", ja: "主催者" })}</span>
            <h3>
              {tn({
                en: (
                  <>
                    Yakkun, who <em>never left.</em>
                  </>
                ),
                ja: (
                  <>
                    やっくん — <em>帰らなかった旅人。</em>
                  </>
                ),
              })}
            </h3>
            <div className="organizer-role">
              {t({ en: "Yasuhiro Fukuda · From Scratch LLC", ja: "Yasuhiro Fukuda · 合同会社 From Scratch" })}
            </div>
            <p>
              {t({
                en: "He came here once, as a traveller. Then Nagiso got under his skin — enough that he quit the salaryman life and moved to the valley, alone.",
                ja: "最初は、ひとりの旅人としてここに来ました。ところが南木曽が心から離れなくなり — 会社員生活を辞め、単身この谷へ移住してしまうほどに。",
              })}
            </p>
            <p>
              {t({
                en: "Today he runs Kashiwaya Guesthouse and a small web of tourism around it: bike rental, guided tours, luggage shuttles. His one rule is simple — share the real rural Japan he found, first as a visitor and then as a local, exactly as it is, with nothing polished away.",
                ja: "いまはゲストハウス柏屋を営みながら、レンタサイクル、ガイドツアー、荷物運搬と、その周りに小さな観光の網の目を紡いでいます。ルールはひとつだけ — 旅人として、そして住人として出会った本物の田舎の日本を、飾らず磨かず、ありのまま分かち合うこと。",
              })}
            </p>
          </div>
        </div>
      </div>

      {/* ============================ FAQ ============================ */}
      <div className="faq">
        <div className="section-head">
          <span className="eyebrow-dark">{t({ en: "Good to know", ja: "ご予約の前に" })}</span>
          <h2>{t({ en: "Before you book", ja: "よくあるご質問" })}</h2>
        </div>
        {FAQS.map((f) => (
          <details className="faq-item" key={f.q.en}>
            <summary>{t(f.q)}</summary>
            <p>{t(f.a)}</p>
          </details>
        ))}
      </div>

      {/* =========================== FOOTER =========================== */}
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
            <a href="#idea">{t({ en: "The idea", ja: "コンセプト" })}</a>
            <a href="#day">{t({ en: "A day, delivered", ja: "一日の流れ" })}</a>
            <a href="#tours">{t({ en: "The three tours", ja: "3つのツアー" })}</a>
            <a href="#book">{t({ en: "Dates & booking", ja: "日程と予約" })}</a>
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

      <a href="#book" className="float-book">
        {t({ en: "Book a day", ja: "予約する" })}
      </a>
    </>
  );
}
