"use client";

import Image from "next/image";
import { Sun, Gem, Wallet, ArrowRight, type LucideIcon } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import CaveTexture from "@/components/ui/CaveTexture";
import Floaters from "@/components/ui/Floaters";
import { sectionFloatersA } from "@/lib/decorations";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export default function Solarious() {
  const { t } = useLocale();
  const s = t.solar;

  const cards: { id: keyof typeof s.cards; Icon: LucideIcon }[] = [
    { id: "solarious", Icon: Sun },
    { id: "solar", Icon: Gem },
    { id: "verdex", Icon: Wallet },
  ];

  return (
    <section
      className="relative isolate overflow-hidden border-y border-white/[0.06] py-[110px]"
      id="solar"
      style={{ background: "linear-gradient(180deg, var(--bg2), var(--bg))" }}
    >
      <CaveTexture opacity="opacity-[0.1]" />
      <Floaters items={sectionFloatersA} />

      {/* warm radial glow behind the headline */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[12%] z-0 h-[460px] w-[760px] max-w-[110vw] -translate-x-1/2 blur-[16px]"
        style={{ background: "radial-gradient(ellipse, rgba(242,121,10,0.18), transparent 65%)" }}
      />

      <div className="wrap relative z-10">
        {/* heading */}
        <Reveal className="mx-auto max-w-[680px] text-center">
          <span className="eyebrow">{s.eyebrow}</span>
          <h2 className="my-[16px] font-display text-[clamp(28px,3.6vw,42px)] font-bold tracking-[-0.02em] [text-shadow:0_2px_20px_rgba(0,0,0,0.5)]">
            {s.title}
          </h2>
          <p className="text-[17px] text-muted">{s.lead}</p>

          {/* credibility metric chips */}
          <ul className="mt-7 flex flex-wrap justify-center gap-2.5">
            {s.chips.map((chip) => (
              <li
                key={chip}
                className="rounded-full border border-orange/25 bg-orange/[0.07] px-3.5 py-1.5 font-mono text-[12px] tracking-[0.04em] text-gold"
              >
                {chip}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* three glass cards */}
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {cards.map(({ id, Icon }, i) => {
            const c = s.cards[id];
            return (
              <Reveal
                key={id}
                delay={(i % 3) * 0.07}
                className="group rounded-[22px] border border-panelb bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-7 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange/45 hover:shadow-[0_18px_50px_-18px_rgba(242,121,10,0.5)]"
              >
                <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl border border-orange/20 bg-orange/[0.12] text-orange transition-colors duration-300 group-hover:text-gold">
                  <Icon className="h-7 w-7" strokeWidth={1.7} aria-hidden />
                </div>
                <h3 className="font-display text-[21px] font-bold">{c.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{c.desc}</p>
              </Reveal>
            );
          })}
        </div>

        {/* value-flow visual: gem -> arrow -> token */}
        <Reveal className="mt-16 flex flex-col items-center">
          <div className="flex items-center justify-center gap-5 sm:gap-9">
            <FlowNode src="/assets/crystal.png" label={s.flow.gem} anim="animate-float" />

            <div
              aria-hidden
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-orange/40 bg-orange/[0.1] text-orange shadow-[0_0_22px_-2px_rgba(242,121,10,0.6)]"
            >
              <ArrowRight className="h-5 w-5" strokeWidth={2} />
            </div>

            <FlowNode src="/assets/coin.png" label={s.flow.token} anim="animate-bob-slow" />
          </div>
          <p className="mt-6 font-mono text-[13px] tracking-[0.04em] text-cream/80">
            {s.flow.caption}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function FlowNode({ src, label, anim }: { src: string; label: string; anim: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="grid h-[92px] w-[92px] place-items-center rounded-full border border-panelb bg-white/[0.03] sm:h-[108px] sm:w-[108px]">
        <Image
          src={src}
          alt=""
          aria-hidden
          width={108}
          height={108}
          loading="lazy"
          className={`h-[64px] w-auto sm:h-[76px] ${anim}`}
        />
      </div>
      <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">{label}</span>
    </div>
  );
}
