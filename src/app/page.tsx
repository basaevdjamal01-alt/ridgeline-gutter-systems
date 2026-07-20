import type { Metadata } from 'next';
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
import { ReviewsSection } from '@/components/sections/ReviewsSection';
import { CtaBand } from '@/components/sections/CtaBand';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: `${site.name} — Seamless Gutters in Minnesota`,
  description:
    'Minnesota seamless gutter installation, gutter guards, cleaning, and repairs. Custom 5" and 6" K-style systems formed on-site. Request a free estimate.',
  alternates: { canonical: '/' },
};

export default function HomePage() {  return (
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
      <ReviewsSection />
      <CtaBand />
    </>
  );
}
