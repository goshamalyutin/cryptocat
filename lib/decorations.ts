import type { FloaterDef } from "@/components/ui/Floaters";

/**
 * Floating crystal/coin placements.
 * Positioned to avoid the hero headline/buttons (left column on desktop).
 * Far objects: small, faint, blurred, low depth. Near: large, sharp, high depth.
 */
// Hero floaters live ONLY in the empty area around the cat (right column on
// desktop). They never sit over the H1, subtext, buttons, or stats (left
// column). All are `hideMobile` so the hero has zero floaters on mobile, where
// the layout stacks and there is no empty space to spare.
export const heroFloaters: FloaterDef[] = [
  // upper-right, above/beside the cat
  { src: "coin", pos: { right: "7%", top: "9%" }, size: 64, depth: 1.2, opacity: 0.9, anim: "bob", hideMobile: true },
  { src: "crystal", pos: { right: "1%", top: "30%" }, size: 66, depth: 1.0, rotate: -8, opacity: 0.8, anim: "float", delay: 0.4, hideMobile: true },
  // lower-right, near the cat's feet / right edge
  { src: "coin", pos: { right: "4%", bottom: "16%" }, size: 78, depth: 1.4, opacity: 0.85, anim: "bob-slow", delay: 0.7, hideMobile: true },
  // far / faint accent, still well clear of the text column
  { src: "crystal", pos: { right: "26%", top: "8%" }, size: 44, depth: 0.5, opacity: 0.45, blur: 2, rotate: 10, anim: "bob", delay: 1.1, hideMobile: true },
];

/** Subtle decorations for dark content sections (desktop only). */
export const sectionFloatersA: FloaterDef[] = [
  { src: "crystal", pos: { right: "5%", top: "14%" }, size: 62, depth: 0.7, opacity: 0.5, blur: 1, rotate: -6, anim: "float", hideMobile: true },
  { src: "coin", pos: { left: "3%", bottom: "16%" }, size: 52, depth: 0.9, opacity: 0.45, blur: 1.5, anim: "bob-slow", delay: 0.8, hideMobile: true },
];

export const sectionFloatersB: FloaterDef[] = [
  { src: "coin", pos: { right: "6%", bottom: "12%" }, size: 56, depth: 0.8, opacity: 0.5, blur: 1, anim: "bob", hideMobile: true },
  { src: "crystal", pos: { left: "4%", top: "16%" }, size: 60, depth: 0.6, opacity: 0.45, blur: 1.5, rotate: 10, anim: "float", delay: 0.6, hideMobile: true },
];

/** Decorations scattered around the phone in the game-preview section (right half). */
export const previewFloaters: FloaterDef[] = [
  { src: "coin", pos: { right: "16%", top: "12%" }, size: 58, depth: 1.1, anim: "bob", delay: 0.2 },
  { src: "crystal", pos: { right: "7%", bottom: "15%" }, size: 66, depth: 1.3, rotate: 10, anim: "float", delay: 0.6 },
  { src: "crystal", pos: { right: "30%", top: "44%" }, size: 42, depth: 0.6, opacity: 0.5, blur: 1.5, rotate: -8, anim: "bob-slow", delay: 1.0, hideMobile: true },
  { src: "coin", pos: { right: "38%", bottom: "20%" }, size: 38, depth: 0.5, opacity: 0.45, blur: 2, anim: "bob", delay: 1.3, hideMobile: true },
];
