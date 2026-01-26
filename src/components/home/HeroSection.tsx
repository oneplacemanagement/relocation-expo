import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { eventData } from '@/data/event';

export function HeroSection() {
  return (
    <Section className="relative overflow-hidden pt-8 md:pt-16">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <Container className="relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-off-white mb-6">
            {eventData.name}
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-off-white/80 mb-8">
            {eventData.tagline}
          </p>

          {/* Date & Venue Chips */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center space-x-2 bg-blue-grey/30 px-4 py-2 rounded-full">
              <svg className="w-5 h-5 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-off-white font-semibold">{eventData.date}</span>
            </div>
            <div className="flex items-center space-x-2 bg-blue-grey/30 px-4 py-2 rounded-full">
              <svg className="w-5 h-5 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-off-white font-semibold">{eventData.hours}</span>
            </div>
            <div className="flex items-center space-x-2 bg-blue-grey/30 px-4 py-2 rounded-full">
              <svg className="w-5 h-5 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-off-white font-semibold">{eventData.venue}</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href={eventData.primaryCTA.href} size="lg">
              {eventData.primaryCTA.text}
            </Button>
            <Button href={eventData.secondaryCTA.href} variant="outline" size="lg">
              {eventData.secondaryCTA.text}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
