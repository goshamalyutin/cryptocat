import Image from "next/image";

/**
 * Subtle rock texture for the dark sections so they read as cave wall, not flat
 * black. Sits above the section's background colour, below its content.
 * Parent must be `relative` + `isolate`; content should sit at z-10.
 *
 * NOTE on blend: `mix-blend-overlay` keeps the texture very subtle on mid-dark
 * sections, but over a near-black base a near-black texture becomes invisible.
 * For sections that sit on the pure #0E0B10 base, pass blend="" so the texture
 * renders with plain opacity and is actually visible.
 */
export default function CaveTexture({
  opacity = "opacity-[0.14]",
  blend = "mix-blend-overlay",
}: {
  opacity?: string;
  blend?: string;
}) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <Image
        src="/assets/cave-texture.jpg"
        alt=""
        fill
        sizes="100vw"
        loading="lazy"
        aria-hidden
        className={`object-cover ${blend} ${opacity}`.trim()}
      />
    </div>
  );
}
