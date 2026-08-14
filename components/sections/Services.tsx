import Image from "next/image";
import { services } from "@/lib/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function Services() {
  return (
    <section id="services" className="py-10 md:py-20" aria-labelledby="services-heading">
      <div className="mx-auto max-w-content px-6 text-center lg:px-10">
        <SectionHeading id="services-heading">Our Services</SectionHeading>

        <ul className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {services.map((service) => (
            <li key={service.id} className="flex flex-col items-center gap-4">
              <span className="flex h-[100px] w-[100px] ">
                <Image src={service.iconSrc} alt="" width={100} height={100} className="h-[100px] w-[100px]" aria-hidden="true" />
              </span>
              <span className="whitespace-pre-line font-display text-lg font-bold text-ink">
                {service.label}
              </span>
            </li>
          ))}
        </ul>

        <Button href="#services" className="mx-auto mt-12 px-14">
          View our services
        </Button>
      </div>
    </section>
  );
}
