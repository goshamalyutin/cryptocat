import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

/** Anchor-styled button. Maps to .btn / .btn-primary / .btn-ghost. */
export default function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const variantClass = variant === "primary" ? "btn-primary" : "btn-ghost";
  return (
    <Link href={href} className={`btn ${variantClass} ${className}`.trim()}>
      {children}
    </Link>
  );
}
