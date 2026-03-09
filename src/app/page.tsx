import { HeroSection } from '@/components/home/HeroSection';
import { AboutSection } from '@/components/home/AboutSection';
import { WhyAttendSection } from '@/components/home/WhyAttendSection';
import { WhyExhibitSection } from '@/components/home/WhyExhibitSection';
import { WhatMakesDifferentSection } from '@/components/home/WhatMakesDifferentSection';
import { EventHighlightsSection } from '@/components/home/EventHighlightsSection';
import { WhoYouMeetSection } from '@/components/home/WhoYouMeetSection';
import { VenueSection } from '@/components/home/VenueSection';
import { FAQSection } from '@/components/home/FAQSection';
import { RegisterSection } from '@/components/home/RegisterSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhoYouMeetSection />
      <WhyAttendSection />
      <WhyExhibitSection />
      <WhatMakesDifferentSection />
      <EventHighlightsSection />
      <RegisterSection />
      <FAQSection />
      <VenueSection />
    </>
  );
}
