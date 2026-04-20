# xonapps — Landing

xonapps.uz asosiy sahifasi. Modullar oilasining (XonTaminot, XonHR, XonNaryad va boshq.) kirish nuqtasi.

## Stack

React 19 + Vite + TypeScript + Plain CSS

## Ishga tushirish

```bash
npm install
npm run dev      # dev server 5173
npm run build    # prod build → dist/
npm run preview
```

## Yangi modul qo'shish

`src/modules.ts` — `MODULES` massiviga yozuv qo'shing:

```ts
{
  id: 'newmodule',
  name: 'XonSomething',
  tagline: '...',
  href: 'https://something.xonapps.uz',
  status: 'soon',
  accent: '#13c2c2',
  code: 'XS',
}
```

UI avtomatik render qiladi.

## Deploy

- Build: `npm run build`
- Host: nginx static (`/var/www/xonapps-landing/dist`)
- Domen: `xonapps.uz`

## Claude uchun

Batafsil kontekst — [CLAUDE.md](./CLAUDE.md).
