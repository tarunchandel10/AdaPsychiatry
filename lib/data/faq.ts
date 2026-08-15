import type { FaqItem, FooterLinkGroup } from "@/lib/types";

export const faqItems: FaqItem[] = [
  {
    id: "confidential",
    question: "Is Ada psychiatry confidential?",
    answer:
      "We offer in-person and virtual psychiatry services where you can meet your provider in person or at the convenience of your own home.",
  },
  {
    id: "scheduling",
    question: "What is the best way to schedule an appointment?",
    answer:
      "We offer in-person and virtual psychiatry services where you can meet your provider in person or at the convenience of your own home.",
  },
  {
    id: "controlled-substances",
    question: "Do you prescribe controlled substance medication?",
    answer:
      "We offer in-person and virtual psychiatry services where you can meet your provider in person or at the convenience of your own home.",
  },
  {
    id: "initial-appointment-length",
    question: "How long does the initial appointment take?",
    answer:
      "We offer in-person and virtual psychiatry services where you can meet your provider in person or at the convenience of your own home.",
  },
];

export const footerLinkGroups: [
  FooterLinkGroup,
  FooterLinkGroup,
  FooterLinkGroup,
] = [
  {
    heading: "Quick Links",
    links: [
      { label: "Who We Are", href: "#" },
      { label: "What We Treat", href: "#" },
      { label: "Services", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "FAQs", href: "#faq" },
      { label: "Blog", href: "#" },
      { label: "Fees and Insurance", href: "#" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Terms", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Return Policy", href: "#" },
      { label: "Cookie Settings", href: "#" },
    ],
  },
 
];
