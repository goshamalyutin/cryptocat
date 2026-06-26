/**
 * Structural / link content for the site.
 *
 * Copy strings live in lib/i18n/*.ts (English only).
 * This file holds non-translatable structure: hrefs, ids, icons, ordering.
 */

export const links = {
  playNow: "https://t.me/CryptoCatGame_Bot/start",
  telegram: "https://t.me/SimcatAirdrop",
  verdex: "https://verdexwallet.com",
  solarious: "https://solarious.us",
  airdrop: "#", // -> TBD
  appStore: "#", // -> App Store listing
  googlePlay: "#", // -> Google Play listing
};

export type NavKey = "about" | "cats" | "roadmap";

/** In-page anchor links (smooth-scroll to section IDs). $SOLAR is a modal, handled separately. */
export const navLinks: { id: string; href: string; key: NavKey }[] = [
  { id: "about", href: "#how", key: "about" },
  { id: "cats", href: "#cats", key: "cats" },
  { id: "roadmap", href: "#road", key: "roadmap" },
];

/** Social icons in the nav (Telegram only). */
export const socials: { id: string; href: string; label: string }[] = [
  { id: "telegram", href: links.telegram, label: "Telegram" },
];

/** Roadmap structure (copy is translated via i18n keys roadmap.<id>.*). */
export const roadmap: { id: string; done: boolean }[] = [
  { id: "live", done: true },
  { id: "v2", done: false },
  { id: "tge", done: false },
  { id: "airdrop", done: false },
  { id: "beyond", done: false },
];

/** "How it works" steps (copy via i18n keys steps.<id>.*). */
export const steps: { id: string; icon: string; num: string }[] = [
  { id: "dig", icon: "⛏️", num: "01 — DIG" },
  { id: "learn", icon: "📖", num: "02 — LEARN" },
  { id: "earn", icon: "💎", num: "03 — EARN" },
];

/**
 * Footer link columns. `kind` controls rendering:
 *  - "anchor"  -> in-page smooth-scroll link
 *  - "external"-> opens in a new tab
 *  - "route"   -> internal Next route
 *  - "solar"   -> opens the $SOLAR modal (no href)
 */
type FooterLink = {
  id: string;
  href?: string;
  kind: "anchor" | "external" | "route" | "solar" | "airdrop";
};

export const footerColumns: { id: string; links: FooterLink[] }[] = [
  {
    id: "game",
    links: [
      { id: "about", href: "#how", kind: "anchor" },
      { id: "cats", href: "#cats", kind: "anchor" },
      { id: "roadmap", href: "#road", kind: "anchor" },
    ],
  },
  {
    id: "token",
    links: [
      { id: "solar", kind: "solar" },
      { id: "airdrop", kind: "airdrop" },
      { id: "verdex", href: links.verdex, kind: "external" },
    ],
  },
  {
    id: "community",
    links: [{ id: "telegram", href: links.telegram, kind: "external" }],
  },
];

export const legalLinks: { id: string; href: string }[] = [
  { id: "terms", href: "/terms" },
  { id: "privacy", href: "/privacy" },
  { id: "risk", href: "/risk" },
];
