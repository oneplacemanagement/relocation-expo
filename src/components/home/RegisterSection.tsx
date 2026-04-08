'use client';

import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function RegisterSection() {
  return (
    <Section
      id="register"
      background="dark"
      backgroundImage="/images/Hogan Mezzanine_files/7a31f77844a244f0ab9770bce2556ab3_LARGE!_!8409e51bf6888e13cc1e803159910837.jpeg"
      backgroundImageAlt="Hogan Mezzanine & Foyer, Croke Park"
      overlayIntensity="heavy"
    >
      <Container size="md">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-off-white via-accent-yellow to-off-white mb-6">
            Take the Next Step Toward Your Australian Future
          </h2>
          <p className="text-xl text-off-white/80 max-w-2xl mx-auto leading-relaxed">
            Whether you're exploring your options or ready to make the move, the Relocation Expo brings everything — and everyone — together.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-5 mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Button href="/tickets" size="lg" className="text-lg px-10 py-5">
            Register Interest - Tickets Launch May 1st
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
            </svg>
          </Button>
          <Button 
            href="mailto:partner@therelocationexpo.com?subject=Exhibitor Package Enquiry"
            variant="outline" 
            size="lg" 
            className="text-lg px-10 py-5"
          >
            Exhibitor Packages
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </Button>
        </div>

        {/* Contact Info */}
        <div className="text-center glass-card p-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-2xl font-bold text-off-white mb-4">Contact Us</h3>
          <p className="text-off-white/80 mb-6">
            If you have questions about the Relocation Expo — tickets, exhibitor options, or event details — our team is here to help.
          </p>
          <div className="space-y-3 text-off-white/90">
            <p>
              <strong className="text-accent-yellow">General Enquiries:</strong>{' '}
              <a href="mailto:info@therelocationexpo.com" className="hover:text-accent-yellow transition-colors">
                info@therelocationexpo.com
              </a>
            </p>
            <p>
              <strong className="text-accent-yellow">Exhibitor & Media Enquiries:</strong>{' '}
              <a href="mailto:partner@therelocationexpo.com" className="hover:text-accent-yellow transition-colors">
                partner@therelocationexpo.com
              </a>
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
