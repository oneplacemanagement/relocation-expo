'use client';

import { useState } from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

interface TimeSlot {
  time: string;
  available: number;
}

export function ConsultationBookingSection() {
  const [selectedExhibitor, setSelectedExhibitor] = useState<string>('');
  const [selectedSlot, setSelectedSlot] = useState<string>('');

  const exhibitors = [
    { id: 'australia-experts', name: 'Australia Migration Experts', specialty: 'Skilled Migration & Working Holiday' },
    { id: 'canada-pathways', name: 'Canada Pathways', specialty: 'Express Entry & PNP' },
    { id: 'nz-visa-pros', name: 'NZ Visa Professionals', specialty: 'Work Visas & Residence' },
    { id: 'global-relocate', name: 'Global Relocate', specialty: 'Multi-Country Options' },
    { id: 'study-abroad-hub', name: 'Study Abroad Hub', specialty: 'Student Visas & Pathways' },
    { id: 'family-visa-centre', name: 'Family Visa Centre', specialty: 'Partner & Family Visas' },
  ];

  const timeSlots: TimeSlot[] = [
    { time: '10:00 AM', available: 3 },
    { time: '10:30 AM', available: 5 },
    { time: '11:00 AM', available: 2 },
    { time: '11:30 AM', available: 4 },
    { time: '12:00 PM', available: 1 },
    { time: '12:30 PM', available: 0 },
    { time: '1:00 PM', available: 3 },
    { time: '1:30 PM', available: 6 },
    { time: '2:00 PM', available: 4 },
    { time: '2:30 PM', available: 5 },
    { time: '3:00 PM', available: 3 },
    { time: '3:30 PM', available: 2 },
  ];

  return (
    <Section>
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">
            Book Your Consultation Slot
          </h2>
          <p className="text-xl text-muted-grey max-w-3xl mx-auto">
            Pre-book one-on-one consultations with migration experts. Limited spots available!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Exhibitor Selection */}
          <div>
            <h3 className="text-2xl font-bold text-navy mb-6 flex items-center">
              <span className="bg-accent-yellow text-navy w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold">
                1
              </span>
              Choose Your Expert
            </h3>
            <div className="space-y-4">
              {exhibitors.map((exhibitor) => (
                <div
                  key={exhibitor.id}
                  onClick={() => setSelectedExhibitor(exhibitor.id)}
                >
                  <Card
                    hover
                    className={`cursor-pointer transition-all ${
                      selectedExhibitor === exhibitor.id
                        ? 'ring-2 ring-accent-yellow bg-accent-yellow/10'
                        : ''
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-bold text-navy mb-1">{exhibitor.name}</h4>
                        <p className="text-sm text-muted-grey">{exhibitor.specialty}</p>
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        selectedExhibitor === exhibitor.id
                          ? 'border-accent-yellow bg-accent-yellow'
                          : 'border-muted-grey'
                      }`}>
                        {selectedExhibitor === exhibitor.id && (
                          <svg className="w-4 h-4 text-navy" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Time Slot Selection */}
          <div>
            <h3 className="text-2xl font-bold text-navy mb-6 flex items-center">
              <span className="bg-accent-yellow text-navy w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold">
                2
              </span>
              Pick Your Time
            </h3>
            
            {!selectedExhibitor ? (
              <Card className="text-center py-12">
                <svg className="w-16 h-16 text-muted-grey mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-muted-grey">Please select an exhibitor first to see available time slots</p>
              </Card>
            ) : (
              <div>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot.time}
                      onClick={() => slot.available > 0 && setSelectedSlot(slot.time)}
                      disabled={slot.available === 0}
                      className={`p-4 rounded-xl border-2 text-left transition-all ${
                        slot.available === 0
                          ? 'border-muted-grey/30 bg-muted-grey/10 opacity-50 cursor-not-allowed'
                          : selectedSlot === slot.time
                          ? 'border-accent-yellow bg-accent-yellow/10'
                          : 'border-blue-grey/30 hover:border-accent-yellow/50 bg-white'
                      }`}
                    >
                      <div className="font-bold text-navy mb-1">{slot.time}</div>
                      <div className={`text-xs ${
                        slot.available === 0
                          ? 'text-red-500'
                          : slot.available <= 2
                          ? 'text-orange-500'
                          : 'text-green-600'
                      }`}>
                        {slot.available === 0
                          ? '❌ Fully Booked'
                          : slot.available <= 2
                          ? `⚠️ ${slot.available} spots left`
                          : `✅ ${slot.available} spots available`
                        }
                      </div>
                    </button>
                  ))}
                </div>

                {selectedSlot && (
                  <Card className="bg-gradient-to-r from-accent-yellow/20 to-yellow-400/20 border-accent-yellow">
                    <div className="text-center">
                      <h4 className="font-bold text-navy mb-2">Ready to Book?</h4>
                      <p className="text-sm text-navy/80 mb-4">
                        <strong>{exhibitors.find(e => e.id === selectedExhibitor)?.name}</strong>
                        <br />
                        at <strong>{selectedSlot}</strong> on October 3, 2026
                      </p>
                      <Button href="/#register" className="w-full">
                        Reserve This Slot
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                      </Button>
                      <p className="text-xs text-navy/60 mt-3">
                        🔒 Secure your registration to confirm your consultation
                      </p>
                    </div>
                  </Card>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Info Banner */}
        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="bg-blue-grey/10 border-blue-grey/30">
            <div className="flex items-start space-x-4">
              <div className="bg-accent-yellow/20 p-3 rounded-full flex-shrink-0">
                <svg className="w-6 h-6 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-navy mb-2">How Consultations Work</h4>
                <ul className="text-sm text-navy/80 space-y-1">
                  <li>✅ <strong>15-minute slots</strong> with registered migration agents</li>
                  <li>✅ <strong>Free initial assessment</strong> of your eligibility</li>
                  <li>✅ <strong>First-come, first-served</strong> — register early to secure premium times</li>
                  <li>✅ <strong>Walk-ins welcome</strong> but pre-booked slots get priority</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
