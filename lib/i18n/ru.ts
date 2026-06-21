import en, { type Dictionary } from "./en";

/**
 * Russian dictionary — SCAFFOLD ONLY.
 *
 * Copy currently falls back to the English strings so the EN/RU switch is
 * fully wired and the layout can be verified. To localise: replace this with a
 * full object that mirrors en.ts key-for-key (the `Dictionary` type enforces it).
 *
 * TODO(i18n): translate all strings to Russian.
 */
const ru: Dictionary = en;

export default ru;
