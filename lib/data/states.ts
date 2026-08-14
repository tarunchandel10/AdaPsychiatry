import { images } from "@/lib/data/images";
import type { StateAvailability } from "@/lib/types";

export const statesAccepted: StateAvailability[] = [
  { id: "arizona", name: "Arizona", status: "Virtual Appointment", imageSrc: images.states.arizona, imageAlt: "Desert landscape representing Arizona" },
  { id: "washington", name: "Washington", status: "Virtual Appointment", imageSrc: images.states.washington, imageAlt: "Pacific Northwest skyline representing Washington" },
  { id: "oregon", name: "Oregon", status: "Coming Soon", imageSrc: images.states.oregon, imageAlt: "Coastal landscape representing Oregon" },
  { id: "new-mexico", name: "New Mexico", status: "Virtual Appointment", imageSrc: images.states.newMexico, imageAlt: "Desert mesa landscape representing New Mexico" },
  { id: "colorado", name: "Colorado", status: "Virtual Appointment", imageSrc: images.states.colorado, imageAlt: "Rocky Mountain landscape representing Colorado" },
  { id: "kansas", name: "Kansas", status: "Virtual Appointment", imageSrc: images.states.kansas, imageAlt: "Plains landscape representing Kansas" },
];
