"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { IconClose } from "@/components/ui/icons";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  /** id of the heading element inside `children` for aria-labelledby */
  labelledById: string;
  closeLabel?: string;
  children: React.ReactNode;
};

/**
 * Reusable centered modal: dark backdrop, Esc / click-outside / ✕ to close,
 * Framer Motion in/out, focus trap, body scroll-lock, focus restore.
 * Respects prefers-reduced-motion.
 */
export default function Modal({ open, onClose, labelledById, closeLabel = "Close", children }: ModalProps) {
  const reduce = useReducedMotion();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const prevFocus = document.activeElement as HTMLElement | null;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
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
    const id = window.setTimeout(() => closeRef.current?.focus(), 0);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      window.clearTimeout(id);
      prevFocus?.focus();
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0 : 0.2 }}
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={labelledById}
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
              onClick={onClose}
              aria-label={closeLabel}
              className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full border border-panelb bg-panel text-muted transition-colors hover:text-text"
            >
              <IconClose className="h-[18px] w-[18px]" />
            </button>
            <div className="relative z-10">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
