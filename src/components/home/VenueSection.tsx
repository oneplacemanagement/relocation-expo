'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { Calendar, MapPin, Train } from 'lucide-react';

const galleryImages = [
  {
    src: '/images/Reception_files/b322465c4acd45df904fee502d435a56_LARGE!_!0236342884f5cc63be90595fa4e7e88f.jpeg',
    label: 'Reception',
  },
  {
    src: '/images/Hogan Mezzanine_files/7a31f77844a244f0ab9770bce2556ab3_LARGE!_!8409e51bf6888e13cc1e803159910837.jpeg',
    label: 'Hogan Mezzanine',
  },
  {
    src: '/images/Hogan Suite_files/3b6fb3ff32354b49a765d16449bbf5fd_LARGE!_!01d4ec79d4a2daf958d2ef47a34d9548(1).jpeg',
    label: 'Hogan Suite',
  },
  {
    src: '/images/Cusack Suite_files/154e82724ae04cbeabecea3a6ad660a1_LARGE!_!5e2be352b35c4fefb22cc5998309d3ee.jpeg',
    label: 'Davin Suite',
  },
  { src: '/images/Field View.jpg', label: 'Field View' },
  { src: '/images/Small Room View.jpg', label: 'Small Room View' },
];

export function VenueSection() {
  const [modal, setModal] = useState<number | null>(null);

  return (
    <Section id="location" background="dark" className="relative">
      <Container>
        <Reveal className="text-center mb-14">
          <div className="inline-block bg-accent-yellow/15 text-accent-yellow text-xs uppercase tracking-[0.18em] font-bold px-4 py-1.5 rounded-full mb-5">
            Location & Travel
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-black text-off-white mb-4">
            How to find us at <span className="text-accent-yellow">Croke Park</span>.
          </h2>
          <p className="text-lg text-off-white/70 max-w-2xl mx-auto">
            Centrally located, fully accessible, and served by every major Dublin transport line.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          <Reveal>
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-blue-grey/30 aspect-[4/3]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.527964232625!2d-6.249824684161057!3d53.3606949799787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e9d53c0fc71%3A0x7c6c7c6c7c6c7c6c!2sCroke%20Park!5e0!3m2!1sen!2sie!4v1712420000000!5m2!1sen!2sie"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Croke Park, Dublin"
              />
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="space-y-5">
              <div className="bg-off-white/[0.04] border border-blue-grey/30 rounded-2xl p-6">
                <div className="inline-block bg-accent-yellow/15 border border-accent-yellow/30 text-accent-yellow px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest mb-3">
                  Venue Confirmed
                </div>
                <h3 className="font-display text-2xl font-bold text-off-white mb-2">
                  Croke Park Conference Centre
                </h3>
                <p className="text-off-white/70 text-sm leading-relaxed">
                  Ireland&apos;s largest and most prestigious conference and events venue, just minutes from Dublin city centre.
                </p>
              </div>

              <Detail icon={Calendar} title="Sunday 27 September 2026" body="11:00am – 5:30pm · One day only" />
              <Detail icon={MapPin} title="Croke Park, Dublin 3" body="Jones' Road, Drumcondra, Dublin 3, D03 P6K7" />
              <Detail
                icon={Train}
                title="Travel & Accessibility"
                body={
                  <>
                    Wheelchair-accessible. On-site parking. Served by DART, LUAS and Dublin Bus.{' '}
                    <a
                      href="https://crokepark.ie/meetings-events/getting-here"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-yellow underline hover:no-underline"
                    >
                      Travel info →
                    </a>
                  </>
                }
              />
            </div>
          </Reveal>
        </div>

        {/* Gallery */}
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {galleryImages.map((img, i) => (
              <button
                key={img.label}
                type="button"
                onClick={() => setModal(i)}
                className="group relative aspect-square rounded-xl overflow-hidden border border-blue-grey/30 hover:border-accent-yellow/50 transition-colors"
                aria-label={`View ${img.label}`}
              >
                <Image
                  src={img.src}
                  alt={`${img.label}, Croke Park`}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  sizes="(min-width: 1024px) 16vw, (min-width: 768px) 32vw, 48vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 to-transparent p-2">
                  <span className="text-off-white text-[10px] md:text-xs font-medium block">
                    {img.label}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </Reveal>
      </Container>

      {/* Modal */}
      {modal !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy/95 backdrop-blur-sm p-4"
          onClick={() => setModal(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${galleryImages[modal].label}, full size`}
        >
          <div className="relative w-full max-w-5xl aspect-[4/3]">
            <Image
              src={galleryImages[modal].src}
              alt={`${galleryImages[modal].label}, Croke Park`}
              fill
              className="object-contain rounded-2xl"
              sizes="90vw"
            />
          </div>
          <button
            type="button"
            className="absolute top-6 right-6 text-accent-yellow font-bold w-12 h-12 rounded-full border-2 border-accent-yellow/50 hover:bg-accent-yellow hover:text-navy transition-colors flex items-center justify-center text-2xl"
            aria-label="Close"
            onClick={() => setModal(null)}
          >
            ×
          </button>
        </div>
      )}
    </Section>
  );
}

function Detail({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof Calendar;
  title: string;
  body: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-xl bg-accent-yellow/15 border border-accent-yellow/30 flex items-center justify-center text-accent-yellow flex-shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h4 className="font-bold text-off-white">{title}</h4>
        <p className="text-off-white/65 text-sm mt-0.5">{body}</p>
      </div>
    </div>
  );
}
