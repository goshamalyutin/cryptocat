"use client";

import Reveal from "@/components/ui/Reveal";
import CaveTexture from "@/components/ui/CaveTexture";
import { pills } from "@/lib/content";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export default function Solarious() {
  const { t } = useLocale();

  return (
    <section
      className="relative isolate overflow-hidden border-y border-white/[0.06] py-[110px]"
      id="solar"
      style={{ background: "linear-gradient(180deg, var(--bg2), var(--bg))" }}
    >
      <CaveTexture opacity="opacity-[0.1]" />
      <div className="wrap relative z-10">
        <Reveal className="mx-auto max-w-[680px] text-center">
          <span className="eyebrow">{t.solar.eyebrow}</span>
          <h2 className="my-[16px] font-display text-[clamp(28px,3.6vw,42px)] font-bold tracking-[-0.02em]">
            {t.solar.title}
          </h2>
          <p className="mb-[30px] text-[17px] text-muted">{t.solar.lead}</p>
          <div className="flex flex-wrap justify-center gap-[14px]">
            {pills.map((pill) => (
              <div
                key={pill.id}
                className="flex items-center gap-[9px] rounded-full border border-panelb bg-panel px-6 py-3 font-display text-[15px] font-semibold"
              >
                <span className="h-[9px] w-[9px] rounded-full" style={{ background: pill.color }} />
                {t.solar.pills[pill.id as keyof typeof t.solar.pills]}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
