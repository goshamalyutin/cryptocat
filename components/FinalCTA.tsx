"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import Floaters from "@/components/ui/Floaters";
import { IconSend } from "@/components/ui/icons";
import { simone, CAT_IMG_HEIGHT } from "@/lib/cats";
import { sectionFloatersB } from "@/lib/decorations";
import { links } from "@/lib/content";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export default function FinalCTA() {
  const { t } = useLocale();

  return (
    <section className="relative isolate overflow-hidden px-0 pb-[130px] pt-[120px] text-center">
      {/* background photo */}
      <Image
        src="/assets/cta-bg.jpg"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        loading="lazy"
        className="-z-10 object-cover object-center"
      />
      {/* scrims: fade edges into bg + darken behind content (RULE #1) */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[40%] bg-gradient-to-b from-bg via-bg/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-bg via-bg/60 to-transparent" />
        {/* central dark scrim behind cat + headline + button */}
        <div
          className="absolute left-1/2 top-[52%] h-[760px] w-[760px] max-w-[120vw] -translate-x-1/2 -translate-y-1/2"
          style={{
            background:
              "radial-gradient(ellipse 44% 50% at 50% 50%, rgba(14,11,16,.82), rgba(14,11,16,.4) 56%, transparent 74%)",
          }}
        />
      </div>

      <Floaters items={sectionFloatersB} />

      <Image
        src={simone.image}
        alt="Simone the prospector cat"
        width={simone.width}
        height={CAT_IMG_HEIGHT}
        sizes="300px"
        loading="lazy"
        className="animate-float relative z-10 mx-auto mb-2 h-[300px] w-auto"
        style={{ filter: "drop-shadow(0 30px 38px rgba(0,0,0,.8))" }}
      />
      <h2 className="relative z-10 mb-6 font-display text-[clamp(34px,5vw,62px)] font-bold tracking-[-0.02em] [text-shadow:0_2px_24px_rgba(0,0,0,0.6)]">
        {t.final.title}
      </h2>
      <Button
        href={links.playNow}
        variant="primary"
        newTab
        className="relative z-10 !px-[38px] !py-[17px] !text-[17px]"
      >
        {t.final.playNow} <IconSend className="h-[18px] w-[18px]" />
      </Button>
    </section>
  );
}
