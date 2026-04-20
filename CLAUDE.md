# XON SAROY — Korporativ portal (xonapps.uz)

> xonapps.uz asosiy sahifasi: qurilish korxonasining barcha modullarini bitta luxury portalda jamlaydi.

## 1. Brand va uslub

- **XON SAROY** — qurilish korxonasi nomi (domen: xonapps.uz)
- **Uslub:** Luxury royal portal — chuqur violet + tilla aksent
- **Ilhom:** saroyning tilla minoralari + zamonaviy glass-morphism
- **Fonts:**
  - `Cormorant Garamond` — brand nomi, hero sarlavhasi, kartka nomlari (serif, italic shine)
  - `Inter` — asosiy matn (300–700)
  - `JetBrains Mono` — yorliqlar, statuslar, footer (monospace caps)

**Rang palettasi:**
```
--bg-0: #08050f        /* eng chuqur fon */
--violet-deep: #6d3ad6
--violet-soft: #c4b5fd
--gold-deep: #caa24a
--gold-soft: #f3d488
--ink: #f4efe6         /* asosiy matn (krem) */
```

## 2. Stack

- **React 19 + Vite + TypeScript**
- **Plain CSS** (App.css) — framework yo'q, dizayn qat'iy
- **Google Fonts** (index.html'da preconnect + link)
- Bundle: ~65 KB gzip (juda yengil)

## 3. Struktura

```
src/
├── App.tsx             — asosiy layout + hooks (clock, lang, cursor glow)
├── App.css             — to'liq luxury dizayn
├── index.css           — minimal reset
├── modules.ts          — MODULES ro'yxati
├── i18n.ts             — UZ/RU/EN tarjimalar + formatDate
├── icons.tsx           — SVG ikonkalar (har modul uchun)
└── components/
    └── ModuleCard.tsx  — interaktiv kartka (tilt + flash)
```

## 4. Modullar ro'yxati (hozir)

| ID | Nom | Variant rangi | Holat | URL |
|---|---|---|---|---|
| taminot | Xon Ta'minot | ta (violet) | live | taminot.xonapps.uz |
| naryad | Xon Naryad | nr (gold) | soon | naryad.xonapps.uz |
| shartnoma | Xon Shartnoma | sh (light violet) | soon | shartnoma.xonapps.uz |
| hr | Xon HR | hr (amber) | beta | hr.xonapps.uz |
| tulov | Xon To'lov | tl (deep violet) | soon | tulov.xonapps.uz |
| slot | "Yangi modul" | empty (white) | planned | — |

### Yangi modul qo'shish:
1. `src/modules.ts` — MODULES massiviga yozuv qo'shish
2. `src/icons.tsx` — yangi SVG ikon
3. `src/i18n.ts` — UZ/RU/EN tarjimalar (title, tag, desc, statSuffix)
4. `src/App.css` — agar yangi rang kerak bo'lsa `.card.newname { --glow: R,G,B; }`

## 5. Interaktiv effektlar

| Effekt | Qayerda | Nima |
|---|---|---|
| Orbs | fon | 4 ta floating violet/gold radial orb, 22-30s animatsiya |
| Cursor glow | butun sahifa | 500px violet radial sichqoncha ortidan, lerp bilan |
| Card tilt | har kartka | pointermove → 3D perspective rotation ±6° |
| Card glow | hover | rangli border animatsiya + hue-rotate |
| Card flash | placeholder click | brightness 1→1.35→1 |
| Grain overlay | fon | SVG noise turbulence, 8% opacity |
| Enter animations | hero/header/cards | fade + translate + stagger |

## 6. Til almashtirish

`UZ` (default) / `RU` / `EN`. Hammasi `useState<Lang>` orqali. Matnlar `i18n.ts`'dagi `I18N[lang]` dan olinadi. Sana `formatDate(new Date(), lang)` bilan o'tkaziladi.

## 7. Ishga tushirish

```bash
npm install
npm run dev       # localhost:5173
npm run build     # dist/
npm run preview
```

## 8. Deploy

- **Prod:** `https://xonapps.uz` va `https://www.xonapps.uz` (HTTPS redirect bor)
- **Server:** `root@185.228.88.247` (XonTaminot bilan bir xil)
- **Repo:** `https://github.com/RMR8811/xonapps-landing` (public)
- **Server papka:** `/var/www/xonapps-landing` (git clone)
- **Nginx:** `/etc/nginx/sites-enabled/xonapps-landing` (Let's Encrypt SSL)

### Deploy buyrug'i (bitta qator)

```bash
sshpass -p 'ALRhra1Mt0XM' ssh -o StrictHostKeyChecking=no root@185.228.88.247 \
  "bash /var/www/xonapps-landing/deploy.sh"
```

`deploy.sh` ichida: `git pull` → `npm ci` → `npm run build` → `nginx reload`.

### Oddiy workflow

```bash
# Lokal
git add . && git commit -m "..." && git push

# Server (bir qator)
ssh root@185.228.88.247 bash /var/www/xonapps-landing/deploy.sh
```

### Muhim fayllar

- Nginx config: `/etc/nginx/sites-enabled/xonapps-landing`
- SSL cert: `/etc/letsencrypt/live/xonapps.uz/`
- Build output: `/var/www/xonapps-landing/dist/`

## 9. Konvensiyalar

- **Uzbek-default UI** — barcha matn UZ, RU/EN tarjimalar ham bor
- **Terse response** — user qisqa javoblarni afzal ko'radi
- **Commit faqat so'rovdan keyin** — aytmasdan commit qilinmaydi
- **Izoh minimal** — nomlar o'zini tushuntiradi

## 10. Foydali havolalar

- Original dizayn (HTML): foydalanuvchi yuborgan (Claude Design)
- XonTaminot (modul): `/Users/r/projects/xontaminot`
- XonHR: `/Users/r/projects/xonhr`
- XonNaryad: `/Users/r/projects/XonNaryad`
- Deploy memory: `~/.claude/projects/-Users-r-projects-xontaminot/memory/deployment.md`

## 11. Kelajakdagi o'zgarishlar

- Haqiqiy user auth — avatar tomonidan SSO menu
- Loyiha statistikalari live API dan (286 so'rov, 42 obyekt ...)
- "Online" dot avatar'da real session holatiga bog'lanishi
- Per-module deep-link orqali to'g'ri bo'limga olib borish (masalan taminot → zayavka yaratish)
- Favikon va OG meta (brand mark SVG dan)
