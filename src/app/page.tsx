import { HeroSection } from '@/components/home/HeroSection';
import { WhoItsForSection } from '@/components/home/WhoItsForSection';
import { WhatYouGetSection } from '@/components/home/WhatYouGetSection';
import { DestinationsSection } from '@/components/home/DestinationsSection';
import { WhatToExpectSection } from '@/components/home/WhatToExpectSection';
import { ExhibitorsSection } from '@/components/home/ExhibitorsSection';
import { ConsultationBookingSection } from '@/components/home/ConsultationBookingSection';
import { ScheduleSection } from '@/components/home/ScheduleSection';
import { VenueSection } from '@/components/home/VenueSection';
import { FAQSection } from '@/components/home/FAQSection';
import { RegisterSection } from '@/components/home/RegisterSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhoItsForSection />
      <WhatYouGetSection />
      <DestinationsSection />
      <WhatToExpectSection />
      <ExhibitorsSection />
      <ConsultationBookingSection />
      <ScheduleSection />
      <VenueSection />
      <FAQSection />
      <RegisterSection />
    </>
  );
}
