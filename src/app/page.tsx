import { HeroSection } from '@/components/home/HeroSection';
import { SponsorsMarquee } from '@/components/home/SponsorsMarquee';
import { AboutSection } from '@/components/home/AboutSection';
import { WhyAttendSection } from '@/components/home/WhyAttendSection';
import { CrokeParkVideoSection } from '@/components/home/CrokeParkVideoSection';
import { SponsorsTieredSection } from '@/components/home/SponsorsTieredSection';
import { PricingTiersSection } from '@/components/home/PricingTiersSection';
import { FAQSection } from '@/components/home/FAQSection';
import { VenueSection } from '@/components/home/VenueSection';
import { SkylineDayOut } from '@/components/SkylineDayOut';

export default function Home() {
  return (
    <>
      <HeroSection />
      <SponsorsMarquee />
      <AboutSection />
      <WhyAttendSection />
      <SkylineDayOut variant="teaser" />
      <CrokeParkVideoSection />
      <SponsorsTieredSection />
      <PricingTiersSection />
      <FAQSection />
      <VenueSection />
    </>
  );
}
