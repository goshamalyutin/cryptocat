"use client";

import Reveal from "@/components/ui/Reveal";
import CaveTexture from "@/components/ui/CaveTexture";
import Floaters from "@/components/ui/Floaters";
import { stepIcons } from "@/components/ui/icons";
import { steps } from "@/lib/content";
import { howFloaters } from "@/lib/decorations";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export default function HowItWorks() {
  const { t } = useLocale();

  return (
    <section className="relative isolate overflow-hidden py-[110px]" id="how">
      <CaveTexture />
      <Floaters items={howFloaters} />
      <div className="wrap relative z-10">
        <Reveal className="mx-auto mb-[56px] max-w-[680px] text-center">
          <span className="eyebrow">{t.how.eyebrow}</span>
          <h2 className="my-[14px] font-display text-[clamp(30px,4.2vw,48px)] font-bold leading-[1.04] tracking-[-0.02em]">
            {t.how.title}
          </h2>
          <p className="text-[17px] text-muted">{t.how.lead}</p>
        </Reveal>

        <div className="grid grid-cols-1 gap-[22px] md:grid-cols-3">
          {steps.map((step, i) => {
            const copy = t.how.steps[step.id as keyof typeof t.how.steps];
            const Icon = stepIcons[step.id as keyof typeof stepIcons];
            return (
              <Reveal
                key={step.id}
                delay={(i % 3) * 0.07}
                className="group rounded-[22px] border border-panelb bg-panel p-[30px] pt-[34px] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange/40"
              >
                <div className="mb-[22px] grid h-[58px] w-[58px] place-items-center rounded-[16px] bg-orange/[0.12] text-orange">
                  <Icon className="h-7 w-7" />
                </div>
                <span className="font-mono text-xs tracking-[0.14em] text-orange">{step.num}</span>
                <h3 className="mb-[10px] mt-1.5 font-display text-[23px] font-semibold">{copy.title}</h3>
                <p className="text-[15px] text-muted">{copy.body}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
