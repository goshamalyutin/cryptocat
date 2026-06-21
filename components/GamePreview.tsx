"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Floaters from "@/components/ui/Floaters";
import { previewFloaters } from "@/lib/decorations";
import { useLocale } from "@/lib/i18n/LocaleProvider";

// game-preview.png intrinsic size (full phone mockup incl. frame).
const PREVIEW_W = 941;
const PREVIEW_H = 1672;

export default function GamePreview() {
  const { t } = useLocale();
  const p = t.preview;

  return (
    <section className="relative isolate overflow-hidden py-[110px]">
      {/* ===== background stack (all behind content at z-10) ===== */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        {/* 1. warm-dark base gradient — adds depth even where the photo is black */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 95% at 72% 50%, #1d1118 0%, #140d12 42%, #0E0B10 72%)",
          }}
        />
        {/* 2. cave-texture photo — plain opacity (overlay blend is invisible over near-black) */}
        <Image
          src="/assets/cave-texture.jpg"
          alt=""
          fill
          sizes="100vw"
          loading="lazy"
          className="object-cover opacity-[0.22]"
        />
        {/* 3. defined warm orange glow centred behind the phone */}
        <div
          className="absolute left-1/2 top-1/2 h-[680px] w-[680px] max-w-[120vw] -translate-x-1/2 -translate-y-1/2 blur-[10px] md:left-[72%] md:h-[820px] md:w-[820px]"
          style={{
            background:
              "radial-gradient(circle, rgba(242,121,10,0.34) 0%, rgba(242,121,10,0.12) 38%, transparent 66%)",
          }}
        />
      </div>

      {/* floating crystals + coins around the phone */}
      <Floaters items={previewFloaters} />

      <div className="wrap relative z-10 grid grid-cols-1 items-center gap-[40px] md:grid-cols-2 md:gap-[50px]">
        <Reveal>
          <span className="eyebrow">{p.eyebrow}</span>
          <h2 className="mb-[18px] mt-[14px] font-display text-[clamp(30px,4vw,46px)] font-bold tracking-[-0.02em]">
            {p.title}
          </h2>
          <p className="mx-auto mb-[26px] max-w-[420px] text-[17px] text-muted md:mx-0">{p.lead}</p>
          <ul className="flex flex-col items-center gap-3 md:items-start">
            {p.features.map((f) => (
              <li key={f} className="flex items-center gap-[11px] text-[15px] text-[#cabfc6]">
                <span aria-hidden className="text-[12px] text-green">
                  ◆
                </span>
                {f}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* phone mockup image (frame included) */}
        <Reveal className="relative flex justify-center">
          <Image
            src="/assets/game-preview.png"
            alt="CryptoCat gameplay on a phone"
            width={PREVIEW_W}
            height={PREVIEW_H}
            sizes="(max-width: 768px) 280px, 320px"
            loading="lazy"
            className="animate-float relative z-10 h-[560px] w-auto md:h-[620px]"
            style={{ filter: "drop-shadow(0 40px 60px rgba(0,0,0,.6))" }}
          />
        </Reveal>
      </div>
    </section>
  );
}
