import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { eventData } from '@/data/event';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | The Relocation Expo',
  description: 'Terms and conditions for attending The Relocation Expo.',
};

export default function TermsPage() {
  return (
    <>
      <Section className="pt-32">
        <Container size="md">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-off-white mb-4">
              Terms & Conditions
            </h1>
            <p className="text-off-white/70">
              Last updated: January 2026
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="space-y-8 text-off-white/80">
              <section>
                <h2 className="text-2xl font-bold text-accent-yellow mb-4">
                  1. Acceptance of Terms
                </h2>
                <p>
                  By registering for and/or attending The Relocation Expo, you agree to be bound by these 
                  Terms and Conditions. If you do not agree with any part of these terms, please do not 
                  register or attend the event.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-accent-yellow mb-4">
                  2. Event Registration
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Ticket prices are as displayed on the <a href="/tickets" className="text-accent-yellow underline hover:no-underline">tickets page</a> and are subject to change prior to the event</li>
                  <li>Pre-registration is strongly recommended to secure your place</li>
                  <li>Walk-in attendees may be admitted subject to capacity limits and ticket availability</li>
                  <li>You must provide accurate information when registering</li>
                  <li>Registration is non-transferable without prior approval</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-accent-yellow mb-4">
                  3. Event Details
                </h2>
                <p>
                  <strong>Date:</strong> {eventData.date}<br />
                  <strong>Time:</strong> {eventData.hours}<br />
                  <strong>Venue:</strong> {eventData.venue}, {eventData.address}
                </p>
                <p className="mt-3">
                  The event organizer reserves the right to change the venue, date, or time if necessary. 
                  Registered attendees will be notified of any changes via email.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-accent-yellow mb-4">
                  4. Disclaimer of Advice
                </h2>
                <p className="mb-3">
                  <strong>IMPORTANT:</strong> Information provided at The Relocation Expo is general in 
                  nature and does not constitute legal, financial, or professional advice.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All visa and migration advice should be verified with licensed professionals</li>
                  <li>Exhibitors are independent businesses and not agents of The Relocation Expo</li>
                  <li>We do not endorse or guarantee any exhibitor's services</li>
                  <li>Attendees are responsible for their own decisions and actions</li>
                  <li>Always confirm visa requirements with official government sources</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-accent-yellow mb-4">
                  5. Code of Conduct
                </h2>
                <p className="mb-3">
                  All attendees are expected to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Behave respectfully toward exhibitors, staff, and other attendees</li>
                  <li>Not engage in harassment, discrimination, or disruptive behavior</li>
                  <li>Follow venue rules and staff instructions</li>
                  <li>Not distribute unauthorized materials or solicit attendees</li>
                </ul>
                <p className="mt-3">
                  We reserve the right to remove anyone who violates this code of conduct. Refunds will be 
                  handled according to the ticket terms and conditions in effect at the time of purchase.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-accent-yellow mb-4">
                  6. Photography and Recording
                </h2>
                <p>
                  By attending the event, you consent to being photographed, filmed, or recorded. These 
                  materials may be used for promotional purposes. If you do not wish to be photographed, 
                  please inform event staff.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-accent-yellow mb-4">
                  7. Liability
                </h2>
                <p>
                  The Relocation Expo organizers, exhibitors, and venue are not liable for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Loss or damage to personal property</li>
                  <li>Personal injury (except where caused by our negligence)</li>
                  <li>Decisions made based on information obtained at the event</li>
                  <li>Actions or services of third-party exhibitors</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-accent-yellow mb-4">
                  8. Cancellation Policy
                </h2>
                <p>
                  If we must cancel or postpone the event due to circumstances beyond our control (force majeure), 
                  we will notify registered attendees as soon as possible. Refund policies will be communicated 
                  based on ticket terms at the time of purchase. We will offer registration for a rescheduled 
                  event where possible.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-accent-yellow mb-4">
                  9. Data Protection
                </h2>
                <p>
                  Your personal data will be processed in accordance with our{' '}
                  <a href="/privacy" className="text-accent-yellow underline hover:no-underline">
                    Privacy Policy
                  </a>. By registering, you consent to the collection and use of your information as described.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-accent-yellow mb-4">
                  10. Changes to Terms
                </h2>
                <p>
                  We reserve the right to update these Terms and Conditions at any time. Changes will be 
                  posted on this page with an updated date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-accent-yellow mb-4">
                  11. Governing Law
                </h2>
                <p>
                  These Terms and Conditions are governed by the laws of Ireland. Any disputes will be 
                  subject to the exclusive jurisdiction of the Irish courts.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-accent-yellow mb-4">
                  12. Contact Information
                </h2>
                <p>
                  For questions about these Terms and Conditions, please contact:
                </p>
                <p className="mt-3">
                  <a href={`mailto:${eventData.contactEmail}`} className="text-accent-yellow underline hover:no-underline">
                    {eventData.contactEmail}
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
