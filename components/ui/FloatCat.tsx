import Image from "next/image";

type FloatCatProps = {
  src: string;
  alt: string;
  /** Rendered pixel height (width is auto via intrinsic ratio). */
  height: number;
  width: number;
  className?: string;
  priority?: boolean;
  /** Apply the idle float animation (suppressed by reduced-motion media query). */
  float?: boolean;
  sizes?: string;
};

/** next/image cat with optional idle float. */
export default function FloatCat({
  src,
  alt,
  height,
  width,
  className = "",
  priority = false,
  float = false,
  sizes,
}: FloatCatProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      sizes={sizes}
      className={`${float ? "animate-float will-change-transform" : ""} ${className}`.trim()}
      style={{ height, width: "auto" }}
    />
  );
}
