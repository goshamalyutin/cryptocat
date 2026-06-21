"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks, socials, links } from "@/lib/content";
import { socialIcons } from "@/components/ui/icons";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { localeNames } from "@/lib/i18n/config";

export default function Nav() {
  const { t, locale, toggleLocale } = useLocale();
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

        <div className="hidden gap-[34px] text-sm font-medium md:flex">
          {navLinks.map((l) => (
            <Link key={l.id} href={l.href} className="text-muted transition-colors duration-200 hover:text-text">
              {t.nav[l.key]}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden gap-3 md:flex">
            {socials.map((s) => {
              const Icon = socialIcons[s.id as keyof typeof socialIcons];
              return (
                <Link
                  key={s.id}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-panelb bg-panel text-muted transition-colors duration-200 hover:border-white/20 hover:text-text"
                >
                  <Icon className="h-[15px] w-[15px]" />
                </Link>
              );
            })}
          </div>

          <button
            type="button"
            onClick={toggleLocale}
            aria-label="Switch language"
            className="cursor-pointer rounded-lg border border-panelb px-2.5 py-1.5 font-mono text-xs text-muted transition-colors hover:text-text"
          >
            {localeNames[locale]}
          </button>

          <Link href={links.playNow} className="btn btn-primary">
            {t.nav.playNow}
          </Link>
        </div>
      </div>
    </nav>
  );
}
