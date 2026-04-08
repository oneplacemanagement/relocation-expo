import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';

export function WhatMakesDifferentSection() {
  // Hogan Suite image as background
  const backgroundUrl = "/images/Hogan Suite_files/3b6fb3ff32354b49a765d16449bbf5fd_LARGE!_!01d4ec79d4a2daf958d2ef47a34d9548(1).jpeg";
  const highlights = [
    'Main-stage speakers sharing their real relocation journeys',
    'Honest insights on what works, what doesn\'t, and what they wish they knew',
    'Practical tips on saving money, avoiding delays, and navigating the process smoothly',
    'Industry-specific sessions covering job demand, sponsorship, and career pathways',
    'Lifestyle deep-dives into different Australian states and cities',
    'A curated mix of employers, migration experts, relocation services, and training providers',
    'A welcoming, supportive environment built around real outcomes',
  ];

  return (
    <Section
      background="dark"
      backgroundImage={backgroundUrl}
      backgroundImageAlt="Hogan Suite, Croke Park"
    >
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-off-white mb-4">
            What Makes the Relocation Expo Different
          </h2>
          <p className="text-2xl text-accent-yellow max-w-3xl mx-auto font-semibold">
            Real Stories. Real People. Real Advice.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-xl text-off-white/80 text-center leading-relaxed">
            This isn't a generic careers fair — it's a full relocation ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {highlights.map((highlight, index) => (
            <Card key={index} className="flex items-start space-x-3">
              <svg className="w-6 h-6 text-accent-yellow flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-off-white/90">{highlight}</span>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
