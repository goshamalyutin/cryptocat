"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";
import Floaters from "@/components/ui/Floaters";
import { IconSend } from "@/components/ui/icons";
import { simone, CAT_IMG_HEIGHT } from "@/lib/cats";
import { heroFloaters } from "@/lib/decorations";
import { links } from "@/lib/content";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export default function Hero() {
  const { t } = useLocale();
  const reduce = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const catRef = useRef<HTMLDivElement>(null);

  // Mouse parallax on the cat — pointer:fine only, off under reduced motion.
  useEffect(() => {
    if (reduce) return;
    if (!window.matchMedia("(pointer:fine)").matches) return;
    const hero = heroRef.current;
    const cat = catRef.current;
    if (!hero || !cat) return;

    const onMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      cat.style.transform = `translate(${x * 26}px, ${y * 18}px)`;
    };
    const onLeave = () => {
      cat.style.transform = "";
    };

    hero.addEventListener("mousemove", onMove);
    hero.addEventListener("mouseleave", onLeave);
    return () => {
      hero.removeEventListener("mousemove", onMove);
      hero.removeEventListener("mouseleave", onLeave);
    };
  }, [reduce]);

  const s = t.hero.stats;

  return (
    <header
      ref={heroRef}
      className="relative isolate flex min-h-screen items-center overflow-hidden pt-[90px]"
    >
      {/* background photo */}
      <Image
        src="/assets/hero-bg.jpg"
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-center"
      />
      {/* legibility scrims (RULE #1) */}
      <div aria-hidden className="absolute inset-0 -z-10">
        {/* top: nav legibility */}
        <div className="absolute inset-x-0 top-0 h-[180px] bg-gradient-to-b from-bg/90 to-transparent" />
        {/* bottom: fade into the dark site bg, no hard seam */}
        <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-bg via-bg/70 to-transparent" />
        {/* left copy scrim — vertical & strong on mobile, horizontal on desktop */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,11,16,0.5),rgba(14,11,16,0.82))] md:bg-[linear-gradient(90deg,rgba(14,11,16,0.92),rgba(14,11,16,0.55)_38%,transparent_64%)]" />
        {/* dark radial behind where Simone stands (right column on desktop) */}
        <div
          className="absolute right-[2%] top-1/2 hidden h-[760px] w-[620px] -translate-y-1/2 md:block"
          style={{
            background:
              "radial-gradient(ellipse 50% 55% at 50% 46%, rgba(14,11,16,.85), rgba(14,11,16,.35) 55%, transparent 72%)",
          }}
        />
      </div>

      {/* floating crystals + coins (replaces emoji) */}
      <Floaters items={heroFloaters} mouse />

      <div className="wrap relative z-10 grid w-full grid-cols-1 items-center gap-0 md:grid-cols-[1.05fr_0.95fr] md:gap-[30px]">
        {/* copy */}
        <div className="order-2 text-center md:order-1 md:text-left">
          <span className="eyebrow">{t.hero.eyebrow}</span>
          <h1 className="my-[18px] font-display text-[clamp(40px,6vw,76px)] font-bold leading-[0.98] tracking-[-0.02em] [text-shadow:0_2px_24px_rgba(0,0,0,0.55)]">
            {t.hero.titleA} <span className="text-orange">{t.hero.titleHighlight}</span>
          </h1>
          <p className="mx-auto mb-[30px] max-w-[480px] text-[18px] text-[#e9dfe6] [text-shadow:0_1px_12px_rgba(0,0,0,0.6)] md:mx-0">
            {t.hero.lead}
          </p>
          <div className="mb-[38px] flex flex-wrap justify-center gap-[14px] md:justify-start">
            <Button href={links.playNow} variant="primary">
              {t.hero.playNow} <IconSend className="h-[18px] w-[18px]" />
            </Button>
            <Button href="#how" variant="ghost">
              {t.hero.howItWorks}
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-[22px] md:justify-start md:gap-[30px]">
            <Stat n={s.players.n} l={s.players.l} color="o" />
            <Stat n={s.solar.n} l={s.solar.l} color="g" />
            <Stat n={s.free.n} l={s.free.l} />
          </div>
        </div>

        {/* cat */}
        <div className="relative order-1 grid min-h-[380px] place-items-center md:order-2 md:min-h-[520px]">
          {/* dark radial scrim directly behind her silhouette */}
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 h-[480px] w-[440px] -translate-x-1/2 -translate-y-1/2 md:h-[620px] md:w-[560px]"
            style={{
              background:
                "radial-gradient(ellipse 46% 52% at 50% 48%, rgba(14,11,16,.8), rgba(14,11,16,.3) 58%, transparent 74%)",
            }}
          />
          {/* warm under-glow at her feet */}
          <div
            aria-hidden
            className="absolute bottom-[46px] h-[90px] w-[340px] blur-[8px]"
            style={{ background: "radial-gradient(ellipse, rgba(242,121,10,.5), transparent 70%)" }}
          />

          <div ref={catRef} className="relative z-[3] transition-transform duration-200 ease-out">
            <Image
              src={simone.image}
              alt="Simone the prospector cat"
              width={simone.width}
              height={CAT_IMG_HEIGHT}
              priority
              sizes="(max-width: 900px) 380px, 560px"
              className="animate-float h-[380px] w-auto will-change-transform md:h-[560px]"
              style={{ filter: "drop-shadow(0 36px 46px rgba(0,0,0,.75))" }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

function Stat({ n, l, color }: { n: string; l: string; color?: "o" | "g" }) {
  const colorClass = color === "g" ? "text-green" : color === "o" ? "text-gold" : "";
  return (
    <div>
      <div className={`font-display text-[26px] font-bold [text-shadow:0_1px_10px_rgba(0,0,0,0.6)] ${colorClass}`}>
        {n}
      </div>
      <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">{l}</div>
    </div>
  );
}
