import type { Metadata } from "next";
import LegalLayout, { type LegalSection } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Risk Disclosure — CryptoCat",
  description: "Risk Disclosure for CryptoCat — The Game.",
};

const sections: LegalSection[] = [
  {
    heading: "1. Crypto Is Volatile and High-Risk",
    body: "Digital assets are highly volatile. Their price can rise or fall sharply and without warning. Participating in any crypto-related activity carries significant risk.",
  },
  {
    heading: "2. Tokens and Rewards May Have No Value",
    body: "Any token, gem, or reward associated with the Game may have little or no monetary value, and may never be tradable or redeemable.",
  },
  {
    heading: "3. Not Financial Advice",
    body: "Nothing in the Game or on this site is financial, investment, legal, or tax advice. Do your own research and consult a qualified professional before making decisions.",
  },
  {
    heading: "4. Airdrops Are Not Guaranteed",
    body: "Any airdrop, token generation event, or distribution is subject to change, delay, or cancellation. We make no guarantee that it will occur or that you will be eligible.",
  },
  {
    heading: "5. Only Risk What You Can Afford to Lose",
    body: "Never commit funds, assets, or effort that you cannot afford to lose entirely.",
  },
  {
    heading: "6. Regulation Varies by Region",
    body: "Laws governing crypto and games differ by jurisdiction and may change. It is your responsibility to ensure your participation is lawful where you live.",
  },
];

export default function RiskPage() {
  return (
    <LegalLayout
      title="Risk Disclosure"
      intro="Please read these risks carefully before playing or participating."
      sections={sections}
    />
  );
}
