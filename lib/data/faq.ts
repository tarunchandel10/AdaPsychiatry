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
      "The fastest way is through the Book an Appointment button at the top of this page, which opens our online scheduling tool.",
  },
  {
    id: "controlled-substances",
    question: "Do you prescribe controlled substance medication?",
    answer:
      "Our providers evaluate each case individually and, where clinically appropriate, can prescribe controlled substance medication as part of a monitored treatment plan.",
  },
  {
    id: "initial-appointment-length",
    question: "How long does the initial appointment take?",
    answer:
      "Initial evaluations typically run 45–60 minutes so your provider has time to fully understand your history and goals.",
  },
];

export const footerLinkGroups: [
  FooterLinkGroup,
  FooterLinkGroup,
  FooterLinkGroup,
  FooterLinkGroup,
] = [
  {
    heading: "Quick Links",
    links: [
      { label: "Who We Are", href: "#" },
      { label: "What We Treat", href: "#" },
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
  {
    heading: "Business Hours",
    links: [{ label: "Monday – Thursday, 09:00 am – 4:00 pm", href: "#" }],
  },
];
