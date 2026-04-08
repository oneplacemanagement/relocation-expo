
'use client';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { useState } from 'react';
export function VenueSection() {
  return (
    <Section id="location" background="dark">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-off-white mb-4">
            Location
          </h2>
          <p className="text-xl text-off-white/70 max-w-3xl mx-auto">
            The Relocation Expo 2026 takes place at <strong>Croke Park Conference Centre, Dublin</strong> — Ireland’s most iconic event venue, centrally located and fully accessible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Croke Park Map Embed */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-blue-grey/30 min-h-[320px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.527964232625!2d-6.249824684161057!3d53.3606949799787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e9d53c0fc71%3A0x7c6c7c6c7c6c7c6c!2sCroke%20Park!5e0!3m2!1sen!2sie!4v1712420000000!5m2!1sen!2sie"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '320px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Croke Park, Dublin — Expo Location"
              aria-hidden="false"
            />
          </div>

          {/* Location Details */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <div className="inline-block bg-accent-yellow/20 border border-accent-yellow/40 text-accent-yellow px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                Venue Confirmed: Croke Park
              </div>
              <h3 className="text-2xl font-bold text-off-white mb-2">
                Croke Park Conference Centre, Dublin
              </h3>
              <p className="text-off-white/70 leading-relaxed">
                Croke Park is Ireland’s largest and most prestigious conference and events venue, located just minutes from Dublin city centre. The venue is fully wheelchair accessible, with step-free access, accessible restrooms, and priority seating. Extensive on-site parking is available, and the stadium is easily reached by public transport (DART, LUAS, and multiple Dublin Bus routes). For full travel and accessibility details, visit <a href="https://crokepark.ie/meetings-events/getting-here" target="_blank" rel="noopener noreferrer" className="underline text-accent-yellow">crokepark.ie/meetings-events/getting-here</a>.
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
                  <h4 className="font-bold text-off-white">Sunday 27th September 2026</h4>
                  <p className="text-off-white/60 text-sm">Register your interest to be notified first</p>
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
                  <h4 className="font-bold text-off-white">Croke Park, Dublin 3</h4>
                  <p className="text-off-white/60 text-sm">Jones' Road, Drumcondra, Dublin 3, D03 P6K7</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-accent-yellow/20 flex items-center justify-center text-accent-yellow flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-off-white">Travel & Accessibility</h4>
                  <p className="text-off-white/60 text-sm">Fully wheelchair accessible. On-site parking. Served by DART, LUAS, and Dublin Bus. See <a href="https://crokepark.ie/meetings-events/getting-here" target="_blank" rel="noopener noreferrer" className="underline text-accent-yellow">Croke Park travel info</a>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <VenueGallery />
      </Container>
    </Section>
  );
}

// VenueGallery component for clickable images
function VenueGallery() {
  const images = [
    {
      src: '/images/Reception_files/b322465c4acd45df904fee502d435a56_LARGE!_!0236342884f5cc63be90595fa4e7e88f.jpeg',
      label: 'Reception',
    },
    {
      src: '/images/Hogan Mezzanine_files/7a31f77844a244f0ab9770bce2556ab3_LARGE!_!8409e51bf6888e13cc1e803159910837.jpeg',
      label: 'Hogan Mezzanine & Foyer',
    },
    {
      src: '/images/Hogan Suite_files/3b6fb3ff32354b49a765d16449bbf5fd_LARGE!_!01d4ec79d4a2daf958d2ef47a34d9548(1).jpeg',
      label: 'Hogan Suite',
    },
    {
      src: '/images/Cusack Suite_files/154e82724ae04cbeabecea3a6ad660a1_LARGE!_!5e2be352b35c4fefb22cc5998309d3ee.jpeg',
      label: 'Cusack Suite',
    },
    {
      src: '/images/Field View.jpg',
      label: 'Field View',
    },
    {
      src: '/images/Small Room View.jpg',
      label: 'Small Room View',
    },
  ];
  const [modal, setModal] = useState<number|null>(null);
  return (
    <>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((img, i) => (
          <div
            key={img.label}
            className="rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
            onClick={() => setModal(i)}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setModal(i)}
            role="button"
            tabIndex={0}
            aria-label={`View ${img.label}`}
          >
            <img src={img.src} alt={img.label + ', Croke Park'} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200 opacity-80" style={{background: 'transparent'}} />
          </div>
        ))}
      </div>
      {modal !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/90 bg-opacity-90" onClick={() => setModal(null)}>
          <img src={images[modal].src} alt={images[modal].label + ', Croke Park'} className="max-w-3xl max-h-[80vh] rounded-2xl shadow-2xl border-4 border-accent-yellow opacity-90" style={{background: 'transparent'}} />
          <button className="absolute top-8 right-8 text-3xl text-accent-yellow font-bold" aria-label="Close" onClick={() => setModal(null)}>&times;</button>
        </div>
      )}
    </>
  );
}

