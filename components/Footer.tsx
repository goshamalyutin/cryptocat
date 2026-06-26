"use client";

import Link from "next/link";
import Image from "next/image";
import { footerColumns, legalLinks } from "@/lib/content";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { useSolarModal } from "@/components/SolarModalProvider";

export default function Footer() {
  const { t } = useLocale();
  const { open: openSolar } = useSolarModal();
  const items = t.footer.items;
  const columns = t.footer.columns;

  const linkClass =
    "mb-2.5 block text-left text-[14.5px] text-[#bdb2ba] transition-colors duration-200 hover:text-orange";

  return (
    <footer className="border-t border-white/[0.07] pb-[34px] pt-[60px]">
      <div className="wrap">
        <div className="mb-[40px] grid grid-cols-2 gap-[30px] md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <Link href="#" aria-label="CryptoCat — home" className="inline-flex">
              <Image
                src="/assets/logo.png"
                alt="CryptoCat — The Game"
                width={56}
                height={56}
                loading="lazy"
                className="h-[56px] w-[56px]"
              />
            </Link>
            <p className="mt-3.5 max-w-[240px] text-sm text-muted">{t.footer.tagline}</p>
          </div>

          {footerColumns.map((col) => (
            <div key={col.id}>
              <h5 className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                {columns[col.id as keyof typeof columns]}
              </h5>
              {col.links.map((l) => {
                const label = items[l.id as keyof typeof items];
                if (l.kind === "solar") {
                  return (
                    <button key={l.id} type="button" onClick={openSolar} aria-haspopup="dialog" className={linkClass}>
                      {label}
                    </button>
                  );
                }
                if (l.kind === "external") {
                  return (
                    <Link
                      key={l.id}
                      href={l.href ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClass}
                    >
                      {label}
                    </Link>
                  );
                }
                // anchor (smooth-scroll) or internal route
                return (
                  <Link key={l.id} href={l.href ?? "#"} className={linkClass}>
                    {label}
                  </Link>
                );
              })}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-between gap-2.5 border-t border-white/[0.06] pt-[22px] text-[13px] text-muted">
          <span>{t.footer.copyright}</span>
          <span>
            {legalLinks.map((l) => (
              <Link key={l.id} href={l.href} className="ml-[18px]">
                {t.footer.legal[l.id as keyof typeof t.footer.legal]}
              </Link>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}
