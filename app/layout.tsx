import type { Metadata } from "next";
import { Space_Grotesk, Inter, Space_Mono } from "next/font/google";
import { LocaleProvider } from "@/lib/i18n/LocaleProvider";
import DownloadFab from "@/components/DownloadFab";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CryptoCat — The Game",
  description:
    "A free Telegram play-to-earn game with 2,000,000+ players. Your cat digs caves for crypto treasure. Powered by Solarious ($SOLAR).",
  openGraph: {
    title: "CryptoCat — The Game",
    description: "Curiosity pays in coins. Play free on Telegram.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${spaceMono.variable}`}>
      <body>
        <LocaleProvider>
          {children}
          <DownloadFab />
        </LocaleProvider>
      </body>
    </html>
  );
}
