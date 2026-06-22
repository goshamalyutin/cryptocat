"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import CaveTexture from "@/components/ui/CaveTexture";
import Floaters from "@/components/ui/Floaters";
import { cats, CAT_IMG_HEIGHT } from "@/lib/cats";
import { catsFloaters } from "@/lib/decorations";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export default function MeetTheCats() {
  const { t } = useLocale();

  return (
    <section className="relative isolate overflow-hidden bg-bg2 py-[110px]" id="cats">
      <CaveTexture />
      <Floaters items={catsFloaters} />
      <div className="wrap relative z-10">
        <Reveal className="mb-[40px] flex flex-wrap items-end justify-between gap-5">
          <div>
            <span className="eyebrow">{t.cats.eyebrow}</span>
            <h2 className="font-display text-[clamp(30px,4.2vw,48px)] font-bold leading-none tracking-[-0.02em]">
              {t.cats.title}
            </h2>
          </div>
          <p className="mt-3 max-w-[380px] text-muted">{t.cats.lead}</p>
        </Reveal>
      </div>

      {/* Full-bleed scroll area so cards can scroll past the wrap gutters */}
      <div className="wrap relative z-10">
        <div className="cat-scroll flex snap-x snap-mandatory gap-5 overflow-x-auto px-1 pb-[28px] pt-2.5">
          {cats.map((cat) => (
            <article
              key={cat.tier}
              className="group relative shrink-0 basis-[254px] snap-start overflow-hidden rounded-[24px] border border-panelb p-[18px] transition-all duration-300 hover:-translate-y-1.5 hover:border-orange/[0.45]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02))",
              }}
            >
              {/* hover glow */}
              <span
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-[30%] h-[200px] w-[200px] -translate-x-1/2 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: "radial-gradient(circle, rgba(242,121,10,.28), transparent 70%)",
                }}
              />
              <span className="absolute right-4 top-4 z-[3] rounded-full border border-panelb bg-black/35 px-[9px] py-1 font-mono text-[11px] text-muted">
                {cat.badge}
              </span>
              <div className="relative z-[2] grid h-[240px] place-items-end justify-center">
                <Image
                  src={cat.image}
                  alt={`Simone — ${cat.rank}`}
                  width={cat.width}
                  height={CAT_IMG_HEIGHT}
                  sizes="254px"
                  className="h-[236px] w-auto transition-transform duration-300 group-hover:scale-105"
                  style={{ filter: "drop-shadow(0 18px 22px rgba(0,0,0,.55))" }}
                />
              </div>
              <h4 className="font-display text-[21px] font-bold leading-tight">{cat.rank}</h4>
              <p className="mt-2 min-h-[38px] text-[13.5px] text-muted">{cat.lore}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
