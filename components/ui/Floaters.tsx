"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";

export type FloaterDef = {
  src: "crystal" | "coin";
  /** CSS position (top/left/right/bottom as % strings). */
  pos: React.CSSProperties;
  /** Rendered size in px (square box; image keeps ratio). */
  size: number;
  rotate?: number;
  opacity?: number;
  /** Background blur in px (far objects are blurrier). */
  blur?: number;
  /** Parallax / drift strength. Far = small (0.3), near = large (1.6). */
  depth?: number;
  /** Float animation flavour. */
  anim?: "float" | "bob" | "bob-slow";
  delay?: number;
  /** Hide below md to reduce clutter / cost on mobile. */
  hideMobile?: boolean;
};

const SRC = {
  crystal: "/assets/crystal.png",
  coin: "/assets/coin.png",
} as const;

function Floater({
  def,
  scrollY,
  mx,
  my,
}: {
  def: FloaterDef;
  scrollY: MotionValue<number>;
  mx: MotionValue<number>;
  my: MotionValue<number>;
}) {
  const depth = def.depth ?? 1;
  const parallaxY = useTransform(scrollY, [0, 1], [depth * 70, depth * -70]);
  const driftX = useTransform(mx, (v) => v * depth * 20);
  const driftY = useTransform(my, (v) => v * depth * 16);

  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none absolute ${def.hideMobile ? "hidden md:block" : ""}`}
      style={{ ...def.pos, y: parallaxY }}
    >
      <motion.div style={{ x: driftX, y: driftY }}>
        <Image
          src={SRC[def.src]}
          alt=""
          width={def.size}
          height={def.size}
          loading="lazy"
          aria-hidden
          className={def.anim ? `animate-${def.anim}` : undefined}
          style={{
            width: def.size,
            height: "auto",
            opacity: def.opacity ?? 1,
            filter: def.blur ? `blur(${def.blur}px)` : undefined,
            transform: def.rotate ? `rotate(${def.rotate}deg)` : undefined,
            animationDelay: def.delay ? `${def.delay}s` : undefined,
          }}
        />
      </motion.div>
    </motion.div>
  );
}

/**
 * Decorative scattered crystals/coins.
 * - Scroll parallax across the section.
 * - Optional faint mouse drift (hero only, pointer:fine).
 * - Honours prefers-reduced-motion (renders static).
 * - `hideMobile` items drop out below md.
 */
export default function Floaters({
  items,
  mouse = false,
}: {
  items: FloaterDef[];
  mouse?: boolean;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Mouse drift (hero). Springed for smoothness.
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mx = useSpring(rawX, { stiffness: 60, damping: 18 });
  const my = useSpring(rawY, { stiffness: 60, damping: 18 });
  const [fine, setFine] = useState(false);

  useEffect(() => {
    if (!mouse || reduce) return;
    if (!window.matchMedia("(pointer:fine)").matches) return;
    setFine(true);
    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX / window.innerWidth - 0.5);
      rawY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouse, reduce, rawX, rawY]);

  // Reduced motion: render static, positioned, no parallax/drift/float.
  if (reduce) {
    return (
      <div ref={ref} aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {items.map((def, i) => (
          <div
            key={i}
            className={`pointer-events-none absolute ${def.hideMobile ? "hidden md:block" : ""}`}
            style={def.pos}
          >
            <Image
              src={SRC[def.src]}
              alt=""
              width={def.size}
              height={def.size}
              loading="lazy"
              aria-hidden
              style={{
                width: def.size,
                height: "auto",
                opacity: def.opacity ?? 1,
                filter: def.blur ? `blur(${def.blur}px)` : undefined,
                transform: def.rotate ? `rotate(${def.rotate}deg)` : undefined,
              }}
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((def, i) => (
        <Floater key={i} def={def} scrollY={scrollYProgress} mx={fine ? mx : rawX} my={fine ? my : rawY} />
      ))}
    </div>
  );
}
