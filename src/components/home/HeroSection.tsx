import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { CountdownTimer } from '@/components/CountdownTimer';
import { eventData } from '@/data/event';

export function HeroSection() {
  return (
    <Section className="relative overflow-hidden pt-16 md:pt-24 pb-24 md:pb-32">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-blue-grey/30">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent-yellow/30 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-grey/40 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      {/* Premium grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="premium-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#premium-grid)" />
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Heading with gradient */}
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-off-white via-accent-yellow to-off-white mb-6 animate-fade-in leading-tight">
            {eventData.name}
          </h1>

          {/* Premium underline accent */}
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-accent-yellow to-transparent mx-auto mb-8 rounded-full"></div>

          {/* Tagline with better typography */}
          <p className="text-2xl md:text-3xl text-off-white/90 mb-10 font-light leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {eventData.tagline}
          </p>

          {/* Premium info chips */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center space-x-3 glass-card px-6 py-3 rounded-full group hover:border-accent-yellow/50 transition-all">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-yellow to-yellow-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-off-white font-semibold text-lg">{eventData.date}</span>
            </div>
            <div className="flex items-center space-x-3 glass-card px-6 py-3 rounded-full group hover:border-accent-yellow/50 transition-all">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-yellow to-yellow-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-off-white font-semibold text-lg">{eventData.hours}</span>
            </div>
            <div className="flex items-center space-x-3 glass-card px-6 py-3 rounded-full group hover:border-accent-yellow/50 transition-all">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-yellow to-yellow-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="text-off-white font-semibold text-lg">{eventData.venue}</span>
            </div>
          </div>

          {/* Premium CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-5 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button href={eventData.primaryCTA.href} size="lg" className="text-lg px-10 py-5">
              {eventData.primaryCTA.text}
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
            <Button href={eventData.secondaryCTA.href} variant="outline" size="lg" className="text-lg px-10 py-5">
              {eventData.secondaryCTA.text}
            </Button>
          </div>

          {/* Countdown Timer */}
          <div className="mt-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <CountdownTimer />
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-off-white/60 text-sm animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-accent-yellow" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Expert Migration Agents</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-accent-yellow" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">One-on-One Consultations</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-accent-yellow" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Comprehensive Resources</span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
