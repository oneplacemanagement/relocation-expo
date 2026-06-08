import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { eventData } from '@/data/event';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | The Relocation Expo',
  description: 'Privacy policy for The Relocation Expo - how we collect, use, store, and protect your personal information.',
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
            <p className="text-off-white/70">Last updated: 9 April 2026</p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="space-y-8 text-off-white/80">

              <section>
                <p>
                  The Relocation Expo is operated by Malone Consultancy WA Pty Ltd (ABN 14697839642) ("we," "us," or "our") and is committed
                  to protecting your privacy and handling your personal information responsibly.
                </p>
                <p className="mt-3">This Privacy Policy explains how we collect, use, store, disclose, and protect your personal
                  information when you:</p>
                <ul className="list-disc pl-6 space-y-1 mt-3">
                  <li>register your interest in The Relocation Expo</li>
                  <li>purchase tickets</li>
                  <li>attend our event</li>
                  <li>contact us through our website, social channels, or email</li>
                  <li>otherwise engage with our services</li>
                </ul>
                <p className="mt-3">
                  By using our website or submitting your information, you acknowledge the terms of this Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-accent-yellow mb-4">1. Information We Collect</h2>
                <p className="mb-3">We may collect the following personal information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Contact Information:</strong> Full name, email address, and phone number (if provided)</li>
                  <li><strong>Professional Information:</strong> Occupation, job title, industry or sector</li>
                  <li><strong>Location Information:</strong> Current country of residence</li>
                  <li><strong>Relocation Information:</strong> Your relocation interests, intended destination, visa or sponsorship
                    interests, and any questions or preferences you provide</li>
                  <li><strong>Event Registration Information:</strong> Ticket purchase details, attendance details, and other
                    event-related information where applicable</li>
                  <li><strong>Consent Records:</strong> Records of any consent you provide, including the date and time of submission</li>
                  <li><strong>Technical Information:</strong> IP address, browser type, device type, and other website-related
                    technical data that may be collected automatically by our website platform, form provider, or ticketing provider</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-accent-yellow mb-4">2. How We Use Your Information</h2>
                <p className="mb-3">We may use your personal information for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To process and manage your expression of interest, event registration, or ticket purchase</li>
                  <li>To contact you regarding ticket availability, event updates, schedule changes, and important announcements</li>
                  <li>To provide information relevant to your relocation or employment interests</li>
                  <li>To improve our website, event planning, communications, and future offerings</li>
                  <li>To manage customer service enquiries and respond to questions submitted through our website or social channels</li>
                  <li>To administer the event and related services</li>
                  <li>To comply with legal or regulatory obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-accent-yellow mb-4">3. Legal Basis for Processing (GDPR)</h2>
                <p className="mb-3">
                  Where the General Data Protection Regulation (GDPR) applies, we process your personal information on one or
                  more of the following legal bases:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Consent</strong> - where you have given us permission to contact you or use your information for a
                    specific purpose (for example, registering interest or opting in to exhibitor contact)</li>
                  <li><strong>Contract</strong> - where processing is necessary to fulfil a contract with you (for example,
                    ticket purchases or event attendance)</li>
                  <li><strong>Legitimate Interests</strong> - where processing is necessary for our legitimate business interests
                    in operating, promoting, improving, and administering The Relocation Expo, provided those interests do not
                    override your rights</li>
                  <li><strong>Legal Obligation</strong> - where we are required to process your information to comply with
                    applicable laws or regulations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-accent-yellow mb-4">4. Sharing Your Information</h2>
                <p className="mb-3">We may share your personal information with:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Service Providers:</strong> Trusted third-party providers who support our website, forms, email
                    communications, ticketing systems, event operations, and hosting services</li>
                  <li><strong>Exhibitors, Recruiters or Sponsors:</strong> We will only share your personal information with
                    relevant exhibitors, recruiters, or sponsors where you have given clear and explicit consent, or where you
                    choose to provide your information directly to them at the event</li>
                  <li><strong>Professional Advisers or Authorities:</strong> Where necessary to comply with legal obligations,
                    enforce our rights, or respond to lawful requests from government, regulatory, or legal authorities</li>
                </ul>
                <p className="mt-3">We do not sell your personal information to third parties.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-accent-yellow mb-4">5. International Data Transfers</h2>
                <p>
                  As The Relocation Expo may engage with attendees, exhibitors, and service providers in multiple countries,
                  your personal information may be stored or processed outside your country of residence, including in Australia,
                  Ireland, the United Kingdom, or other jurisdictions used by our service providers.
                </p>
                <p className="mt-3">
                  Where required by applicable law, we will take reasonable steps to ensure that appropriate safeguards are in
                  place to protect your personal information when transferred internationally.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-accent-yellow mb-4">6. Data Retention</h2>
                <p>
                  We retain your personal information only for as long as reasonably necessary to fulfil the purposes outlined
                  in this Privacy Policy, including managing event enquiries, registrations, ticketing, communications,
                  and post-event administration, unless a longer retention period is required or permitted by law.
                </p>
                <p className="mt-3">If you register your interest for tickets or updates, we may retain your information until:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>you unsubscribe from communications</li>
                  <li>you request deletion of your information</li>
                  <li>we determine the information is no longer required for legitimate event-related purposes</li>
                </ul>
                <p className="mt-3">
                  When your personal information is no longer required, we will take reasonable steps to securely delete or
                  anonymise it.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-accent-yellow mb-4">7. Your Rights</h2>
                <p className="mb-3">
                  Depending on your location and applicable law, you may have rights in relation to your personal information,
                  including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Right of Access</strong> - request a copy of the personal data we hold about you</li>
                  <li><strong>Right to Rectification</strong> - request correction of inaccurate or incomplete information</li>
                  <li><strong>Right to Erasure</strong> - request deletion of your personal data</li>
                  <li><strong>Right to Restrict Processing</strong> - request that we limit how we use your information</li>
                  <li><strong>Right to Data Portability</strong> - request your data in a structured, machine-readable format</li>
                  <li><strong>Right to Object</strong> - object to certain types of processing</li>
                  <li><strong>Right to Withdraw Consent</strong> - withdraw consent at any time where we rely on consent as the
                    legal basis for processing</li>
                </ul>
                <p className="mt-3">
                  To exercise any of these rights, please contact us at{' '}
                  <a href={`mailto:${eventData.contactEmail}`} className="text-accent-yellow underline hover:no-underline">
                    {eventData.contactEmail}
                  </a>.
                </p>
                <p className="mt-3">
                  You also have the right to lodge a complaint with your local data protection authority where applicable.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-accent-yellow mb-4">8. Cookies and Website Technologies</h2>
                <p>
                  Our website may use essential cookies and similar technologies necessary for core functionality, such as form
                  submissions, page security, and basic website operation.
                </p>
                <p className="mt-3">
                  If we use non-essential cookies or similar technologies in future (including analytics or marketing tools), we
                  will update this Privacy Policy and, where required by law, request your consent before those technologies are
                  activated.
                </p>
                <p className="mt-3">You can manage or clear cookies through your browser settings at any time.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-accent-yellow mb-4">9. Security</h2>
                <p>
                  We take reasonable technical and organisational measures to protect your personal information against
                  unauthorised access, misuse, loss, disclosure, alteration, or destruction.
                </p>
                <p className="mt-3">
                  However, no method of transmission over the internet or electronic storage is completely secure. While we take
                  appropriate precautions, we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-accent-yellow mb-4">10. Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites, including exhibitor, sponsor, recruiter, or partner
                  websites.
                </p>
                <p className="mt-3">
                  We are not responsible for the privacy practices, content, or security of those external websites. We encourage
                  you to review their privacy policies before providing any personal information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-accent-yellow mb-4">11. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes to our services, legal obligations, or
                  business practices.
                </p>
                <p className="mt-3">
                  Any updates will be posted on this page with a revised "Last updated" date. We encourage you to review this
                  policy periodically.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-accent-yellow mb-4">12. Contact Us</h2>
                <p>
                  If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information,
                  please contact us at:
                </p>
                <p className="mt-3">
                  <strong>Operated by:</strong> Malone Consultancy WA Pty Ltd (ABN 14697839642)<br />
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
