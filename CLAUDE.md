# Nagiso Local Dive — landing page

Marketing LP for **Nagiso Zero-Night Day Tours** (From Scratch LLC / Yasuhiro Fukuda).
Business concept: sell no lodging or transport — sell catered breakfast+dinner delivered to
the guest's own inn **plus** a daytime experience tour. Every tour starts & ends in Nagiso, so
each participant structurally generates 2 nights of local lodging demand. Bilingual (EN primary),
Square prepayment, trial launch Sept 2026 (Saturdays, capacity 6/tour).

## Product (3 day tours, all include the same catered breakfast & dinner)
- **Plan A — A Day, 300 Years Ago** (Kominka daily activities). Seniors & families. Walking / e-bike. **¥15,000**.
  Zazen · yoga · gohei-mochi lunch at the irori · wagashi · calligraphy · warazaiku (straw craft) · Enku-style carving workshop.
- **Plan B — Three-Color Ride** (Shower cycling). Active couples, 30s. E-bike + tour transfer. **¥22,000**.
  Tadachi Falls → downhill → river-fish & gohei-mochi lunch → Kakizore Gorge → Koiji Pass → Atera Gorge river play → onsen → finish Nojiri Sta.
- **Plan C — The World's Most Comfortable 50 km** (Kiso River downhill). Beginner cyclists. E-bike + transfer. **¥20,000**.
  Transfer to Yabuhara → ride downstream to Nagiso (drop off at any station if tired) → Kiso-Fukushima lunch → optional Atera Gorge → arrive Midono/Nagiso.

Departures: Nagiso Sta. 9:30 → late afternoon.

## Tech & design
- **Next.js 15 + TypeScript**, single `src/app/page.tsx` + hand-written `src/app/globals.css`. NO Tailwind utility classes in JSX (Tailwind installed but unused, same as siblings).
- Sibling design system to `kashiwaya-lp` / `kiso-ebike-lp`: fonts **Fraunces** (serif display) + **Outfit** (sans); earthy palette (paper/ink/moss/cedar/rust/gold). Voice: "Dive into the local."
- `src/app/Figure.tsx` — client component: graceful labelled placeholder that auto-upgrades to the real photo when a `.jpg` is dropped at the same `/img/...` path. Images do not exist yet by design (user swaps later).

## Deployment (same workflow as the other 3 LPs — see user memory `vercel-staging-workflow`)
GitHub `yasuhiro-fukuta/<repo>` + Vercel scope `yakkuns-projects`. `main` = production, `staging` = Vercel preview.
Edit flow: clone fresh → edit → push `staging` → verify preview URL → merge to `main` → prod auto-deploys. No persistent local source.

## Image placeholder map (exact paths under `public/img/`, user swaps real files later)
- hero: `top_local_dive_experience.jpg`
- why/how/what: `why_/how_/what_local_dive_experience.jpg`
- day flow: `delivery_breakfast.jpg`, `delivery_dinner.jpg`, `transportation_ebike_1.jpg` (car transfer note for rain/on request)
- Plan A: `explanation_kominka_kashiwaya_1`, `explanation_kominka_koubou_1`, `activities_zazen/yoga/wagashi/calligraphy/warazaiku`, `lunch_irori_goheimochi_1`, `lunch_lunchbox_1` (+ MyMap route slot)
- Plan B: `explanation_all_gorge_1`, `place_tadachi_gorge_1`, `place_takahashi_fishing_1`, `place_kominka_kikori_1`, `road_koiji_trail_1`, `place_kakizore_gorge_1`, `place_atera_gorge_1`, `place_atera_onsen_1`, `place_nojiri_end_1`, lunches (+ MyMap slot)
- Plan C: `explanation_kiso_river_1`, `explanation_all_post_town_1`, `explanation_all_station_1`, `transportation_ebike_on_jr_1`, `place_yabuhara_1`, `place_kiso_river_beggining_1`, `place_yabuhara_cafe_1`, `road_upper_kiso`, `lunch_kisofukushima_1`, `road_downer_kiso`, `place_atera_gorge_1`, `place_atera_onsen_1`, `place_midono_end_1` (+ MyMap slot)
- schedule: `middle_timeschedule.jpg` (+ Square class-schedule embed slot)
- senseis: `local_sensei_wagashi/yoga/zazen/calligraphy.jpg`
- organizer: `yakkun.jpg` (bio: ex-traveler → fell for Nagiso → quit salaryman job, solo migration; now runs Kashiwaya guesthouse + rental cycles + tour guiding; creed = share "authentic" rural Japan "as it authentically is")

## Deferred embeds (placeholders in page now, real content later)
- MyMap route embeds — one per tour
- Square prepayment / class-schedule embed — schedule section
- Legal: Specified Commercial Transactions Act (特商法) statutory disclosure page

---

# Progress

## 2026-07-12 — first draft BUILT & running locally ✅
Done:
- Read the full proposal (docx) and locked content/structure above.
- Scaffolded `nagiso-daytours` from `kashiwaya-lp` config (`package.json` = `nagiso-daytours-lp`).
- `src/app/layout.tsx` (Fraunces+Outfit fonts, metadata/OG).
- `src/app/Figure.tsx` (graceful image placeholder → auto-upgrade component).
- `src/app/globals.css` — full editorial design system (Figure placeholder, nav, hero, marquee, why/how/what circle, day-flow, tours w/ timeline+map-slot+gallery, schedule/Square slot, senseis, organizer, faq, footer, float-book). Sibling palette + fonts.
- `src/app/page.tsx` — every section wired with proposal content + the full image map. 3 tours as data array; nav scroll state; JP subtitles; prices ¥15k/¥22k/¥20k.
- `npm install` (318 pkgs) → dev server runs on :3000 via `.claude/launch.json` (config `nagiso-daytours`).
- Verified full render via accessibility tree (nav→footer, all 3 tours, senseis, organizer, faq). Console clean. NOTE: in-app screenshot tool times out here because 45 placeholder images 404 and the page never hits network-idle — not a site bug; user views the live Browser pane directly.

Revision 1 (2026-07-12, applied): hero → "Dive into the local." only + new lede (book 2 nights, we arrange the rest); dropped provider-logic heading above Why/How/What; Why/How/What now stacked **vertically** (alternating photo/text) with rewritten copy (visitor+migrant POV / integrate-the-day thesis / "3 ways to spend one day"); every tour timeline now = Breakfast(ochazuke, vegan/GF) → E-bike hiring (taxi optional) → AM/Lunch/PM → Dinner(vegan hot pot); Plan B dropped river-fishing, PM = "Kakizore green to Atera blue"; Plan C AM upper Kiso→Agematsu, lunch Agematsu, PM lower Kiso 4 post towns; removed all "Saturday" wording (nav/float "Book a day", schedule "Pick a date"); FAQ added vegan Q.

Next tasks (in order):
1. **User review** of revised draft (live at localhost:3000 Browser pane) → iterate further per feedback.
2. **Deploy setup** (needs user one-time action): create empty GitHub repo `yasuhiro-fukuta/nagiso-daytours` + import to Vercel (`yakkuns-projects`). Then I push `main`, create `staging`, (optionally) disable Deployment Protection for login-free preview.
3. Post-launch swaps: real photos at `/img/<name>.jpg` (exact names in image map above), 3 MyMap route embeds, Square class-schedule embed, 特商法 (SCTA) statutory disclosure page.

Design system lives in `globals.css`; image placeholders are the `Figure` component (`src="/img/<name>.jpg"`), which auto-swaps to the real photo when the file is dropped in `public/img/`. `public/img/` is currently empty by design.

## Earlier context (2026-07-11)
- Stood up the clone→staging→verify→merge Vercel workflow for the 3 existing LPs (`kashiwaya-lp`, `kiso-ebike-lp`, `rainy-days-kiso`); all have `staging` branches. Details in user memory `vercel-staging-workflow`.
- Shipped 2 production fixes: `kashiwaya-lp` 三留野宿 romanization Mitsuno→Midono; `kiso-ebike-lp` 街道 "highway"→"post road"/"route".
