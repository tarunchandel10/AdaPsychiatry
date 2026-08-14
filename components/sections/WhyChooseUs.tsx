import Image from "next/image";
import { reasonsToChoose } from "@/lib/data/services";
import { images } from "@/lib/data/images";

export function WhyChooseUs() {
  return (
    <section className="bg-cream-deep py-10 md:py-20" aria-labelledby="why-choose-us-heading">
      <div className="mx-auto grid max-w-content items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">
        <div className="relative mx-auto w-full max-w-lg">
          <div
            aria-hidden="true"
            className="absolute -bottom-6 -right-6 hidden aspect-[627/441] w-full  border-2 border-gold-rod sm:block"
          />
          <div className="relative aspect-[627/441] w-full overflow-hidden ">
            <Image
              src={images.whyChooseUs}
              alt="Provider consulting with two patients in a warm, welcoming clinical space"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 32rem, 100vw"
            />
          </div>
        </div>

        <div>
          <h2 id="why-choose-us-heading" className="font-display text-3xl font-bold text-ink sm:text-4xl">
            Why Should You Choose Ada Psychiatry?
          </h2>

          <div className="mt-3 divide-y divide-gold-rod/80  border-gold-rod/80">
            {reasonsToChoose.map((reason, index) => (
              <details key={reason.id} className="group py-5" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center gap-4 font-display text-xl font-bold text-ink sm:text-2xl">
                  <span className="relative h-4 w-4 shrink-0" aria-hidden="true">
                    <span className="absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 -translate-y-1/2 bg-ink" />
                    <span className="absolute left-1/2 top-1/2 h-full w-px -translate-x-1/2 -translate-y-1/2 bg-ink transition-transform duration-200 group-open:scale-y-0" />
                  </span>
                  {reason.title}
                </summary>
                {reason.description && (
                  <p className="mt-2 max-w-md pl-8 font-sans text-base leading-relaxed text-ink/70">
                    {reason.description}
                  </p>
                )}
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
