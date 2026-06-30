import { Hero } from '@/components/sections/Hero';
import { TrustBar } from '@/components/sections/TrustBar';
import { WhyChooseRidgeline } from '@/components/sections/WhyChooseRidgeline';
import { CostOfFailure } from '@/components/sections/CostOfFailure';
import { BeforeAfter } from '@/components/sections/BeforeAfter';
import { Process } from '@/components/sections/Process';
import { WhyUs } from '@/components/sections/WhyUs';
import { Testimonials } from '@/components/sections/Testimonials';
import { ServiceAreasSection } from '@/components/sections/ServiceAreasSection';
import { Faq } from '@/components/sections/Faq';
import { CtaBand } from '@/components/sections/CtaBand';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <WhyChooseRidgeline />
      <CostOfFailure />
      <BeforeAfter />
      <Process />
      <WhyUs />
      <Testimonials />
      <ServiceAreasSection />
      <Faq />
      <CtaBand />
    </>
  );
}
