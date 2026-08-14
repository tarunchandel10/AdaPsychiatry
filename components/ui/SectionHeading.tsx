interface SectionHeadingProps {
  children: React.ReactNode;
  align?: "left" | "center";
  tone?: "ink" | "white" | "gold-gradient";
  className?: string;
  id?: string;
}

/**
 * Every major section in the design opens with a large Abhaya Libre Bold
 * heading, just with different alignment/color per context (dark bands use
 * white or the gold-gradient text treatment). Centralizing that here avoids
 * six near-duplicate heading declarations across the section components.
 */
export function SectionHeading({
  children,
  align = "center",
  tone = "ink",
  className = "",
  id,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center" : "text-left";
  const color =
    tone === "white" ? "text-white" : tone === "gold-gradient" ? "text-gold-gradient" : "text-ink";

  return (
    <h2
      id={id}
      className={`font-display text-3xl font-bold leading-tight sm:text-4xl md:text-[40px] ${alignment} ${color} ${className}`}
    >
      {children}
    </h2>
  );
}
