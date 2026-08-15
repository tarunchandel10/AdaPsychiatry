"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { testimonials } from "@/lib/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarDot } from "@/components/ui/StarDot";

export function Testimonials() {
  const listRef = useRef<HTMLUListElement>(null);
  const cardRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    // Land on the second slide on load — jump instantly (no smooth
    // animation) so it doesn't visibly scroll past the first card.
    cardRefs.current[1]?.scrollIntoView({ behavior: "auto", inline: "center", block: "nearest" });

    // IntersectionObserver only reports entries whose ratio changed since the
    // last callback, not every observed card — so ratios must be tracked
    // across calls and the "most visible" card recomputed from the full set
    // each time, or the active dot flickers to whichever card happened to
    // fire that tick instead of the one actually most in view.
    const ratios = new Map<Element, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => ratios.set(entry.target, entry.intersectionRatio));

        let bestIndex = -1;
        let bestRatio = 0;
        cardRefs.current.forEach((el, index) => {
          const ratio = el ? ratios.get(el) ?? 0 : 0;
          // >= (not >): near the end of the list two cards can be equally
          // fully visible at once (cards are 45% wide at lg), and on a tie
          // the later — i.e. more recently scrolled-to — card should win,
          // or the last dot can never become active.
          if (ratio >= bestRatio) {
            bestRatio = ratio;
            bestIndex = index;
          }
        });

        if (bestIndex !== -1) setActiveIndex(bestIndex);
      },
      { root: list, threshold: [0.5, 0.75, 1] }
    );

    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToIndex = (index: number) => {
    cardRefs.current[index]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    setActiveIndex(index);
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
                <p className="font-sans text-[20px] font-semibold leading-[100%] tracking-[0%] text-white">{testimonial.name}</p>
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
