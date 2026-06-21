import type { Variants } from "framer-motion";

/**
 * Scroll-reveal variants — ports the prototype's `.reveal` rule
 * (opacity 0 + translateY(26px) -> in) to Framer Motion.
 */
export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] },
  },
};

/** Viewport config shared by all reveals (matches IntersectionObserver threshold ~0.14). */
export const revealViewport = { once: true, amount: 0.18 } as const;
