"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Modal from "@/components/ui/Modal";
import { IconApple, IconGooglePlay } from "@/components/ui/icons";
import { links } from "@/lib/content";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export default function DownloadFab() {
  const { t } = useLocale();
  const d = t.download;
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating button */}
      <div
        className="fixed z-[60] animate-float-sm"
        style={{
          right: "calc(1.25rem + env(safe-area-inset-right))",
          bottom: "calc(1.25rem + env(safe-area-inset-bottom))",
        }}
      >
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={d.fabLabel}
          aria-haspopup="dialog"
          className="group relative grid h-14 w-14 place-items-center rounded-full border border-orange/40 bg-bg2 shadow-[0_0_24px_rgba(242,121,10,0.5)] transition-transform duration-200 hover:scale-110 active:scale-95 md:h-16 md:w-16"
        >
          <span aria-hidden className="absolute inset-0 rounded-full animate-pulse-ring" />
          <Image
            src="/assets/logo.png"
            alt=""
            aria-hidden
            width={64}
            height={64}
            className="h-[46px] w-[46px] rounded-full md:h-[54px] md:w-[54px]"
          />
        </button>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} labelledById="download-heading" closeLabel={d.close}>
        <Image
          src="/assets/logo.png"
          alt="CryptoCat — The Game"
          width={96}
          height={96}
          className="mx-auto h-[88px] w-[88px]"
        />
        <h3 id="download-heading" className="mt-5 font-display text-[28px] font-bold tracking-[-0.01em]">
          {d.heading}
        </h3>
        <p className="mx-auto mt-3 max-w-[320px] text-[15px] text-muted">{d.text}</p>

        <div className="mt-7 flex flex-col gap-3">
          <Link
            href={links.appStore}
            className="flex items-center justify-center gap-3 rounded-2xl border border-panelb bg-panel px-5 py-3.5 font-display font-semibold transition-colors hover:border-orange/50 hover:bg-white/[0.06]"
          >
            <IconApple className="h-6 w-6" />
            {d.appStore}
          </Link>
          <Link
            href={links.googlePlay}
            className="flex items-center justify-center gap-3 rounded-2xl border border-panelb bg-panel px-5 py-3.5 font-display font-semibold transition-colors hover:border-orange/50 hover:bg-white/[0.06]"
          >
            <IconGooglePlay className="h-6 w-6 text-green" />
            {d.googlePlay}
          </Link>
        </div>
      </Modal>
    </>
  );
}
