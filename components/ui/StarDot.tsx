/** The six-pointed star pagination dot, traced from the Figma export (Star 1-5). */
export function StarDot({ active }: { active: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      {active ? (
        <path d="M8 0L11.44 2.04175L14.9282 4L14.88 8L14.9282 12L11.44 13.9583L8 16L4.56 13.9583L1.0718 12L1.12 8L1.0718 4L4.56 2.04175L8 0Z" fill="url(#star-dot-gradient)" />
      ) : (
        <path
          d="M8 0.464L11.334 2.4358L11.338 2.4378L14.6259 4.2696L14.5801 8.0002V8.0038L14.6259 11.7326L11.338 13.5644L11.334 13.5664L8 15.5322L4.666 13.5664L4.662 13.5644L1.3741 11.7326L1.4199 8.0038V8.0002L1.3741 4.2696L4.662 2.4378L4.666 2.4358L8 0.464Z"
          stroke="#DAA520"
          strokeWidth="0.4"
        />
      )}
      <defs>
        <linearGradient id="star-dot-gradient" x1="0" y1="8" x2="16" y2="8" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C18C2C" />
          <stop offset="0.5052" stopColor="#FCF38A" />
          <stop offset="1" stopColor="#C18C2C" />
        </linearGradient>
      </defs>
    </svg>
  );
}
