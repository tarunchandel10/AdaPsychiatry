import { images } from "@/lib/data/images";
import type { TestimonialItem } from "@/lib/types";

/**
 * Figma's pagination shows 8 dots even though only one testimonial was
 * actually designed (the rest were left as duplicate placeholder copy in
 * the file itself) — matched here so the dot count lines up. Swap in real
 * quotes as they're written; only this array needs to change.
 */
export const testimonials: TestimonialItem[] = Array.from({ length: 8 }, (_, i) => ({
  id: `testimonial-${i + 1}`,
  quote:
    "ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach.",
  name: "Carl Rowan",
  affiliation: "Aglets Inc",
  avatarSrc: images.testimonialAvatar,
}));
