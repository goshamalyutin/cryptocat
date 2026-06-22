/**
 * Structural / link content for the site.
 *
 * Copy strings that need translation live in lib/i18n/*.ts.
 * This file holds non-translatable structure: hrefs, ids, icons, ordering.
 * Replace every "#" with a real URL when available.
 */

export const links = {
  playNow: "#", // -> Telegram bot URL
  appStore: "#", // -> App Store listing
  googlePlay: "#", // -> Google Play listing
};

export const navLinks: { id: string; href: string; key: NavKey }[] = [
  { id: "about", href: "#how", key: "about" },
  { id: "cats", href: "#cats", key: "cats" },
  { id: "roadmap", href: "#road", key: "roadmap" },
  { id: "solar", href: "#solar", key: "solar" },
];

export type NavKey = "about" | "cats" | "roadmap" | "solar";

export const socials: { id: string; href: string; glyph: string; label: string }[] = [
  { id: "x", href: "#", glyph: "𝕏", label: "X / Twitter" },
  { id: "telegram", href: "#", glyph: "✈", label: "Telegram" },
  { id: "discord", href: "#", glyph: "◈", label: "Discord" },
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

/** Footer link columns. Labels via i18n; hrefs here. */
export const footerColumns: {
  id: string;
  links: { id: string; href: string }[];
}[] = [
  {
    id: "game",
    links: [
      { id: "about", href: "#how" },
      { id: "cats", href: "#cats" },
      { id: "roadmap", href: "#road" },
      { id: "news", href: "#" },
    ],
  },
  {
    id: "token",
    links: [
      { id: "solar", href: "#" },
      { id: "airdrop", href: "#" },
      { id: "verdex", href: "#" },
    ],
  },
  {
    id: "community",
    links: [
      { id: "x", href: "#" },
      { id: "telegram", href: "#" },
      { id: "discord", href: "#" },
    ],
  },
];

export const legalLinks: { id: string; href: string }[] = [
  { id: "terms", href: "#" },
  { id: "privacy", href: "#" },
  { id: "risk", href: "#" },
];
