import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { eventData } from '@/data/event';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | The Relocation Expo',
  description: 'Privacy policy for The Relocation Expo - how we collect, use, and protect your personal data.',
};

export default function PrivacyPage() {
  return (
    <>
      <Section className="pt-32">
        <Container size="md">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-off-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-off-white/70">
              Last updated: January 2026
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="space-y-8 text-off-white/80">
              <section>
                <h2 className="text-2xl font-bold text-accent-yellow mb-4">
                  1. Introduction
                </h2>
                <p>
                  The Relocation Expo is operated by Malone Consultancy (ABN 45956177897) ("we," "us," or "our") and is committed to protecting your privacy.
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                  when you register for or attend our event.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-accent-yellow mb-4">
                  2. Information We Collect
                </h2>
                <p className="mb-3">
                  We collect the following personal information when you register for the event:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Contact Information:</strong> Full name, email address, and phone number (optional)</li>
                  <li><strong>Preferences:</strong> Your destination interest and any questions or requirements you provide</li>
                  <li><strong>Consent Records:</strong> Timestamp and record of your consent to be contacted</li>
                  <li><strong>Technical Data:</strong> IP address, browser type, and device information (automatically collected)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-accent-yellow mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="mb-3">
                  We use your personal information for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To process your event registration and send you confirmation details</li>
                  <li>To communicate event updates, schedule changes, and important announcements</li>
                  <li>To connect you with relevant exhibitors based on your destination interest</li>
                  <li>To improve our event planning and future offerings</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-accent-yellow mb-4">
                  4. Sharing Your Information
                </h2>
                <p className="mb-3">
                  We may share your information with:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Exhibitors:</strong> With your explicit consent, we may share your contact details with 
                  exhibitors relevant to your destination interest</li>
                  <li><strong>Service Providers:</strong> Third-party vendors who assist in event management, email 
                  communications, and website hosting</li>
                  <li><strong>Legal Requirements:</strong> When required by law, regulation, or legal process</li>
                </ul>
                <p className="mt-3">
                  We will never sell your personal information to third parties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-accent-yellow mb-4">
                  5. Data Retention
                </h2>
                <p>
                  We retain your personal information for as long as necessary to fulfill the purposes outlined 
                  in this Privacy Policy, unless a longer retention period is required or permitted by law. 
                  Registration data is retained until you request deletion or it is no longer required for 
                  our event purposes, after which it will be securely deleted. You may request deletion at 
                  any time by contacting us at the email address below.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-accent-yellow mb-4">
                  6. Your Rights (GDPR Compliance)
                </h2>
                <p className="mb-3">
                  Under the General Data Protection Regulation (GDPR), you have the following rights:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Right of Access:</strong> Request a copy of the personal data we hold about you</li>
                  <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data</li>
                  <li><strong>Right to Erasure:</strong> Request deletion of your personal data ("right to be forgotten")</li>
                  <li><strong>Right to Restrict Processing:</strong> Request limitation on how we use your data</li>
                  <li><strong>Right to Data Portability:</strong> Receive your data in a structured, machine-readable format</li>
                  <li><strong>Right to Object:</strong> Object to processing of your personal data</li>
                  <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time (without affecting prior processing)</li>
                </ul>
                <p className="mt-3">
                  To exercise any of these rights, please contact us at{' '}
                  <a href={`mailto:${eventData.contactEmail}`} className="text-accent-yellow underline hover:no-underline">
                    {eventData.contactEmail}
                  </a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-accent-yellow mb-4">
                  7. Cookies and Tracking
                </h2>
                <p>
                  Our website uses only essential cookies required for proper functionality. We do not use 
                  tracking, analytics, or advertising cookies. You can manage or clear cookies at any time 
                  through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-accent-yellow mb-4">
                  8. Security
                </h2>
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal 
                  information from unauthorized access, disclosure, alteration, or destruction. However, no method 
                  of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-accent-yellow mb-4">
                  9. Third-Party Links
                </h2>
                <p>
                  Our website may contain links to third-party websites (e.g., exhibitor websites). We are not 
                  responsible for the privacy practices of these external sites. We encourage you to review their 
                  privacy policies before providing any personal information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-accent-yellow mb-4">
                  10. Changes to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page 
                  with an updated "Last updated" date. We encourage you to review this policy periodically.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-accent-yellow mb-4">
                  11. Contact Us
                </h2>
                <p>
                  If you have questions, concerns, or requests regarding this Privacy Policy or your personal 
                  data, please contact us at:
                </p>
                <p className="mt-3">
                  <strong>Operated by:</strong> Malone Consultancy (ABN 45956177897)<br />
                  <strong>Brand:</strong> The Relocation Expo<br />
                  <strong>Email:</strong>{' '}
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
