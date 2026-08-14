"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { primaryNav } from "@/lib/data/navigation";
import { images } from "@/lib/data/images";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 h-[83px] bg-black text-white">
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-5" aria-label="Ada Psychiatry home">
          <Image src={images.logoMark} alt="" width={46} height={46} className="h-[46px] w-[46px] object-contain" />
          <span className="font-sans text-lg font-semibold tracking-[3px]">
            Ada Psychiatry
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-1.5 font-sans text-sm font-medium text-white transition-colors hover:text-gold"
            >
              {link.label}
              {link.hasDropdown && (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </Link>
          ))}
          <Button href="#book-appointment" size="sm" showArrow={false}>
            Book an Appointment
          </Button>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-white lg:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {isMenuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <nav id="mobile-nav" aria-label="Mobile" className="flex flex-col gap-1 bg-black px-6 pb-6 lg:hidden">
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-2 py-3 text-sm font-medium text-white/90 hover:bg-white/5 hover:text-gold"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button href="#book-appointment" size="sm" showArrow={false} className="mt-2 w-full">
            Book an Appointment
          </Button>
        </nav>
      )}
    </header>
  );
}
