"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { IconApple, IconGooglePlay, IconClose } from "@/components/ui/icons";
import { links } from "@/lib/content";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export default function DownloadFab() {
  const { t } = useLocale();
  const d = t.download;
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);

  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Esc to close, focus trap, body scroll-lock, restore focus on close.
  useEffect(() => {
    if (!open) return;
    const prevFocus = document.activeElement as HTMLElement | null;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key === "Tab" && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    // focus the close button once mounted
    const id = window.setTimeout(() => closeRef.current?.focus(), 0);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      window.clearTimeout(id);
      prevFocus?.focus();
    };
  }, [open]);

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
          {/* pulsing glow ring */}
          <span
            aria-hidden
            className="absolute inset-0 rounded-full animate-pulse-ring"
          />
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

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.2 }}
          >
            {/* backdrop */}
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-hidden
            />

            {/* dialog */}
            <motion.div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="download-heading"
              className="relative z-10 w-full max-w-[420px] overflow-hidden rounded-[28px] border border-panelb bg-bg2 p-8 text-center shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]"
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.92, y: 16 }}
              animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: reduce ? 0 : 0.24, ease: [0.2, 0.7, 0.2, 1] }}
            >
              {/* soft orange glow inside the modal */}
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-0 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/3 blur-[14px]"
                style={{ background: "radial-gradient(circle, rgba(242,121,10,0.28), transparent 65%)" }}
              />

              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(false)}
                aria-label={d.close}
                className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full border border-panelb bg-panel text-muted transition-colors hover:text-text"
              >
                <IconClose className="h-[18px] w-[18px]" />
              </button>

              <div className="relative z-10">
                <Image
                  src="/assets/logo.png"
                  alt="CryptoCat — The Game"
                  width={96}
                  height={96}
                  className="mx-auto h-[88px] w-[88px]"
                />
                <h3
                  id="download-heading"
                  className="mt-5 font-display text-[28px] font-bold tracking-[-0.01em]"
                >
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
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
