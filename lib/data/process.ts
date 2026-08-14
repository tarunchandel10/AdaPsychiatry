import { images } from "@/lib/data/images";
import type { ProcessStep } from "@/lib/types";

export const processSteps: ProcessStep[] = [
  { id: "step-1", number: "01", label: "Schedule an appointment", iconSrc: images.processIcons.schedule },
  { id: "step-2", number: "02", label: "Connect with your provider", iconSrc: images.processIcons.connect },
  { id: "step-3", number: "03", label: "Discuss your comprehensive assessment", iconSrc: images.processIcons.discuss },
  { id: "step-4", number: "04", label: "Receive your individualized treatment plan", iconSrc: images.processIcons.receivePlan },
];
