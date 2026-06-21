"use client";

import { motion, useReducedMotion } from "framer-motion";
import { revealVariants, revealViewport } from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Stagger delay in seconds (prototype used i%3 * 70ms). */
  delay?: number;
  as?: "div" | "section" | "header" | "li";
};

/**
 * Scroll-reveal wrapper. Honours prefers-reduced-motion by rendering content
 * statically (no transform/opacity animation).
 */
export default function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
