import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: "solid" | "outline";
  /** "md" (46px tall, 16px text) is the default pill size used everywhere
   *  except the header nav, which uses "sm" (46px tall, 14px text, per the
   *  Figma header spec) — a variant swap rather than a className override,
   *  since Tailwind doesn't guarantee a later utility class wins over an
   *  earlier one of equal specificity (padding utilities included). */
  size?: "sm" | "md";
  showArrow?: boolean;
  children: React.ReactNode;
}

/**
 * The signature gold-gradient pill CTA. Every "Book an Appointment" /
 * "Learn More" / "View our services" button in the design shares this
 * same shape — centralizing it here keeps them visually and behaviorally
 * consistent instead of re-declaring the gradient class list per instance.
 */
export function Button({
  href,
  variant = "solid",
  size = "md",
  showArrow = true,
  children,
  className = "",
  ...rest
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-pill font-sans font-medium transition-transform duration-150 hover:scale-[1.03] focus-visible:scale-[1.03]";

  // 13px vertical padding lands both variants exactly on their Figma
  // target height: 13+20(text-sm line-height)+13 = 46px (header button),
  // 13+24(text-base line-height)+13 = 50px (every other pill button).
  const sizes = size === "sm" ? "px-6 py-[13px] text-sm" : "px-6 py-[13px] text-base";

  const styles =
    variant === "solid"
      ? "bg-gold-gradient text-ink"
      : "border border-gold text-gold hover:bg-gold/10";

  return (
    <Link href={href} className={`${base} ${sizes} ${styles} ${className}`} {...rest}>
      {children}
      {showArrow && (
        <svg width="22" height="23" viewBox="0 0 22 23" fill="none" aria-hidden="true">
          <path d="M3.227 11.5h14.025" stroke="currentColor" strokeWidth="1.389" />
          <path d="M10.09 5.111s.859 6.377 7.644 6.377" stroke="currentColor" strokeWidth="1.389" />
          <path d="M10.09 17.889s.859-6.377 7.644-6.377" stroke="currentColor" strokeWidth="1.389" />
        </svg>
      )}
    </Link>
  );
}
