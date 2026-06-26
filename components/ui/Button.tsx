import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  /** Open in a new tab with safe rel attributes. */
  newTab?: boolean;
};

/** Anchor-styled button. Maps to .btn / .btn-primary / .btn-ghost. */
export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  newTab = false,
}: ButtonProps) {
  const variantClass = variant === "primary" ? "btn-primary" : "btn-ghost";
  const tabProps = newTab ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <Link href={href} className={`btn ${variantClass} ${className}`.trim()} {...tabProps}>
      {children}
    </Link>
  );
}
