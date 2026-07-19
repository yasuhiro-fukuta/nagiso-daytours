"use client";

import Link from "next/link";
import Figure from "./Figure";
import Nav from "./Nav";
import Footer from "./Footer";
import { useLang, type L } from "./i18n";
import { IMG, TOURS, WHATSAPP } from "./content";

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
      en: "Plan A is gentle (walking and easy e-bike) and Plan C is almost all downhill — both are great for beginners.",
      ja: "プランAはゆったり(徒歩とやさしいEバイク)、プランCはほぼ下りだけ。どちらも初心者に最適です。",
    },
  },
  {
    q: { en: "How do I book and pay?", ja: "予約と支払いの方法は?" },
    a: {
      en: "Message us on WhatsApp with your tour, date and group size. We confirm your seats and share payment details there — cancellation terms are shown before you pay.",
      ja: "ツアーと日付、人数を添えてWhatsAppでメッセージをお送りください。お席を確認のうえ、お支払い方法をそちらでご案内します。キャンセル規定はお支払い前にお伝えします。",
    },
  },
];

export default function Page() {
  const { lang, setLang, t, tn } = useLang();

  const marquee = t({
    en: "Book two nights  ·  we arrange the day  ·  catered meals to your inn  ·  a day with a local sensei  ·  e-bikes & gorges  ·  be a local, for a day  · ",
    ja: "2泊のご予約だけ  ·  昼間はまるごとおまかせ  ·  お食事は宿へお届け  ·  地元の先生と過ごす一日  ·  Eバイクと渓谷  ·  一日だけ、ローカルになる  · ",
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
                  Be a local, <em>for a day.</em>
                </>
              ),
              ja: (
                <>
                  一日だけ、<em>ローカルになる。</em>
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
              {t({ en: "See the two tours", ja: "2つのツアーを見る" })}
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
                    en: "Two ways to spend one day.",
                    ja: "一日の過ごし方は、2通り。",
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
                    Two ways to spend <em>the day</em>.
                  </>
                ),
                ja: (
                  <>
                    <em>一日</em>の過ごし方、2通り。
                  </>
                ),
              })}
            </h2>
            <p>
              {t({
                en: "Same catered breakfast and dinner for both tours. Departures from Nagiso Station at 9:30, finishing late afternoon. Up to 6 guests.",
                ja: "朝食と夕食のケータリングは両プラン共通。南木曽駅9時30分発、夕方前に終了。最大6名さままで。",
              })}
            </p>
          </div>

          <div className="tour-cards">
            {TOURS.map((tour) => (
              <Link href={`/${tour.slug}`} className="tour-card" key={tour.plan}>
                <div className="tour-card-photo">
                  <Figure src={tour.headPhoto.src} label={t(tour.headPhoto.label)} />
                </div>
                <div className="tour-card-body">
                  <span className="tour-plan">{tour.plan}</span>
                  <h3>{tn(tour.title)}</h3>
                  <div className="tour-jp">{t(tour.sub)}</div>
                  <p className="tour-card-blurb">{t(tour.blurb)}</p>
                  <div className="tour-card-meta">
                    <span className="tour-card-price">{tour.price}</span>
                    <span className="tour-card-price-note">
                      {t({ en: "group of 4 · ±15% per ±1 person", ja: "4名グループ · 1名増減ごとに±15%" })}
                    </span>
                  </div>
                  <span className="btn-view">{t({ en: "See the full day →", ja: "一日の流れを見る →" })}</span>
                </div>
              </Link>
            ))}
          </div>
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
                    Pick a date, <em>message us.</em>
                  </>
                ),
                ja: (
                  <>
                    日付を選んで、<em>メッセージひとつ。</em>
                  </>
                ),
              })}
            </h2>
            <p>
              {t({
                en: "Trial season opens September 2026, with a handful of seats each departure. Choose your tour, then book over WhatsApp; you book your own inn separately (we'll point you to the good ones).",
                ja: "2026年9月、トライアルシーズンが始まります。各回の席はわずか。ツアーを選んだら、WhatsAppでご予約を。宿はご自身で別途ご予約ください(良い宿をご案内します)。",
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
                  en: "Message us on WhatsApp with your tour, date and group size.",
                  ja: "ツアーと日付、人数を添えて、WhatsAppでメッセージを。",
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

          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            {t({ en: "Book via WhatsApp", ja: "WhatsAppで予約する" })}
          </a>
        </div>
      </div>

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

      <Footer t={t} />

      <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="float-book">
        {t({ en: "Book a day", ja: "予約する" })}
      </a>
    </>
  );
}
