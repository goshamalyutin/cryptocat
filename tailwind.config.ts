import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ported 1:1 from the prototype design tokens
        bg: "#0E0B10",
        bg2: "#150C18",
        orange: "#F2790A",
        gold: "#FFB23E",
        green: "#2FD27A",
        cream: "#F7ECD8",
        text: "#EDE6E0",
        muted: "#998E97",
        // translucent surfaces (--panel / --panelb)
        panel: "rgba(255,255,255,0.045)",
        panelb: "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        // wired to next/font CSS variables in app/layout.tsx
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        wrap: "1200px",
      },
      letterSpacing: {
        eyebrow: "0.18em",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-16px)" },
        },
        bob: {
          "0%,100%": { transform: "translateY(0) rotate(-4deg)" },
          "50%": { transform: "translateY(-14px) rotate(4deg)" },
        },
        marquee: {
          to: { transform: "translateX(-50%)" },
        },
        floatSm: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        pulseRing: {
          "0%": { boxShadow: "0 0 0 0 rgba(242,121,10,0.5)" },
          "70%": { boxShadow: "0 0 0 14px rgba(242,121,10,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(242,121,10,0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        bob: "bob 5s ease-in-out infinite",
        "bob-slow": "bob 6s ease-in-out infinite",
        marquee: "marquee 22s linear infinite",
        "float-sm": "floatSm 4s ease-in-out infinite",
        "pulse-ring": "pulseRing 2.4s ease-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
