import type { Metadata } from "next";
import LegalLayout, { type LegalSection } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — CryptoCat",
  description: "Privacy Policy for CryptoCat — The Game.",
};

const sections: LegalSection[] = [
  {
    heading: "1. Information We Collect",
    body: "We may collect: your Telegram handle and user ID, your wallet address (if you connect one), and basic analytics such as device type, session activity, and in-game actions.",
  },
  {
    heading: "2. How We Use It",
    body: "We use this information to run the Game, distribute rewards and any airdrop, prevent abuse, and improve the product. We do not use it for unrelated purposes.",
  },
  {
    heading: "3. We Do Not Sell Your Data",
    body: "We do not sell your personal information to third parties.",
  },
  {
    heading: "4. Third Parties",
    body: "The Game relies on third-party services including Telegram (account and messaging), analytics providers, and public blockchains. Information recorded on a public blockchain (such as a wallet address) is permanent and visible to anyone.",
  },
  {
    heading: "5. Data Retention",
    body: "We keep personal data only as long as needed to operate the Game, meet legal obligations, and resolve disputes, after which it is deleted or anonymized.",
  },
  {
    heading: "6. Your Rights",
    body: "Depending on your region, you may have the right to access, correct, or delete your personal data, or to object to certain processing. Contact us to exercise these rights.",
  },
  {
    heading: "7. Contact",
    body: "For privacy questions or requests, contact us at [email TBD].",
  },
];

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      intro="This policy explains what we collect and how we use it."
      sections={sections}
    />
  );
}
