import type { FloaterDef } from "@/components/ui/Floaters";

/**
 * Floating crystal/coin placements.
 * Positioned to avoid the hero headline/buttons (left column on desktop).
 * Far objects: small, faint, blurred, low depth. Near: large, sharp, high depth.
 */
export const heroFloaters: FloaterDef[] = [
  // near / sharp — kept on mobile
  { src: "coin", pos: { right: "10%", top: "12%" }, size: 70, depth: 1.3, anim: "bob" },
  { src: "coin", pos: { right: "5%", bottom: "23%" }, size: 96, depth: 1.6, anim: "bob-slow", delay: 0.6 },
  { src: "crystal", pos: { right: "21%", top: "33%" }, size: 78, depth: 1.0, rotate: -8, anim: "float", delay: 0.3 },
  // far / faint — desktop only
  { src: "crystal", pos: { right: "3%", top: "47%" }, size: 50, depth: 0.6, opacity: 0.6, blur: 2, anim: "float", delay: 1.1, hideMobile: true },
  { src: "coin", pos: { left: "5%", top: "8%" }, size: 46, depth: 0.5, opacity: 0.55, blur: 1.5, anim: "bob", delay: 0.9, hideMobile: true },
  { src: "crystal", pos: { left: "4%", bottom: "10%" }, size: 58, depth: 0.8, rotate: 12, opacity: 0.85, anim: "bob", delay: 1.4, hideMobile: true },
  { src: "coin", pos: { right: "34%", top: "6%" }, size: 40, depth: 0.4, opacity: 0.5, blur: 2, anim: "bob-slow", delay: 0.2, hideMobile: true },
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
