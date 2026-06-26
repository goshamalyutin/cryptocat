import type { Metadata } from "next";
import LegalLayout, { type LegalSection } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service — CryptoCat",
  description: "Terms of Service for CryptoCat — The Game.",
};

const sections: LegalSection[] = [
  {
    heading: "1. Acceptance of Terms",
    body: "By accessing or playing CryptoCat (the “Game”), you agree to these Terms of Service. If you do not agree, do not use the Game.",
  },
  {
    heading: "2. The Game",
    body: "CryptoCat is a free game provided for entertainment purposes. Playing the Game requires no purchase. Any in-game items, gems, or points have no inherent monetary value and exist solely within the Game.",
  },
  {
    heading: "3. No Financial Guarantee",
    body: "We make no promise or guarantee regarding the value of any token, the availability of any airdrop, or the amount of any reward. In-game progress does not entitle you to any specific payout, token, or sum of money.",
  },
  {
    heading: "4. Eligibility",
    body: "You must be of legal age in your jurisdiction to use the Game and to hold or receive any digital assets. By using the Game you represent that you meet this requirement.",
  },
  {
    heading: "5. Prohibited Use",
    body: "You agree not to cheat, exploit bugs, use bots or automation, manipulate rewards, reverse engineer the Game, or use it for any unlawful purpose. We may suspend or terminate access for violations.",
  },
  {
    heading: "6. Intellectual Property",
    body: "All Game content — including artwork, characters, logos, text, and code — is owned by the project or its licensors and may not be copied or reused without permission.",
  },
  {
    heading: "7. “As Is”",
    body: "The Game is provided “as is” and “as available,” without warranties of any kind, whether express or implied, including fitness for a particular purpose and uninterrupted availability.",
  },
  {
    heading: "8. Changes and Discontinuation",
    body: "We may modify, suspend, or discontinue any part of the Game at any time without notice. We may also update these Terms; continued use after changes constitutes acceptance.",
  },
  {
    heading: "9. Limitation of Liability",
    body: "To the maximum extent permitted by law, the project and its team shall not be liable for any indirect, incidental, or consequential damages, or for any loss of digital assets, arising from your use of the Game.",
  },
  {
    heading: "10. Governing Law",
    body: "These Terms are governed by the laws of [Jurisdiction TBD], without regard to conflict-of-laws principles.",
  },
];

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      intro="These terms govern your use of CryptoCat — The Game."
      sections={sections}
    />
  );
}
