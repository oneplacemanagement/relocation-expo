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
          {/* Google Maps */}
          <Card>
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2383.2959837916243!2d-6.228965884210201!3d53.329971179974755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e8b8f8f8f8f%3A0x8f8f8f8f8f8f8f8f!2sRDS%20Simmonscourt!5e0!3m2!1sen!2sie!4v1620000000000!5m2!1sen!2sie"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RDS Simmonscourt Location Map"
              ></iframe>
            </div>
          </Card>

          {/* Venue Details */}
          <div>
            <h3 className="text-2xl font-bold text-accent-yellow mb-4">
              {eventData.venue}
            </h3>
            <p className="text-off-white/70 mb-2">
              {eventData.address}
            </p>
            <p className="text-lg font-bold text-off-white mb-6">
              📅 {eventData.date} | 🕐 11:30 AM - 5:00 PM
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
