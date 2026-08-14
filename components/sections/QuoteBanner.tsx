import { images } from "@/lib/data/images";

export function QuoteBanner() {
  return (
    <section
      className="relative bg-black py-16 text-white"
      style={{
        backgroundImage: `url(${images.waveDividerTop}), url(${images.waveDividerBottom})`,
        backgroundSize: "160px 22px, 160px 22px",
        backgroundPosition: "top, bottom",
        backgroundRepeat: "repeat-x, repeat-x",
      }}
      aria-label="Patient philosophy statement"
    >
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <div className="flex flex-col items-center justify-center">
          <span aria-hidden="true" className="font-display text-8xl font-bold leading-none text-gold custom_line_height">
            &ldquo;
          </span>
          <p className="font-display text-3xl font-bold leading-tight max-w-4xl">
            “We help people living with and experiencing difficult times”
          </p>
        </div>
      </div>
    </section>
  );
}
