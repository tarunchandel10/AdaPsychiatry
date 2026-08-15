import Image from "next/image";
import { processSteps } from "@/lib/data/process";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function ProcessSteps() {
  return (
    <section className="relative bg-black py-10 md:py-[3.6rem] md:pt-[3rem]" aria-labelledby="process-heading">
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gold-gradient" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gold-gradient" aria-hidden="true" />

      <div className="mx-auto max-w-content px-6 lg:px-10">
        <SectionHeading id="process-heading" tone="gold-gradient" className="!leading-[1.4]">
          Four Simple Steps To Get<br /> Started
        </SectionHeading>

        {/* This content genuinely is an ordered sequence, so numbering here
            encodes real information rather than decorating a generic list. */}
        <ol className="relative mt-14 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* One short dotted segment per gap between icons, centered in
              that gap with padding on both sides — not a single line
              spanning icon-to-icon, which would touch the icons directly. */}
          {["left-[19.5%] right-[69.5%]", "left-[44.5%] right-[44.5%]", "left-[69.5%] right-[19.5%]"].map(
            (position) => (
              <div
                key={position}
                aria-hidden="true"
                className={`absolute top-[25px] hidden border-t-2 border-dotted border-white/40 lg:block ${position}`}
              />
            )
          )}
          {processSteps.map((step) => (
            <li key={step.id} className="relative z-10 flex flex-col items-center text-center">
              <span className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-black">
                <Image src={step.iconSrc} alt="" width={50} height={50} className="h-[50px] w-[50px]" aria-hidden="true" />
              </span>
              <span className="mt-4 font-display text-2xl font-bold text-gold-gradient">
                {step.number}
              </span>
              <span className="mt-2 max-w-[220px] font-sans text-sm text-white">{step.label}</span>
            </li>
          ))}
        </ol>

        <div className="mt-14 flex justify-center">
          <Button
            href="#book-appointment"
            className="!w-[298px] !h-[62px] !min-w-[298px] !min-h-[62px] !rounded-[50px] !font-semibold !text-base !leading-[27px] !tracking-[0px]"
          >
            Schedule a Call
          </Button>
        </div>
      </div>
    </section>
  );
}
