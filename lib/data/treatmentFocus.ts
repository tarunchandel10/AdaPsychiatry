import { images } from "@/lib/data/images";
import type { TreatmentFocusItem } from "@/lib/types";

export const treatmentFocusItems: TreatmentFocusItem[] = [
  {
    id: "mental-health",
    title: "Mental health",
    description:
      "Mental health is our emotional, psychological, and social well-being. It affects how we feel, think, and act. It also helps determine how we handle stress, build relationships, relate to others, and make healthy life decisions. Mental health is vital at every stage of life. At Ada Psychiatry, we specialize in various conditions such as Depression, Anxiety, ADHD, Bipolar and more.",
    imageSrc: images.treatmentFocus.mentalHealth,
    imageAlt: "Provider sitting with a patient during a mental health consultation",
    ctaHref: "#",
    imagePosition: "left",
  },
  {
    id: "addiction-recovery",
    title: "Addiction and recovery",
    description:
      "Addiction is a chronic dysfunction of the brain system. An individual experiencing addiction will have difficulty staying away from the addictive behavior, display a lack of self-control, be dismayed by how the behavior may be causing problems, and lack an emotional response. At Ada Psychiatry, we assess your risk for addiction and create a comprehensive treatment plan to start your recovery. Our experts are trained in medication-assisted treatment. You do not have to continue to struggle alone.",
    imageSrc: images.treatmentFocus.addictionRecovery,
    imageAlt: "Two clinicians reviewing a recovery treatment plan together",
    ctaHref: "#",
    imagePosition: "right",
  },
  {
    id: "weight-loss",
    title: "Supervised Medical Weight Loss",
    description:
      "The primary indicator of obesity is when a person’s body mass index (BMI) is 30 or higher. Medically supervised weight loss is a program designed for individuals who are obese and are having difficulty losing weight and changing their lifestyle on their own. Our program offers supervision, FDA-approved medications, weight loss injections, diet plans, and exercise to help with each client’s needs.",
    imageSrc: images.treatmentFocus.weightLoss,
    imageAlt: "Patient engaging in supervised exercise as part of a weight loss program",
    ctaHref: "#",
    imagePosition: "left",
  },
];
