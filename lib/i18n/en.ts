/**
 * English dictionary. This is the canonical key set — ru.ts must mirror it.
 * Cat names/lore are NOT here; they live in lib/cats.ts.
 */
const en = {
  nav: {
    about: "About",
    cats: "Meet the Cats",
    roadmap: "Roadmap",
    solar: "$SOLAR",
    playNow: "Play Now",
  },
  hero: {
    eyebrow: "2,000,000+ players already digging",
    titleA: "Earn With",
    titleHighlight: "Crypto Cats",
    lead: "While other cats nap, your cat digs the hills and caves for hidden crypto treasure. The more you learn about blockchain, the more gems you earn.",
    playNow: "Play Now",
    howItWorks: "How it works",
    stats: {
      players: { n: "2M+", l: "Players" },
      solar: { n: "$SOLAR", l: "Powered by Solarious" },
      free: { n: "Free", l: "Play on Telegram" },
    },
  },
  marquee: [
    "2,000,000+ PLAYERS",
    "POWERED BY SOLARIOUS",
    "$SOLAR AIRDROP",
    "CURIOSITY PAYS IN COINS",
    "PLAY ON TELEGRAM",
  ],
  how: {
    eyebrow: "How it works",
    title: "A game that pays you to get curious",
    lead: "CryptoCat is a free Telegram game. Send your cat to dig, answer questions about blockchain, and turn curiosity into real crypto. No experience needed — just tap and learn.",
    steps: {
      dig: { title: "Dig", body: "Your cat mines the caves around the clock — even while you sleep." },
      learn: {
        title: "Learn",
        body: "Answer questions about blockchain and Solarious to unlock bigger rewards.",
      },
      earn: { title: "Earn", body: "Collect gems and coins that convert to $SOLAR at the airdrop." },
    },
  },
  cats: {
    eyebrow: "Meet the cats",
    title: "From rookie to legend",
    lead: "Every cat starts with a single pickaxe. Upgrade your gear, dig deeper, and evolve into a full-blown treasure hunter.",
  },
  preview: {
    eyebrow: "The game",
    title: "Tap. Dig. Repeat.",
    lead: "Simple to start, hard to put down. Daily upgrades, special cards, and rewards that grow the deeper you go.",
    features: [
      "Idle mining — earn while you're away",
      "Upgrade cards to boost your haul",
      "Daily streaks & referral bonuses",
      "Gems convert to $SOLAR at the airdrop",
    ],
    phone: {
      profile: "My Profile",
      upgrades: "⚙ Upgrades",
      balance: "15,000,000",
      balanceLabel: "GEMS MINED",
      cta: "⛏️ Keep Digging",
    },
  },
  roadmap: {
    eyebrow: "Roadmap",
    title: "The road to the airdrop",
    items: {
      live: { when: "LIVE NOW", title: "Game Live", body: "2,000,000+ players onboarded. Referral system running." },
      v2: { when: "SOON", title: "CryptoCat V2", body: "Learn-to-earn education platform, coming to the App Store." },
      tge: { when: "JUNE 2026", title: "TGE — Token Generation", body: "$SOLAR token generation event goes live." },
      airdrop: { when: "JULY 2026", title: "Airdrop", body: "Rewards distributed to Verdex Wallet holders." },
      beyond: { when: "BEYOND", title: "New Worlds", body: "New game modes and deeper Solarious ecosystem integration." },
    },
  },
  solar: {
    eyebrow: "Powered by Solarious",
    title: "Backed by a real blockchain",
    lead: "CryptoCat runs on Solarious — a Layer-1 where $SOLAR is minted from verified solar energy. Your in-game gems become real tokens you claim in Verdex Wallet.",
    pills: {
      solarious: "Solarious",
      solar: "$SOLAR",
      verdex: "Verdex Wallet",
    },
  },
  final: {
    title: "Your cat is waiting",
    playNow: "Play Now",
  },
  download: {
    fabLabel: "Download the app",
    heading: "Now on mobile",
    text: "The popular Telegram game is now available as a mobile app. Download it on your platform:",
    appStore: "App Store",
    googlePlay: "Google Play",
    close: "Close",
  },
  footer: {
    tagline: "Curiosity pays in coins.",
    columns: {
      game: "Game",
      token: "Token",
      community: "Community",
    },
    items: {
      about: "About",
      cats: "Meet the Cats",
      roadmap: "Roadmap",
      news: "News",
      solar: "$SOLAR",
      airdrop: "Airdrop",
      verdex: "Verdex Wallet",
      x: "X / Twitter",
      telegram: "Telegram",
      discord: "Discord",
    },
    copyright: "© 2026 CryptoCat — The Game",
    legal: {
      terms: "Terms",
      privacy: "Privacy",
      risk: "Risk Disclosure",
    },
  },
} as const;

export type Dictionary = typeof en;
export default en;
