import Image from "next/image";
import { statesAccepted } from "@/lib/data/states";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function StatesAccepted() {
  return (
    <section className="py-10 md:py-20" aria-labelledby="states-heading">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <SectionHeading id="states-heading">Now Accepting Patients In<br /> The Following States</SectionHeading>

        <ul className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 sm:gap-y-20 lg:grid-cols-3 lg:gap-y-24">
          {statesAccepted.map((state) => (
            <li key={state.id} className="flex flex-col items-center text-center">
              <div className="relative w-full overflow-hidden rounded-t-full" style={{ aspectRatio: '2 / 1' }}>
                <Image
                  src={state.imageSrc}
                  alt={state.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-soft/90 via-ink-soft/10 to-transparent" aria-hidden="true" />
              </div>
              <h3 className="mt-4 md:mt-12 font-display font-bold text-ink text-3xl sm:text-[44px]">{state.name}</h3>
              <p className="md:mt-3 font-sans text-base text-ink sm:text-lg">{state.status}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
