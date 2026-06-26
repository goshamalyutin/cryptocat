/**
 * Simone's 10 evolution tiers — one cat evolving rookie -> legend.
 *
 * The cards show only the RANK (as title) + LORE. There is no per-tier name:
 * it's a single cat ("Simone"), made clear by the section heading
 * "From rookie to legend".
 *
 *  - `rank`  -> card title
 *  - `lore`  -> card description
 *  - `image` -> file in /public/assets
 *
 * Edit copy here; all "Meet the Cats" text reads from this file.
 */

export type Cat = {
  tier: number;
  /** Rank shown as the card title. */
  rank: string;
  /** Narrative lore line shown as the card description. */
  lore: string;
  /** Path under /public. */
  image: string;
  /** Zero-padded tier badge, e.g. "TIER 01". */
  badge: string;
  /** Intrinsic PNG width (px) for next/image. Height is always 1024. */
  width: number;
};

/** Intrinsic height of every cat PNG. */
export const CAT_IMG_HEIGHT = 1024;

export const cats: Cat[] = [
  {
    tier: 1,
    rank: "Prospector",
    lore: "Day one. One pickaxe, one dream, zero clue. Pure curiosity.",
    image: "/assets/tier-01.png",
    badge: "TIER 01",
    width: 550,
  },
  {
    tier: 2,
    rank: "Explorer",
    lore: "Found her rhythm. Mines through the night, warm and unbothered.",
    image: "/assets/tier-02.png",
    badge: "TIER 02",
    width: 608,
  },
  {
    tier: 3,
    rank: "Environmentalist",
    lore: "Learned every tunnel by heart. Fastest paws underground.",
    image: "/assets/tier-03.png",
    badge: "TIER 03",
    width: 594,
  },
  {
    tier: 4,
    rank: "Developer",
    lore: "First real gear. Now she reads the rock like a map.",
    image: "/assets/tier-04.png",
    badge: "TIER 04",
    width: 703,
  },
  {
    tier: 5,
    rank: "Extractor",
    lore: "Hit her first big vein. Gear got loud, hauls got louder.",
    image: "/assets/tier-05.png",
    badge: "TIER 05",
    width: 716,
  },
  {
    tier: 6,
    rank: "Refiner",
    lore: "Built her rig from scrap. Every pocket has a purpose.",
    image: "/assets/tier-06.png",
    badge: "TIER 06",
    width: 585,
  },
  {
    tier: 7,
    rank: "Marketor",
    lore: "Wears every gem she's ever struck. Walking proof she runs the caves.",
    image: "/assets/tier-07.png",
    badge: "TIER 07",
    width: 694,
  },
  {
    tier: 8,
    rank: "Minersales",
    lore: "Maps the veins nobody's found. Eyes that cut through the dark.",
    image: "/assets/tier-08.png",
    badge: "TIER 08",
    width: 685,
  },
  {
    tier: 9,
    rank: "Reclamator",
    lore: "Goes where the green glows hottest. Pressure means nothing now.",
    image: "/assets/tier-09.png",
    badge: "TIER 09",
    width: 721,
  },
  {
    tier: 10,
    rank: "Closurer",
    lore: "The deepest caves know her name. She digs where no cat returns.",
    image: "/assets/tier-10.png",
    badge: "TIER 10",
    width: 604,
  },
];

/** Tier-01 Simone — used in the hero, game preview, and final CTA. */
export const simone = cats[0];

export function getCat(tier: number): Cat | undefined {
  return cats.find((c) => c.tier === tier);
}
