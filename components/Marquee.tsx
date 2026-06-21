"use client";

import { Fragment } from "react";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export default function Marquee() {
  const { t } = useLocale();
  const items = t.marquee;

  // Render twice for a seamless -50% translate loop (matches the prototype).
  const sequence = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-white/[0.07] bg-bg2 py-4">
      <div className="flex animate-marquee gap-[46px] whitespace-nowrap font-mono text-[13px] uppercase tracking-[0.16em] text-muted">
        {sequence.map((item, i) => {
          const bold = i % 5 === 0 || i % 5 === 2;
          return (
            <Fragment key={i}>
              <span>{bold ? <b className="text-orange">{item}</b> : item}</span>
              <span aria-hidden>•</span>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
