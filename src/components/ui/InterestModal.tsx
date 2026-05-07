'use client';

import { FormEvent, useState, useEffect } from 'react';

interface InterestModalProps {
  isOpen: boolean;
  onClose: () => void;
  ticketType: string;
}

const TICKET_OPTIONS = [
  { label: 'Single — €15', value: 'Early Bird Single - €15' },
  { label: 'Couple — €25', value: 'Early Bird Couple - €25' },
  { label: 'Family Pass — €35 (2 adults + 3 children)', value: 'Early Bird Family Pass - €35' },
];

function deriveTicketValue(ticketType: string): string {
  const match = TICKET_OPTIONS.find((o) => o.value === ticketType);
  return match ? match.value : TICKET_OPTIONS[0].value;
}

export function InterestModal({ isOpen, onClose, ticketType }: InterestModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    occupation: '',
    nationality: '',
    nationalityOther: '',
    yearOfBirth: '',
    selectedTicket: deriveTicketValue(ticketType),
    phone: '',
  });
  const [consentMarketing, setConsentMarketing] = useState(false);
  const [consentExhibitor, setConsentExhibitor] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // When a different ticket button is clicked, update the dropdown to match
  useEffect(() => {
    setFormData((prev) => ({ ...prev, selectedTicket: deriveTicketValue(ticketType) }));
  }, [ticketType]);

  // Sync selectedTicket when ticketType prop changes (i.e. different button clicked)
  const initialTicket = deriveTicketValue(ticketType);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: `Ticket Interest - ${formData.selectedTicket}`,
          message: [
            `Ticket Type: ${formData.selectedTicket}`,
            `Currently Based: ${formData.nationality === 'Other' ? `Other — ${formData.nationalityOther}` : formData.nationality}`,
            `Occupation: ${formData.occupation}`,
            `Year of Birth: ${formData.yearOfBirth}`,
            `Phone: ${formData.phone || 'Not provided'}`,
            `Marketing Consent: ${consentMarketing ? 'Yes' : 'No'}`,
            `Exhibitor Sharing Consent: ${consentExhibitor ? 'Yes' : 'No'}`,
          ].join('\n'),
        }),
      });

      const result = await response.json();

      if (!response.ok || result.success === false) {
        throw new Error(result.message || 'Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', occupation: '', nationality: '', nationalityOther: '', yearOfBirth: '', selectedTicket: initialTicket, phone: '' });
      setConsentMarketing(false);
      setConsentExhibitor(false);

      setTimeout(() => {
        onClose();
        setStatus('idle');
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  if (!isOpen) return null;

  const isSubmitting = status === 'submitting';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-fade-in max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-grey hover:text-navy transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {status === 'success' ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-navy mb-2">Interest Registered!</h3>
            <p className="text-muted-grey">
              We'll notify you when tickets become available on 1st May 2026.
            </p>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-bold text-navy mb-1">Register Your Interest</h3>
            <p className="text-sm text-muted-grey mb-6">
              Tickets launch on <strong className="text-navy">1st May 2026</strong>. Register now and we'll notify you when they're available.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot — hidden from humans, bots fill it in and get rejected */}
              <input type="checkbox" name="botcheck" className="hidden" aria-hidden="true" tabIndex={-1} />
              {/* Full Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-navy mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-muted-grey/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:border-transparent text-navy placeholder-muted-grey"
                  placeholder="John Smith"
                  disabled={isSubmitting}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-muted-grey/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:border-transparent text-navy placeholder-muted-grey"
                  placeholder="john@example.com"
                  disabled={isSubmitting}
                />
              </div>

              {/* Occupation */}
              <div>
                <label htmlFor="occupation" className="block text-sm font-medium text-navy mb-1">
                  Occupation *
                </label>
                <input
                  type="text"
                  id="occupation"
                  required
                  value={formData.occupation}
                  onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                  className="w-full px-4 py-2 border border-muted-grey/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:border-transparent text-navy placeholder-muted-grey"
                  placeholder="e.g. Nurse, Engineer, Teacher"
                  disabled={isSubmitting}
                />
              </div>

              {/* Currently Based */}
              <div>
                <label htmlFor="nationality" className="block text-sm font-medium text-navy mb-1">
                  Where are you currently based? *
                </label>
                <select
                  id="nationality"
                  required
                  value={formData.nationality}
                  onChange={(e) => setFormData({ ...formData, nationality: e.target.value, nationalityOther: '' })}
                  className="w-full px-4 py-2 border border-muted-grey/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:border-transparent bg-white text-navy"
                  disabled={isSubmitting}
                >
                  <option value="" disabled>Select your location</option>
                  <option value="Ireland">Ireland</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Other">Other</option>
                </select>
                {formData.nationality === 'Other' && (
                  <input
                    type="text"
                    required
                    value={formData.nationalityOther}
                    onChange={(e) => setFormData({ ...formData, nationalityOther: e.target.value })}
                    className="w-full mt-2 px-4 py-2 border border-muted-grey/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:border-transparent text-navy placeholder-muted-grey"
                    placeholder="Please specify your country"
                    disabled={isSubmitting}
                  />
                )}
              </div>

              {/* Year of Birth */}
              <div>
                <label htmlFor="yearOfBirth" className="block text-sm font-medium text-navy mb-1">
                  Year of Birth *
                </label>
                <input
                  type="number"
                  id="yearOfBirth"
                  required
                  min={1940}
                  max={2007}
                  value={formData.yearOfBirth}
                  onChange={(e) => setFormData({ ...formData, yearOfBirth: e.target.value })}
                  className="w-full px-4 py-2 border border-muted-grey/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:border-transparent text-navy placeholder-muted-grey"
                  placeholder="e.g. 1990"
                  disabled={isSubmitting}
                />
              </div>

              {/* Ticket Type dropdown */}
              <div>
                <label htmlFor="selectedTicket" className="block text-sm font-medium text-navy mb-1">
                  Ticket Type
                </label>
                <select
                  id="selectedTicket"
                  value={formData.selectedTicket}
                  onChange={(e) => setFormData({ ...formData, selectedTicket: e.target.value })}
                  className="w-full px-4 py-2 border border-muted-grey/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:border-transparent bg-white text-navy"
                  disabled={isSubmitting}
                >
                  {TICKET_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-navy mb-1">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-muted-grey/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:border-transparent text-navy placeholder-muted-grey"
                  placeholder="+353 XX XXX XXXX"
                  disabled={isSubmitting}
                />
              </div>

              {/* Required marketing consent */}
              <div className="flex items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  id="consentMarketing"
                  required
                  checked={consentMarketing}
                  onChange={(e) => setConsentMarketing(e.target.checked)}
                  className="mt-1 h-4 w-4 accent-accent-yellow flex-shrink-0 cursor-pointer"
                  disabled={isSubmitting}
                />
                <label htmlFor="consentMarketing" className="text-sm text-navy leading-snug cursor-pointer">
                  I consent to The Relocation Expo storing my details so I can be contacted regarding early bird ticket release, event updates, and important announcements relating to the expo. <span className="text-red-500">*</span>
                </label>
              </div>

              {/* Optional exhibitor sharing consent */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consentExhibitor"
                  checked={consentExhibitor}
                  onChange={(e) => setConsentExhibitor(e.target.checked)}
                  className="mt-1 h-4 w-4 accent-accent-yellow flex-shrink-0 cursor-pointer"
                  disabled={isSubmitting}
                />
                <label htmlFor="consentExhibitor" className="text-sm text-navy leading-snug cursor-pointer">
                  I agree that The Relocation Expo may share my details with relevant exhibitors, recruiters, or sponsors where appropriate to my employment, relocation, or visa interests. <span className="text-muted-grey">(Optional)</span>
                </label>
              </div>

              {/* Form note */}
              <p className="text-xs text-muted-grey leading-relaxed border-t border-muted-grey/20 pt-3">
                This is an expression of interest only and does not guarantee ticket availability. By submitting this form, you will be added to our priority list for early bird ticket release and important updates. Please review our{' '}
                <a href="/privacy" className="underline hover:text-navy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
              </p>

              {status === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
                  Sorry, there was an error. Please try again or contact us at{' '}
                  <a href="mailto:info@therelocationexpo.com" className="underline font-medium">info@therelocationexpo.com</a>
                  {' '}(attendee enquiries) or{' '}
                  <a href="mailto:partner@therelocationexpo.com" className="underline font-medium">partner@therelocationexpo.com</a>
                  {' '}(exhibitor opportunities).
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent-yellow text-navy font-bold py-3 px-6 rounded-lg hover:bg-accent-yellow/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Register Interest'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
