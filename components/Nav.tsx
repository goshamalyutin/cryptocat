"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks, socials, links } from "@/lib/content";
import { socialIcons } from "@/components/ui/icons";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { useSolarModal } from "@/components/SolarModalProvider";

export default function Nav() {
  const { t } = useLocale();
  const { open: openSolar } = useSolarModal();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.06] bg-[rgba(14,11,16,0.78)] backdrop-blur-[14px]"
          : "border-b border-transparent"
      }`}
    >
      <div className="wrap flex h-[74px] items-center justify-between">
        <Link href="#" aria-label="CryptoCat — home" className="flex items-center">
          <Image
            src="/assets/logo.png"
            alt="CryptoCat — The Game"
            width={38}
            height={38}
            priority
            className="h-[38px] w-[38px]"
          />
        </Link>

        <div className="hidden items-center gap-[34px] text-sm font-medium md:flex">
          {navLinks.map((l) => (
            <Link key={l.id} href={l.href} className="text-muted transition-colors duration-200 hover:text-text">
              {t.nav[l.key]}
            </Link>
          ))}
          <button
            type="button"
            onClick={openSolar}
            aria-haspopup="dialog"
            className="font-medium text-muted transition-colors duration-200 hover:text-text"
          >
            {t.nav.solar}
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden gap-3 md:flex">
            {socials.map((s) => {
              const Icon = socialIcons[s.id as keyof typeof socialIcons];
              return (
                <Link
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-panelb bg-panel text-muted transition-colors duration-200 hover:border-white/20 hover:text-text"
                >
                  <Icon className="h-[15px] w-[15px]" />
                </Link>
              );
            })}
          </div>

          <Link
            href={links.playNow}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            {t.nav.playNow}
          </Link>
        </div>
      </div>
    </nav>
  );
}
