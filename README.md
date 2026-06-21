# CryptoCat — The Game

Production marketing site for **CryptoCat**, a free Telegram play-to-earn game.
A faithful Next.js rebuild of the approved `cryptocat-prototype.html` (same layout,
copy, colors, fonts, and animations).

## Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS** — design tokens ported to `tailwind.config.ts` + CSS vars in `app/globals.css`
- **Framer Motion** — scroll reveals + hero parallax, all guarded by `prefers-reduced-motion`
- **next/font** — Space Grotesk (display), Inter (body), Space Mono (labels/stats)
- **next/image** — the 10 cat PNGs in `public/assets`

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Structure

```
app/
  layout.tsx        # fonts, metadata, <html lang>, LocaleProvider
  page.tsx          # composes all sections in order
  globals.css       # Tailwind layers, CSS vars, button + wrap utilities, reduced-motion guard
components/
  Nav, Hero, Marquee, HowItWorks, MeetTheCats,
  GamePreview, Roadmap, Solarious, FinalCTA, Footer
  ui/Reveal.tsx     # scroll-reveal wrapper (reduced-motion aware)
  ui/Button.tsx     # .btn-primary / .btn-ghost
  ui/FloatCat.tsx   # next/image + idle float
lib/
  cats.ts           # 10 evolution tiers (names/roles from prototype, ranks/lore from LORE.md)
  content.ts        # nav, socials, roadmap, steps, pills, footer — links are "#" placeholders
  motion.ts         # Framer Motion reveal variants
  i18n/             # config + en.ts (filled) + ru.ts (scaffold) + LocaleProvider
public/assets/      # tier-01..10.png
```

## Editing copy

- **Cat tiers / names / lore** → `lib/cats.ts`
- **UI strings** → `lib/i18n/en.ts` (and `ru.ts` once translated)
- **Links, nav, socials, roadmap structure** → `lib/content.ts`

## i18n

EN/RU scaffold via a lightweight client context (`lib/i18n/LocaleProvider.tsx`).
The nav switch toggles locale and persists it. `ru.ts` currently falls back to the
English strings — replace it with real Russian copy (the `Dictionary` type enforces
that every key is present). To move to URL-based locales later, wrap with a
`[locale]` route segment; the dictionaries are already structured for it.

## TODO before launch

- Replace all `#` placeholders in `lib/content.ts` (Play Now → Telegram bot, socials, legal).
- Translate `lib/i18n/ru.ts`.
- `git init` → push → import to Vercel.
