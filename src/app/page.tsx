import { HeroSection } from '@/components/home/HeroSection';
import { AboutSection } from '@/components/home/AboutSection';
import { WhatYouGetSection } from '@/components/home/WhatYouGetSection';
import { WhoYouMeetSection } from '@/components/home/WhoYouMeetSection';
import { WhyAttendSection } from '@/components/home/WhyAttendSection';
import { WhyExhibitSection } from '@/components/home/WhyExhibitSection';
import { ExhibitorsSection } from '@/components/home/ExhibitorsSection';
import { WhatMakesDifferentSection } from '@/components/home/WhatMakesDifferentSection';
import { WhatToExpectSection } from '@/components/home/WhatToExpectSection';
import { EventHighlightsSection } from '@/components/home/EventHighlightsSection';
import { RegisterSection } from '@/components/home/RegisterSection';
import { FAQSection } from '@/components/home/FAQSection';
import { VenueSection } from '@/components/home/VenueSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhatYouGetSection />
      <WhoYouMeetSection />
      <WhyAttendSection />
      <WhyExhibitSection />
      <ExhibitorsSection />
      <WhatMakesDifferentSection />
      <WhatToExpectSection />
      <EventHighlightsSection />
      <RegisterSection />
      <FAQSection />
      <VenueSection />
    </>
  );
}
