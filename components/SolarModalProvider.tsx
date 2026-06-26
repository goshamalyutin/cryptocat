"use client";

import { createContext, useCallback, useContext, useState } from "react";
import Link from "next/link";
import Modal from "@/components/ui/Modal";
import { IconSend } from "@/components/ui/icons";
import { links } from "@/lib/content";
import { useLocale } from "@/lib/i18n/LocaleProvider";

type SolarModalContextValue = { open: () => void };

const SolarModalContext = createContext<SolarModalContextValue | null>(null);

export function SolarModalProvider({ children }: { children: React.ReactNode }) {
  const { t } = useLocale();
  const m = t.solarModal;
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <SolarModalContext.Provider value={{ open }}>
      {children}
      <Modal open={isOpen} onClose={close} labelledById="solar-heading" closeLabel={m.close}>
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-orange/25 bg-orange/[0.12] font-display text-[22px] font-bold text-gold">
          $
        </div>
        <h3 id="solar-heading" className="mt-5 font-display text-[28px] font-bold tracking-[-0.01em]">
          {m.heading}
        </h3>
        <p className="mx-auto mt-3 max-w-[340px] text-[15px] leading-relaxed text-muted">{m.text}</p>
        <div className="mt-7">
          <Link
            href={links.solarious}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary w-full justify-center"
          >
            {m.cta}
            <IconSend className="h-[18px] w-[18px]" />
          </Link>
        </div>
      </Modal>
    </SolarModalContext.Provider>
  );
}

export function useSolarModal(): SolarModalContextValue {
  const ctx = useContext(SolarModalContext);
  if (!ctx) throw new Error("useSolarModal must be used within a SolarModalProvider");
  return ctx;
}
