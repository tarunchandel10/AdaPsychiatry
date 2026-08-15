import Image from "next/image";
import { treatmentFocusItems } from "@/lib/data/treatmentFocus";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function TreatmentFocus() {
  return (
    <section id="treatment-focus" className="py-10 md:py-20" aria-labelledby="treatment-focus-heading">
      <div className="mx-auto max-w-[1125px] px-6 lg:px-10">
        <SectionHeading id="treatment-focus-heading">Our Treatment Focus</SectionHeading>

        <div className="mt-14 flex flex-col gap-20">
          {treatmentFocusItems.map((item) => (
            <article
              key={item.id}
              className={`flex flex-col items-center gap-10 lg:flex-row ${
                item.imagePosition === "right" ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="relative aspect-square w-full lg:w-1/2 max-w-sm mx-auto overflow-hidden ">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 16vw, 90vw"
                />
              </div>

              <div className="w-full lg:w-1/2">
                <h3 className="font-display text-2xl font-bold text-ink sm:text-3xl">{item.title}</h3>
                <p className="mt-4 font-display text-lg leading-relaxed text-ink/90">
                  {item.description}
                </p>
                <Button
                  href={item.ctaHref}
                  showArrow={false}
                  className="mt-6 !font-display !font-normal !text-[16.88px] !leading-[16.88px] !tracking-[0px] !w-[180px] !h-[52.5px] !min-w-[180px] !min-h-[52.5px] !rounded-[46.88px] !pt-[7.5px] !pr-[18.75px] !pb-[7.5px] !pl-[18.75px]"
                >
                  Learn More
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
