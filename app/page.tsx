import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { FounderSpotlight } from "@/components/sections/FounderSpotlight";
import { TreatmentFocus } from "@/components/sections/TreatmentFocus";
import { QuoteBanner } from "@/components/sections/QuoteBanner";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { StatesAccepted } from "@/components/sections/StatesAccepted";
import { FAQ } from "@/components/sections/FAQ";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FounderSpotlight />
        <TreatmentFocus />
        <QuoteBanner />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <ProcessSteps />
        <StatesAccepted />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
