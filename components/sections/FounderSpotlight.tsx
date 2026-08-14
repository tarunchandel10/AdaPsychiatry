import Image from "next/image";
import { images } from "@/lib/data/images";
import { Button } from "@/components/ui/Button";

export function FounderSpotlight() {
  return (
    <section
      id="founder"
      className="relative bg-cream-deep py-12 lg:py-32"
      style={{
        // The wave graphic is cream-deep on transparent, so on its own it's
        // invisible against this section's matching background. The second,
        // hard-stopped gradient layer reveals the lighter page cream behind
        // just the bottom sliver of the wave so the curve actually shows —
        // same effect as overlapping the next section, without needing a
        // separate absolutely-positioned element.
        backgroundImage: `url(${images.founderWave}), linear-gradient(to bottom, transparent 85.17%, #FAF4E6 85.17%)`,
        backgroundSize: "100% 22.014vw",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
      aria-labelledby="founder-heading"
    >
      <div className="relative mx-auto max-w-content px-6 lg:px-10">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="relative z-10 aspect-[509/330] w-full max-w-lg shrink-0 overflow-hidden rounded-[20px] lg:w-[46%] lg:max-w-none">
            <Image
              src={images.founderPortrait}
              alt="Lakeisha Appleton, founder of Ada Psychiatry, smiling in a clinical setting"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 46vw, 100vw"
            />
          </div>

          <div className="relative z-0 mt-8 w-full rounded-[20px] border-2 border-gold-rod px-8 py-10 text-center lg:mt-0 lg:-ml-[12%] lg:w-[66%] lg:py-14 lg:pl-[16%] lg:pr-12 lg:text-left">
            <h2 id="founder-heading" className="font-display text-3xl font-bold leading-tight text-ink sm:text-4xl sm:leading-[32px]">
              Meet The Founder
            </h2>
            <p className="mt-6 font-display text-xl font-bold text-ink sm:text-2xl">Lakeisha Appleton</p>
            <p className="mt-1 font-sans text-base font-medium text-ink sm:text-xl">FNP-C, PMHNP- BC</p>
            <p className="mt-4 font-sans text-base leading-relaxed text-ink sm:text-xl">
              &ldquo;Mental health problems don&rsquo;t define who you are. They are
              something you experience. You walk in the rain and you feel the
              rain, but, importantly, YOU ARE NOT THE RAIN.&rdquo; — Matt Haig
            </p>
            <Button href="#" className="mt-8">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
