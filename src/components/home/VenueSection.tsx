import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';

export function VenueSection() {
  return (
    <Section background="dark">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-off-white mb-4">
            Location
          </h2>
          <p className="text-xl text-off-white/70 max-w-3xl mx-auto">
            The Relocation Expo 2026 takes place at a premium venue in Dublin — full details to be announced.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Dublin Map Embed */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-blue-grey/30 min-h-[320px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38132.004675083145!2d-6.3196165!3d53.3340285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e9d53c0fc71%3A0xf00c1ddb93b8cd8c!2sDublin%2C%20Ireland!5e0!3m2!1sen!2sie!4v1711000000000!5m2!1sen!2sie"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '320px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dublin, Ireland — Expo Location"
              aria-hidden="false"
            />
          </div>

          {/* Location Details */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <div className="inline-block bg-accent-yellow/20 border border-accent-yellow/40 text-accent-yellow px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                Venue announcement coming soon
              </div>
              <h3 className="text-2xl font-bold text-off-white mb-2">
                Dublin, Ireland
              </h3>
              <p className="text-off-white/70 leading-relaxed">
                The expo will be held at a premium, centrally located Dublin venue — easily accessible by public transport and road from across Ireland and the UK.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-accent-yellow/20 flex items-center justify-center text-accent-yellow flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-off-white">Autumn 2026</h4>
                  <p className="text-off-white/60 text-sm">Exact date to be confirmed — register your interest to be notified first</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-accent-yellow/20 flex items-center justify-center text-accent-yellow flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-off-white">Central Dublin</h4>
                  <p className="text-off-white/60 text-sm">Accessible from across Ireland and easily reachable from the UK</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-accent-yellow/20 flex items-center justify-center text-accent-yellow flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-off-white">Full Details Coming Soon</h4>
                  <p className="text-off-white/60 text-sm">Venue, parking, transport links and accessibility info will be published ahead of the event</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
