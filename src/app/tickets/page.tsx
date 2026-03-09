import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function TicketsPage() {
  return (
    <>
      <Section className="pt-24">
        <Container>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-navy mb-4">
              Get Your Tickets
            </h1>
            <p className="text-xl text-muted-grey max-w-3xl mx-auto">
              Secure your spot at The Relocation Expo 2026 — October 3, RDS Dublin
            </p>
          </div>

          {/* Early Bird Tickets */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <div className="inline-block bg-accent-yellow text-navy px-6 py-2 rounded-full font-bold mb-4">
                LIMITED AVAILABILITY
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">
                Early Bird Tickets
              </h2>
              <p className="text-muted-grey">Save up to €15 — book now before they're gone!</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-navy text-off-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Ticket Type</th>
                    <th className="px-6 py-4 text-left">Description</th>
                    <th className="px-6 py-4 text-right">Price (€)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-muted-grey/20">
                    <td className="px-6 py-4 font-semibold text-navy">Early Bird Single</td>
                    <td className="px-6 py-4 text-muted-grey">1 adult</td>
                    <td className="px-6 py-4 text-right text-navy font-bold text-lg">€15</td>
                  </tr>
                  <tr className="border-b border-muted-grey/20 bg-accent-yellow/5">
                    <td className="px-6 py-4 font-semibold text-navy">Early Bird Couple</td>
                    <td className="px-6 py-4 text-muted-grey">2 adults</td>
                    <td className="px-6 py-4 text-right text-navy font-bold text-lg">€25</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-navy">Early Bird Family Pass</td>
                    <td className="px-6 py-4 text-muted-grey">2 adults + 3 children</td>
                    <td className="px-6 py-4 text-right text-navy font-bold text-lg">€35</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-center mt-8">
              <Button size="lg" href="mailto:info@therelocationexpo.com?subject=Early Bird Ticket Purchase">
                Purchase Early Bird Tickets
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
            </div>
          </div>

          {/* Standard Tickets */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">
                Standard Tickets
              </h2>
              <p className="text-muted-grey">Opens after Early Bird ends</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-blue-grey text-off-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Ticket Type</th>
                    <th className="px-6 py-4 text-left">Description</th>
                    <th className="px-6 py-4 text-right">Price (€)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-muted-grey/20">
                    <td className="px-6 py-4 font-semibold text-navy">General Admission – Single</td>
                    <td className="px-6 py-4 text-muted-grey">1 adult</td>
                    <td className="px-6 py-4 text-right text-navy font-bold text-lg">€20</td>
                  </tr>
                  <tr className="border-b border-muted-grey/20">
                    <td className="px-6 py-4 font-semibold text-navy">General Admission – Couple</td>
                    <td className="px-6 py-4 text-muted-grey">2 adults</td>
                    <td className="px-6 py-4 text-right text-navy font-bold text-lg">€30</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-navy">General Admission – Family Pass</td>
                    <td className="px-6 py-4 text-muted-grey">2 adults + 3 children</td>
                    <td className="px-6 py-4 text-right text-navy font-bold text-lg">€45</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Walk-In Tickets */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">
                Walk-In on The Day
              </h2>
              <p className="text-muted-grey">Cash only — priced higher than online tickets</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-muted-grey text-off-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Ticket Type</th>
                    <th className="px-6 py-4 text-left">Description</th>
                    <th className="px-6 py-4 text-right">Price (€)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-muted-grey/20">
                    <td className="px-6 py-4 font-semibold text-navy">Walk-In Single</td>
                    <td className="px-6 py-4 text-muted-grey">1 adult</td>
                    <td className="px-6 py-4 text-right text-navy font-bold text-lg">€30</td>
                  </tr>
                  <tr className="border-b border-muted-grey/20">
                    <td className="px-6 py-4 font-semibold text-navy">Walk-In Couple</td>
                    <td className="px-6 py-4 text-muted-grey">2 adults</td>
                    <td className="px-6 py-4 text-right text-navy font-bold text-lg">€45</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-navy">Walk-In Family Pass</td>
                    <td className="px-6 py-4 text-muted-grey">2 adults + 3 children</td>
                    <td className="px-6 py-4 text-right text-navy font-bold text-lg">€60</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Important Info */}
          <div className="bg-blue-grey/10 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-navy mb-4">Important Information</h3>
            <ul className="space-y-3 text-navy/80">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-accent-yellow mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Early Bird tickets</strong> are limited and sell fast</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-accent-yellow mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Family Pass</strong> covers 2 adults + up to 3 children (under 16)</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-accent-yellow mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Walk-in tickets</strong> are cash only and priced higher</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-accent-yellow mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Book early to <strong>save up to €15 per ticket</strong></span>
              </li>
            </ul>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-grey mb-6">
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
