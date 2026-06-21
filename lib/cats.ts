/**
 * Simone's 10 evolution tiers.
 *
 * Merged source of truth:
 *  - `name` / `role`  -> from the approved prototype cards (visual source of truth)
 *  - `rank` / `lore`  -> from LORE.md (richer narrative copy)
 *  - `image`          -> file in /public/assets
 *
 * Edit copy here; all "Meet the Cats" text reads from this file.
 */

export type Cat = {
  tier: number;
  /** Display name on the card (prototype). */
  name: string;
  /** Short role label shown above the name (prototype). */
  role: string;
  /** Canonical rank from LORE.md. */
  rank: string;
  /** Narrative lore line shown as the card description (LORE.md). */
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
    name: "Simone",
    role: "The Rookie",
    rank: "The Rookie",
    lore: "Day one. One pickaxe, one dream, zero clue. Pure curiosity.",
    image: "/assets/tier-01.png",
    badge: "TIER 01",
    width: 550,
  },
  {
    tier: 2,
    name: "Frost",
    role: "Cozy Digger",
    rank: "The Digger",
    lore: "Found her rhythm. Mines through the night, warm and unbothered.",
    image: "/assets/tier-02.png",
    badge: "TIER 02",
    width: 608,
  },
  {
    tier: 3,
    name: "Bolt",
    role: "Speedrunner",
    rank: "The Runner",
    lore: "Learned every tunnel by heart. Fastest paws underground.",
    image: "/assets/tier-03.png",
    badge: "TIER 03",
    width: 594,
  },
  {
    tier: 4,
    name: "Denim",
    role: "The Veteran",
    rank: "The Prospector",
    lore: "First real gear. Now she reads the rock like a map.",
    image: "/assets/tier-04.png",
    badge: "TIER 04",
    width: 703,
  },
  {
    tier: 5,
    name: "Prism",
    role: "Flashy Miner",
    rank: "The Hustler",
    lore: "Hit her first big vein. Gear got loud, hauls got louder.",
    image: "/assets/tier-05.png",
    badge: "TIER 05",
    width: 716,
  },
  {
    tier: 6,
    name: "Rave",
    role: "Maximalist",
    rank: "The Tinker",
    lore: "Built her rig from scrap. Every pocket has a purpose.",
    image: "/assets/tier-06.png",
    badge: "TIER 06",
    width: 585,
  },
  {
    tier: 7,
    name: "Jinx",
    role: "The Collector",
    rank: "The Collector",
    lore: "Wears every gem she's ever struck. Walking proof she runs the caves.",
    image: "/assets/tier-07.png",
    badge: "TIER 07",
    width: 694,
  },
  {
    tier: 8,
    name: "Recon",
    role: "The Scout",
    rank: "The Scout",
    lore: "Maps the veins nobody's found. Eyes that cut through the dark.",
    image: "/assets/tier-08.png",
    badge: "TIER 08",
    width: 685,
  },
  {
    tier: 9,
    name: "Jade",
    role: "Deep Diver",
    rank: "The Deep Diver",
    lore: "Goes where the green glows hottest. Pressure means nothing now.",
    image: "/assets/tier-09.png",
    badge: "TIER 09",
    width: 721,
  },
  {
    tier: 10,
    name: "Dust",
    role: "Wastelander",
    rank: "The Legend",
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
