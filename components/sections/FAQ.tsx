import { faqItems } from "@/lib/data/faq";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function FAQ() {
  return (
    <section id="faq" className="py-10 md:py-20" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <SectionHeading id="faq-heading">Frequently asked questions</SectionHeading>

        <div className="mt-4 sm:mt-8 px-6 py-6 sm:px-8 sm:py-10">
          <div className="divide-y divide-gold-rod/80">
            {faqItems.map((item, index) => (
              <details key={item.id} className="group py-5 first:pt-0 last:pb-0" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-start gap-4 font-display text-lg font-bold text-ink sm:text-[24px]">
                  <span className="relative h-4 w-4 shrink-0 mt-1" aria-hidden="true">
                    <span className="absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 -translate-y-1/2 bg-ink" />
                    <span className="absolute left-1/2 top-1/2 h-full w-px -translate-x-1/2 -translate-y-1/2 bg-ink transition-transform duration-200 group-open:scale-y-0" />
                  </span>
                  <span>{item.question}</span>
                </summary>
                <p className="mt-3 ml-8 font-sans text-base font-normal leading-relaxed text-ink sm:text-[24px]">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            href="#faq"
            className="!w-[335px] !h-[56px] !min-w-[335px] !min-h-[56px] !bg-[linear-gradient(90deg,_#CEA341_0%,_#E8D16B_49.79%,_#F0DF78_100%)] !font-semibold !text-base !leading-[27px] !tracking-[0px]"
          >
            See all FAQ
          </Button>
        </div>
      </div>
    </section>
  );
}
