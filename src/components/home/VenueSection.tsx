import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { eventData } from '@/data/event';

export function VenueSection() {
  return (
    <Section background="dark">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-off-white mb-4">
            Venue & Location
          </h2>
          <p className="text-xl text-off-white/70 max-w-3xl mx-auto">
            Easy to reach by car or public transport.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Map Placeholder */}
          <Card>
            <div className="aspect-video bg-blue-grey/10 rounded-lg flex items-center justify-center">
              <div className="text-center p-8">
                <svg className="w-16 h-16 mx-auto mb-4 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-off-white/70 text-sm">
                  Map embed placeholder<br />
                  (Add Google Maps iframe or embed here)
                </p>
              </div>
            </div>
          </Card>

          {/* Venue Details */}
          <div>
            <h3 className="text-2xl font-bold text-accent-yellow mb-4">
              {eventData.venue}
            </h3>
            <p className="text-off-white/70 mb-6">
              {eventData.address}
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-bold text-off-white mb-2">
                  🚗 By Car
                </h4>
                <p className="text-off-white/70 text-sm">
                  On-site parking available at the RDS. Arrive early for best availability.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-off-white mb-2">
                  🚊 By Public Transport
                </h4>
                <p className="text-off-white/70 text-sm">
                  <strong>DART:</strong> Sandymount Station (10-min walk)<br />
                  <strong>Bus:</strong> Routes 4, 7, 8, 18 stop nearby
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-off-white mb-2">
                  ♿ Accessibility
                </h4>
                <p className="text-off-white/70 text-sm">
                  The venue is fully wheelchair accessible. Contact us if you require assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
