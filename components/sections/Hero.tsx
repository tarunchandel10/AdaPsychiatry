"use client";

import { useEffect, useState } from "react";
import { heroSlides } from "@/lib/data/hero";
import { images } from "@/lib/data/images";
import { Button } from "@/components/ui/Button";
import { StarDot } from "@/components/ui/StarDot";

const AUTO_ADVANCE_MS = 6000;

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = heroSlides[activeSlide] ?? heroSlides[0]!;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative min-h-[648px] overflow-hidden bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: `url(${images.heroBackground})` }}
      aria-label="Introduction"
      aria-roledescription="carousel"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pt-[189px] lg:px-[100px]">
        <div key={slide.id} className="max-w-[465px] animate-hero-fade">
          <h1 className="font-display text-[32px] font-normal uppercase leading-[1.2] text-white sm:text-[40px] lg:text-[48px] lg:leading-[56.5px]">
            {slide.heading}
          </h1>
          <p className="mt-[6px] max-w-[425px] font-display text-xl leading-[28px] text-white">
            {slide.subheading}
          </p>
          <p className="mt-[6px] max-w-[425px] font-display text-xl leading-[28px] text-white">
            {slide.paragraph}
          </p>
          <Button href={slide.ctaHref} className="mt-[40px]">
            {slide.ctaLabel}
          </Button>

          <div className="mt-[86px] flex items-center gap-2" role="tablist" aria-label="Hero slides">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={index === activeSlide}
                aria-label={`Show slide ${index + 1}`}
                onClick={() => setActiveSlide(index)}
                className="p-0.5"
              >
                <StarDot active={index === activeSlide} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
