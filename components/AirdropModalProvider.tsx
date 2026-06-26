"use client";

import { createContext, useCallback, useContext, useState } from "react";
import Link from "next/link";
import { Gift } from "lucide-react";
import Modal from "@/components/ui/Modal";
import { IconSend } from "@/components/ui/icons";
import { links } from "@/lib/content";
import { useLocale } from "@/lib/i18n/LocaleProvider";

type AirdropModalContextValue = { open: () => void };

const AirdropModalContext = createContext<AirdropModalContextValue | null>(null);

export function AirdropModalProvider({ children }: { children: React.ReactNode }) {
  const { t } = useLocale();
  const m = t.airdropModal;
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <AirdropModalContext.Provider value={{ open }}>
      {children}
      <Modal open={isOpen} onClose={close} labelledById="airdrop-heading" closeLabel={m.close}>
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-orange/25 bg-orange/[0.12] text-gold">
          <Gift className="h-8 w-8" strokeWidth={1.7} aria-hidden />
        </div>
        <h3 id="airdrop-heading" className="mt-5 font-display text-[28px] font-bold tracking-[-0.01em]">
          {m.heading}
        </h3>
        <p className="mx-auto mt-3 max-w-[340px] text-[15px] leading-relaxed text-muted">{m.text}</p>
        <div className="mt-7 flex flex-col gap-3">
          <Link
            href={links.playNow}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary w-full justify-center"
          >
            {m.playEarn}
            <IconSend className="h-[18px] w-[18px]" />
          </Link>
          <Link
            href={links.verdex}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost w-full justify-center"
          >
            {m.getVerdex}
          </Link>
        </div>
      </Modal>
    </AirdropModalContext.Provider>
  );
}

export function useAirdropModal(): AirdropModalContextValue {
  const ctx = useContext(AirdropModalContext);
  if (!ctx) throw new Error("useAirdropModal must be used within an AirdropModalProvider");
  return ctx;
}
