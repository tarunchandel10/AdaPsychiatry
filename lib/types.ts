export interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface TreatmentFocusItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  ctaHref: string;
  /** Alternates the image/text layout left-right down the page */
  imagePosition: "left" | "right";
}

export interface ServiceItem {
  id: string;
  label: string;
  iconSrc: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  affiliation: string;
  avatarSrc: string;
}

export interface ProcessStep {
  id: string;
  number: string;
  label: string;
  iconSrc: string;
}

export interface StateAvailability {
  id: string;
  name: string;
  status: "Virtual Appointment" | "Coming Soon" | "In-Person Available";
  imageSrc: string;
  imageAlt: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ReasonItem {
  id: string;
  title: string;
}

export interface FooterLinkGroup {
  heading: string;
  links: NavLink[];
}
