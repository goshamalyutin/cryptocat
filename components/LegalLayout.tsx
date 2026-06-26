import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export type LegalSection = { heading: string; body: string | string[] };

/** Shared dark, readable layout for the /terms, /privacy, /risk pages. */
export default function LegalLayout({
  title,
  intro,
  sections,
}: {
  title: string;
  intro?: string;
  sections: LegalSection[];
}) {
  return (
    <main className="mx-auto w-full max-w-[760px] px-7 py-[72px]">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-text"
      >
        <ArrowLeft className="h-4 w-4" strokeWidth={1.8} />
        Back to home
      </Link>

      <div className="mt-8 flex items-center gap-3">
        <Image src="/assets/logo.png" alt="CryptoCat — The Game" width={44} height={44} className="h-11 w-11" />
        <h1 className="font-display text-[clamp(30px,5vw,44px)] font-bold tracking-[-0.02em]">{title}</h1>
      </div>

      {/* placeholder notice */}
      <p className="mt-6 rounded-2xl border border-orange/25 bg-orange/[0.07] px-5 py-3.5 font-mono text-[12.5px] leading-relaxed text-gold">
        Placeholder content, not legal advice — to be reviewed before launch.
      </p>

      {intro && <p className="mt-7 text-[15.5px] leading-relaxed text-[#d8cfd4]">{intro}</p>}

      <div className="mt-8 space-y-8">
        {sections.map((s) => {
          const paragraphs = Array.isArray(s.body) ? s.body : [s.body];
          return (
            <section key={s.heading}>
              <h2 className="font-display text-[20px] font-semibold text-text">{s.heading}</h2>
              {paragraphs.map((p, i) => (
                <p key={i} className="mt-3 text-[15px] leading-relaxed text-muted">
                  {p}
                </p>
              ))}
            </section>
          );
        })}
      </div>

      <div className="mt-14 border-t border-white/[0.07] pt-7">
        <Link href="/" className="text-sm text-orange transition-colors hover:text-gold">
          ← Back to home
        </Link>
      </div>
    </main>
  );
}
