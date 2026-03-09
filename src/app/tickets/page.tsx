'use client';

import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { InterestModal } from '@/components/ui/InterestModal';
import { useState } from 'react';

export default function TicketsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState('');

  const openModal = (ticketType: string) => {
    setSelectedTicket(ticketType);
    setIsModalOpen(true);
  };
  return (
    <>
      <InterestModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        ticketType={selectedTicket}
      />
      
      <Section className="pt-24" background="dark">
        <Container>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-off-white mb-4">
              Early Bird Pricing
            </h1>
            <p className="text-xl text-off-white/80 max-w-3xl mx-auto mb-4">
              Secure your spot at The Relocation Expo 2026 — October 3, RDS Dublin
            </p>
            <div className="inline-block bg-accent-yellow text-navy px-6 py-3 rounded-full font-bold text-lg">
              Tickets Available from 1st May 2026
            </div>
          </div>

          {/* Early Bird Tickets */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <div className="inline-block bg-accent-yellow/20 border-2 border-accent-yellow text-accent-yellow px-6 py-2 rounded-full font-bold mb-4">
                LIMITED AVAILABILITY
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-off-white mb-2">
                Early Bird Tickets
              </h2>
              <p className="text-off-white/80">Save €15 compared to standard pricing — register your interest now!</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-navy text-off-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Ticket Type</th>
                    <th className="px-6 py-4 text-left">Description</th>
                    <th className="px-6 py-4 text-right">Price (€)</th>
                    <th className="px-6 py-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-muted-grey/20">
                    <td className="px-6 py-4 font-semibold text-navy">Early Bird Single</td>
                    <td className="px-6 py-4 text-muted-grey">1 adult</td>
                    <td className="px-6 py-4 text-right text-navy font-bold text-lg">€15</td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => openModal('Early Bird Single - €15')}
                        className="bg-accent-yellow text-navy font-semibold px-4 py-2 rounded-lg hover:bg-accent-yellow/90 transition-colors text-sm whitespace-nowrap"
                      >
                        Register Interest
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b border-muted-grey/20 bg-accent-yellow/5">
                    <td className="px-6 py-4 font-semibold text-navy">Early Bird Couple</td>
                    <td className="px-6 py-4 text-muted-grey">2 adults</td>
                    <td className="px-6 py-4 text-right text-navy font-bold text-lg">€25</td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => openModal('Early Bird Couple - €25')}
                        className="bg-accent-yellow text-navy font-semibold px-4 py-2 rounded-lg hover:bg-accent-yellow/90 transition-colors text-sm whitespace-nowrap"
                      >
                        Register Interest
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-navy">Early Bird Family Pass</td>
                    <td className="px-6 py-4 text-muted-grey">2 adults + 3 children</td>
                    <td className="px-6 py-4 text-right text-navy font-bold text-lg">€35</td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => openModal('Early Bird Family Pass - €35')}
                        className="bg-accent-yellow text-navy font-semibold px-4 py-2 rounded-lg hover:bg-accent-yellow/90 transition-colors text-sm whitespace-nowrap"
                      >
                        Register Interest
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Important Info */}
          <div className="bg-navy/30 border border-accent-yellow/30 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-off-white mb-4">Important Information</h3>
            <ul className="space-y-3 text-off-white/80">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-accent-yellow mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong className="text-off-white">Tickets launch 1st May 2026</strong> — Register your interest to be notified</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-accent-yellow mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong className="text-off-white">Early Bird tickets</strong> are limited and will sell fast</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-accent-yellow mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong className="text-off-white">Family Pass</strong> covers 2 adults + up to 3 children (under 16)</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-accent-yellow mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Save <strong className="text-off-white">€15 per ticket</strong> with Early Bird pricing</span>
              </li>
            </ul>
          </div>

          <div className="text-center mt-12">
            <p className="text-off-white/80 mb-6">
              Questions about tickets? Contact us at{' '}
              <a href="mailto:info@therelocationexpo.com" className="text-accent-yellow hover:underline">
                info@therelocationexpo.com
              </a>
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}