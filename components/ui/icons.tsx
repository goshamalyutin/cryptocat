import type { SVGProps } from "react";

/**
 * Inline line icons (no emoji anywhere on the site).
 * All inherit `currentColor` and a 1.7 stroke for a clean, consistent look.
 */

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* ---- How it works step icons ---- */

export function IconPickaxe(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 20.5 13 10.5" />
      <path d="M4 9c4-3.2 8-3.2 11.5-1.2" />
      <path d="M20 13C16.5 9.5 12.5 5.5 9 1.5" opacity="0" />
      <path d="M20.5 12.5C17 9 13.8 6.2 9.2 4.8" />
      <path d="M12 9.5l3 3" />
    </svg>
  );
}

export function IconBook(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 6.5C10.5 5.3 8.4 4.8 4.5 5v12c3.9-.2 6 .3 7.5 1.5 1.5-1.2 3.6-1.7 7.5-1.5V5c-3.9-.2-6 .3-7.5 1.5Z" />
      <path d="M12 6.5v12" />
    </svg>
  );
}

export function IconGem(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 3h12l3 5-9 13L3 8l3-5Z" />
      <path d="M3 8h18" />
      <path d="m9 3-1.5 5L12 21l4.5-13L15 3" />
    </svg>
  );
}

export const stepIcons = {
  dig: IconPickaxe,
  learn: IconBook,
  earn: IconGem,
} as const;

/* ---- Social icons ---- */

export function IconX(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

export function IconTelegram(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.94 4.5 18.6 20c-.24 1.1-.9 1.37-1.83.85l-5.05-3.72-2.44 2.35c-.27.27-.5.5-1.02.5l.36-5.16 9.4-8.5c.41-.36-.09-.56-.63-.2L5.16 13.1.16 11.54c-1.08-.34-1.1-1.08.23-1.6L20.54 2.9c.9-.33 1.69.2 1.4 1.6Z" />
    </svg>
  );
}

export function IconDiscord(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.317 4.369A19.79 19.79 0 0 0 15.432 3c-.21.375-.456.88-.625 1.28a18.27 18.27 0 0 0-5.614 0A12.6 12.6 0 0 0 8.56 3a19.74 19.74 0 0 0-4.886 1.37C.533 8.99-.32 13.5.099 17.94a19.9 19.9 0 0 0 6.073 3.06c.49-.668.927-1.377 1.304-2.123-.717-.27-1.404-.602-2.053-.99.172-.126.34-.258.502-.39a14.2 14.2 0 0 0 12.15 0c.164.135.332.267.502.39-.65.39-1.34.722-2.057.992.377.745.812 1.454 1.303 2.122a19.84 19.84 0 0 0 6.075-3.06c.491-5.148-.838-9.617-3.585-13.572ZM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.42 0-1.333.955-2.42 2.157-2.42 1.21 0 2.176 1.095 2.157 2.42 0 1.335-.955 2.42-2.157 2.42Zm7.96 0c-1.183 0-2.157-1.085-2.157-2.42 0-1.333.955-2.42 2.157-2.42 1.21 0 2.176 1.095 2.157 2.42 0 1.335-.946 2.42-2.157 2.42Z" />
    </svg>
  );
}

export const socialIcons = {
  x: IconX,
  telegram: IconTelegram,
  discord: IconDiscord,
} as const;

/* ---- Misc ---- */

/** Paper-plane / send glyph used on Play Now buttons (replaces the ✈ emoji). */
export function IconSend(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M21.5 3.5 2.5 11l7 2.5L12 21l3.5-7 6-10.5Z" />
      <path d="m9.5 13.5 4-4" />
    </svg>
  );
}
