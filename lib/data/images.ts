/**
 * All assets exported from Figma and downloaded into /public/images —
 * see components for usage. Paths are local so there's no dependency on
 * Figma's short-lived asset CDN.
 */
export const images = {
  logoMark: "/images/logo-mark.png",
  heroBackground: "/images/hero-background.png",
  founderPortrait: "/images/founder-portrait.png",
  founderWave: "/images/founder-wave.svg",
  waveDividerTop: "/images/wave-divider-top.svg",
  waveDividerBottom: "/images/wave-divider-bottom.svg",
  whyChooseUs: "/images/why-choose-us.png",
  testimonialCardBg: "/images/testimonial-card-bg.svg",
  testimonialAvatar: "/images/testimonial-avatar.png",
  treatmentFocus: {
    mentalHealth: "/images/treatment_focus_one.png",
    addictionRecovery: "/images/treatment_focus_two.png",
    weightLoss: "/images/treatment_focus_three.png",
  },
  states: {
    arizona: "/images/state-arizona.png",
    washington: "/images/state-washington.png",
    oregon: "/images/state-oregon.png",
    newMexico: "/images/state-new-mexico.png",
    colorado: "/images/state-colorado.png",
    kansas: "/images/state-kansas.png",
  },
  serviceIcons: {
    psychEval: "/images/icon-psych-eval.svg",
    medManagement: "/images/icon-med-management.svg",
    therapy: "/images/icon-therapy.svg",
    adhd: "/images/icon-adh.svg",
    mat: "/images/icon-psych-eval.svg",
    geneSight: "/images/icon-med-management.svg",
  },
  processIcons: {
    schedule: "/images/calender.svg",
    connect: "/images/icon-process-connect.svg",
    discuss: "/images/icon-process-discuss.svg",
    receivePlan: "/images/notes.svg",
  },
  socials: {
    facebook: "/images/social-facebook.svg",
    instagram: "/images/social-instagram.svg",
    twitter: "/images/social-twitter.svg",
    tiktok: "/images/social-tiktok.svg",
    linkedin: "/images/social-linkedin.svg",
  },
} as const;
