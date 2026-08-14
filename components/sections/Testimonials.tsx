"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { testimonials } from "@/lib/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarDot } from "@/components/ui/StarDot";

export function Testimonials() {
  const listRef = useRef<HTMLUListElement>(null);
  const cardRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries.reduce((best, entry) =>
          entry.intersectionRatio > best.intersectionRatio ? entry : best
        );
        if (mostVisible.intersectionRatio > 0) {
          const index = cardRefs.current.findIndex((el) => el === mostVisible.target);
          if (index !== -1) setActiveIndex(index);
        }
      },
      { root: list, threshold: [0.5, 0.75, 1] }
    );

    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToIndex = (index: number) => {
    cardRefs.current[index]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  return (
    <section className="py-10 md:py-20" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <SectionHeading id="testimonials-heading">What Our Patients Are saying</SectionHeading>
      </div>

      <ul
        ref={listRef}
        className="mt-14 mx-auto max-w-[1440px] flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label="Patient testimonials"
      >
        {testimonials.map((testimonial, index) => (
          <li
            key={testimonial.id}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className="w-[85%] shrink-0 snap-center overflow-hidden rounded-3xl bg-cream-deep sm:w-[70%] lg:w-[45%]"
          >
            <blockquote className="px-12 pb-8 pt-10">
              <span aria-hidden="true" className="font-display text-6xl font-bold leading-none text-ink sm:text-8xl">
                &ldquo;
              </span>
              <p className="-mt-8 font-sans text-base leading-relaxed text-ink sm:text-[24px]">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </blockquote>
            <footer className="flex items-center justify-center gap-3 bg-gold px-8 py-6">
              <Image
                src={testimonial.avatarSrc}
                alt=""
                width={60}
                height={60}
                className="h-[60px] w-[60px] shrink-0 rounded-full object-cover"
              />
              <div>
                <p className="font-sans text-lg font-semibold text-white">{testimonial.name}</p>
                <p className="font-sans text-sm text-white/80">{testimonial.affiliation}</p>
              </div>
            </footer>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex items-center justify-center gap-2" role="tablist" aria-label="Testimonial pages">
        {testimonials.map((testimonial, index) => (
          <button
            key={testimonial.id}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={`Show testimonial ${index + 1}`}
            onClick={() => scrollToIndex(index)}
            className="p-0.5"
          >
            <StarDot active={index === activeIndex} />
          </button>
        ))}
      </div>
    </section>
  );
}
