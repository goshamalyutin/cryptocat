"use client";

import Reveal from "@/components/ui/Reveal";
import CaveTexture from "@/components/ui/CaveTexture";
import Floaters from "@/components/ui/Floaters";
import { roadmap } from "@/lib/content";
import { sectionFloatersA } from "@/lib/decorations";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export default function Roadmap() {
  const { t } = useLocale();

  return (
    <section className="relative isolate overflow-hidden bg-bg2 py-[110px]" id="road">
      <CaveTexture />
      <Floaters items={sectionFloatersA} />
      <div className="wrap relative z-10">
        <Reveal className="mx-auto mb-[56px] max-w-[680px] text-center">
          <span className="eyebrow">{t.roadmap.eyebrow}</span>
          <h2 className="my-[14px] font-display text-[clamp(30px,4.2vw,48px)] font-bold leading-[1.04] tracking-[-0.02em]">
            {t.roadmap.title}
          </h2>
        </Reveal>

        <div className="relative mx-auto max-w-[760px]">
          {/* timeline rail */}
          <span
            aria-hidden
            className="absolute bottom-2 left-[18px] top-2 w-0.5"
            style={{
              background: "linear-gradient(180deg, var(--orange), rgba(242,121,10,.1))",
            }}
          />
          {roadmap.map((item, i) => {
            const copy = t.roadmap.items[item.id as keyof typeof t.roadmap.items];
            return (
              <Reveal
                key={item.id}
                as="div"
                delay={(i % 3) * 0.07}
                className="relative pb-[34px] pl-[60px]"
              >
                <span
                  className={`absolute left-[9px] top-1 grid h-5 w-5 place-items-center rounded-full border-2 border-orange ${
                    item.done ? "bg-orange" : "bg-bg"
                  }`}
                >
                  <i
                    className={`h-[7px] w-[7px] rounded-full ${item.done ? "bg-[#1a0e02]" : "bg-orange"}`}
                  />
                </span>
                <span className="font-mono text-xs tracking-[0.1em] text-gold">{copy.when}</span>
                <h4 className="mb-[5px] mt-[3px] font-display text-[20px] font-semibold">{copy.title}</h4>
                <p className="text-[14.5px] text-muted">{copy.body}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
