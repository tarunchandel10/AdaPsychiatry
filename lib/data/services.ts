import { images } from "@/lib/data/images";
import type { ServiceItem } from "@/lib/types";

export const services: ServiceItem[] = [
  { id: "psychiatric-evaluation", label: "Psychiatric\nEvaluation", iconSrc: images.serviceIcons.psychEval },
  { id: "medication-management", label: "Medication\nManagement", iconSrc: images.serviceIcons.medManagement },
  { id: "supportive-psychotherapy", label: "Supportive\nPsychotherapy", iconSrc: images.serviceIcons.therapy },
  { id: "adhd-screening", label: "ADHD\nScreening", iconSrc: images.serviceIcons.adhd },
  { id: "mat-treatment", label: "MAT\nTreatment", iconSrc: images.serviceIcons.mat },
  { id: "genesight-testing", label: "Gene Sight\nTesting", iconSrc: images.serviceIcons.geneSight },
];

export const reasonsToChoose = [
  {
    id: "convenient-access",
    title: "Convenient access",
    description:
      "We Offer In-Person And Virtual Psychiatry Services Where You Can Meet Your Provider In Person Or At The Convenience Of Your Own Home.",
  },
  { id: "concierge-approach", title: "Concierge approach",
    description:
      "We Offer In-Person And Virtual Psychiatry Services Where You Can Meet Your Provider In Person Or At The Convenience Of Your Own Home.",
   },
  { id: "high-quality-service", title: "High quality service",
    description:
      "We Offer In-Person And Virtual Psychiatry Services Where You Can Meet Your Provider In Person Or At The Convenience Of Your Own Home.",
   },
  { id: "trusted-providers", title: "Trusted and empathic providers",
    description:
      "We Offer In-Person And Virtual Psychiatry Services Where You Can Meet Your Provider In Person Or At The Convenience Of Your Own Home.",
   },
];
