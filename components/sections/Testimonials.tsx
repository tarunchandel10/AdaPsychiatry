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
  // True from the moment a dot is clicked until its scroll animation
  // settles, so the observer below can be told to stop overriding
  // activeIndex until then — see the comment on the observer for why.
  const isDotScrolling = useRef(false);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    // Land on the second slide on load — jump instantly (no smooth
    // animation) so it doesn't visibly scroll past the first card.
    // Scroll the row's own scrollLeft directly rather than using
    // scrollIntoView: scrollIntoView also walks up and scrolls ancestor
    // containers (including the page) to bring the target into view, which
    // yanks the whole page down to this section on every load since it
    // isn't in the viewport yet at mount time.
    const card = cardRefs.current[1];
    if (card) {
      list.scrollLeft = card.offsetLeft - (list.clientWidth - card.clientWidth) / 2;
    }

    // IntersectionObserver only reports entries whose ratio changed since the
    // last callback, not every observed card — so ratios must be tracked
    // across calls and the "most visible" card recomputed from the full set
    // each time, or the active dot flickers to whichever card happened to
    // fire that tick instead of the one actually most in view.
    const ratios = new Map<Element, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => ratios.set(entry.target, entry.intersectionRatio));
        // While a dot click is smooth-scrolling toward its target, every
        // card the row passes over crosses these thresholds too, so this
        // fires repeatedly with whichever card is mid-transit — committing
        // that makes the active dot jump around during the animation. Worse,
        // cards are 45% wide at lg, so at the very start/end of the row two
        // cards can both land on ratio 1 at once; there's no reliable
        // geometric way to tell which of the tied pair the click actually
        // meant (the target card can't literally reach "centered" there,
        // since centering it would need to scroll past the row's edge).
        // The click already knows the intended index — trust that and just
        // ignore the observer until the scroll settles (see the scroll
        // listener below), instead of re-deriving it from ambiguous ratios.
        if (isDotScrolling.current) return;

        let bestIndex = -1;
        let bestRatio = 0;
        cardRefs.current.forEach((el, index) => {
          const ratio = el ? ratios.get(el) ?? 0 : 0;
          // >= (not >): this only runs for manual swipes now (dot clicks are
          // trusted directly, above), and at the far end of the row two
          // cards can both settle at ratio 1 — on a tie the later, i.e. the
          // one the user swiped toward, should win, or the last dot can
          // never activate by swiping to the end.
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

    // Detect scroll settling via debounce rather than the `scrollend` event
    // (still unsupported on older Safari). Only re-arms the observer for the
    // next manual swipe — the click that started this scroll already set
    // activeIndex to its target, so there's nothing to recompute here.
    let settleTimer: ReturnType<typeof setTimeout>;
    const handleScroll = () => {
      clearTimeout(settleTimer);
      settleTimer = setTimeout(() => {
        isDotScrolling.current = false;
      }, 120);
    };
    list.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      list.removeEventListener("scroll", handleScroll);
      clearTimeout(settleTimer);
    };
  }, []);

  const scrollToIndex = (index: number) => {
    const list = listRef.current;
    const card = cardRefs.current[index];
    if (list && card) {
      isDotScrolling.current = true;
      list.scrollTo({
        left: card.offsetLeft - (list.clientWidth - card.clientWidth) / 2,
        behavior: "smooth",
      });
    }
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
