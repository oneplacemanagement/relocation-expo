import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Exhibitor Terms | The Relocation Expo',
  description: 'Terms and conditions for exhibitors, sponsors, and partners at The Relocation Expo 2026.',
};

export default function ExhibitorTermsPage() {
  return (
    <>
      <Section className="pt-32">
        <Container size="md">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-off-white mb-4">
              Exhibitor Terms &amp; Conditions
            </h1>
            <p className="text-off-white/70">Last updated: 9 April 2026</p>
            <p className="text-off-white/60 mt-2 text-sm">
              These terms apply to all exhibitors, sponsors, and partners at The Relocation Expo, operated by Malone Consultancy (ABN 45956177897).
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="space-y-8 text-off-white/80">

              <section>
                <h2 className="text-2xl font-bold text-accent-yellow mb-4">1. Definitions</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>"The Organiser"</strong> means Malone Consultancy (ABN 45956177897), operating under the brand The Relocation Expo</li>
                  <li><strong>"Exhibitor"</strong> means any company, organisation, or individual who has confirmed a stand, sponsorship, or partnership arrangement at the event</li>
                  <li><strong>"The Event"</strong> means The Relocation Expo, taking place on Sunday 27th September 2026 at Croke Park, Dublin</li>
                  <li><strong>"Booking Confirmation"</strong> means the written confirmation issued by the Organiser upon acceptance of an exhibitor application</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-accent-yellow mb-4">2. Application &amp; Booking</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All exhibitor bookings are subject to approval by the Organiser at its sole discretion</li>
                  <li>A booking is confirmed only upon receipt of a Booking Confirmation from the Organiser</li>
                  <li>The Organiser reserves the right to refuse or revoke any booking that does not align with the purpose, audience, or values of The Relocation Expo</li>
                  <li>Exhibitors must accurately describe their business, services, and intended activity at the event at the time of application</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-accent-yellow mb-4">3. Payment Terms</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All fees are as agreed in writing between the Exhibitor and the Organiser</li>
                  <li>Payment is due in full within 14 days of receiving the Booking Confirmation, unless otherwise agreed in writing</li>
                  <li>Failure to pay by the due date may result in the booking being cancelled and the stand being reallocated</li>
                  <li>All prices are inclusive of any applicable taxes unless stated otherwise</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-accent-yellow mb-4">4. Cancellation by the Exhibitor</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>More than 90 days before the event:</strong> Full refund of any fees paid, less a 10% administration fee</li>
                  <li><strong>30–90 days before the event:</strong> 50% of the total booking fee is retained by the Organiser</li>
                  <li><strong>Less than 30 days before the event:</strong> No refund. The full booking fee is retained by the Organiser</li>
                  <li>All cancellations must be made in writing to <a href="mailto:partner@therelocationexpo.com" className="text-accent-yellow underline hover:no-underline">partner@therelocationexpo.com</a></li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-accent-yellow mb-4">5. Cancellation or Postponement by the Organiser</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>If the Organiser cancels the event and it is not rescheduled, Exhibitors will receive a full refund of fees paid within 14 business days</li>
                  <li>If the event is postponed, the Exhibitor's booking will transfer to the rescheduled date. If the Exhibitor is unable to attend the rescheduled date, they may request a full refund within 14 days of the postponement announcement</li>
                  <li>The Organiser will not be liable for any indirect costs incurred by the Exhibitor in connection with a cancellation or postponement (including travel, accommodation, or marketing costs)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-accent-yellow mb-4">6. Stand &amp; Space Allocation</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Stand locations are allocated at the Organiser's discretion. Requests for specific locations will be considered but cannot be guaranteed</li>
                  <li>Exhibitors may not sublet, share, or transfer their stand or space to any third party without prior written consent from the Organiser</li>
                  <li>The Organiser reserves the right to alter the floor plan, stand layout, or allocation as necessary for operational reasons</li>
                  <li>Exhibitors are responsible for their own stand setup, materials, and breakdown within the times notified by the Organiser</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-accent-yellow mb-4">7. Exhibitor Conduct</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Exhibitors must conduct themselves professionally and in a manner consistent with the values and purpose of The Relocation Expo</li>
                  <li>Exhibitors must only promote services that are lawful, accurately represented, and relevant to the event's audience</li>
                  <li>Exhibitors must not engage in misleading, aggressive, or unsolicited approaches to attendees</li>
                  <li>Any exhibitor in breach of this clause may be removed from the event immediately without refund</li>
                  <li>Exhibitors must comply with all venue rules, health and safety requirements, and Irish law</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-accent-yellow mb-4">8. Attendee Data &amp; GDPR</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The Organiser will only share attendee personal data with Exhibitors where the attendee has given explicit consent to such sharing</li>
                  <li>Any attendee data shared by the Organiser must be used solely for the purpose for which consent was obtained and in compliance with GDPR and applicable data protection law</li>
                  <li>Exhibitors must not pass attendee data to any third party without obtaining appropriate consent from the individual</li>
                  <li>Exhibitors are responsible for ensuring their own data collection practices at the event comply with GDPR and applicable law</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-accent-yellow mb-4">9. Liability</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The Organiser is not liable for any loss, damage, theft, or injury relating to the Exhibitor's stand, equipment, materials, or personnel</li>
                  <li>Exhibitors are responsible for their own insurance coverage, including public liability insurance where appropriate</li>
                  <li>The Organiser's total liability to an Exhibitor in respect of any claim shall not exceed the total fees paid by that Exhibitor</li>
                  <li>The Organiser is not responsible for the accuracy, legality, or quality of any services promoted by Exhibitors</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-accent-yellow mb-4">10. Photography &amp; Marketing</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The Organiser may photograph or film the event, including stands and exhibitor representatives, for promotional purposes</li>
                  <li>Exhibitors grant the Organiser permission to reference their company name and logo in event marketing materials, including the website, social media, and promotional collateral</li>
                  <li>Exhibitors must obtain appropriate consent before photographing or filming attendees</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-accent-yellow mb-4">11. Governing Law</h2>
                <p>
                  These Exhibitor Terms &amp; Conditions are governed by the laws of Ireland. Any disputes will be subject to the
                  exclusive jurisdiction of the Irish courts.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-accent-yellow mb-4">12. Contact</h2>
                <p>For all exhibitor and partnership enquiries, please contact:</p>
                <p className="mt-3">
                  <strong>Operated by:</strong> Malone Consultancy (ABN 45956177897)<br />
                  <strong>Brand:</strong> The Relocation Expo<br />
                  <strong>Email:</strong>{' '}
                  <a href="mailto:partner@therelocationexpo.com" className="text-accent-yellow underline hover:no-underline">
                    partner@therelocationexpo.com
                  </a>
                </p>
              </section>

            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
