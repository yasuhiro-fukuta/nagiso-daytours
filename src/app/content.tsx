import type { L, LN } from "./i18n";

export const IMG = "/img";

/* TODO: 実際の番号に差し替えてください — 国番号付き・ハイフンなし (例: 819012345678) */
export const WHATSAPP = "https://wa.me/818000000000";

export type Stop = { title: L; body: L };
export type Sensei = { craft: L; src: string; name: L; body: L };
export type Tour = {
  plan: string;
  slug: string;
  title: LN;
  /* Accent line under the title — shows the *other* language:
     `en` = Japanese subtitle shown in EN mode, `ja` = English subtitle shown in JA mode */
  sub: L;
  blurb: L;
  target: L;
  mobility: L;
  price: string;
  headPhoto: { src: string; label: L };
  stops: Stop[];
  gallery: { src: string; label: L }[];
  mapEmbed?: string;
  senseis?: Sensei[];
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

export const SENSEIS: Sensei[] = [
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

export const TOUR_A: Tour = {
  plan: "Plan A",
  slug: "plan-a",
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
  blurb: {
    en: "Zazen, hearth-grilled gohei-mochi and village crafts — a gentle day inside a 300-year-old kominka.",
    ja: "坐禅、囲炉裏の五平餅、村の手仕事 — 築300年の古民家でゆったり過ごす一日。",
  },
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
  senseis: SENSEIS,
};

export const TOUR_C: Tour = {
  plan: "Plan C",
  slug: "plan-c",
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
  blurb: {
    en: "Shuttle to the top of the valley, then 50 km of easy downhill along the Kiso River, post town to post town.",
    ja: "谷の上流までシャトルで上がり、あとは木曽川沿いを50km、宿場から宿場へ下るだけ。",
  },
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
};

export const TOURS: Tour[] = [TOUR_A, TOUR_C];
