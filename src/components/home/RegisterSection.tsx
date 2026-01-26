'use client';

import { useState, FormEvent } from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  destinationInterest: string;
  message: string;
  consent: boolean;
}

export function RegisterSection() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    destinationInterest: 'Australia',
    message: '',
    consent: false,
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/register-interest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          destinationInterest: 'Australia',
          message: '',
          consent: false,
        });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <Section id="register" background="dark">
      <Container size="md">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-off-white mb-4">
            Register Your Interest
          </h2>
          <p className="text-xl text-off-white/70 max-w-2xl mx-auto">
            Secure your spot at The Relocation Expo. We'll send you confirmation and event updates.
          </p>
        </div>

        {status === 'success' ? (
          <div className="bg-accent-yellow/20 border border-accent-yellow rounded-xl p-8 text-center">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-2xl font-bold text-accent-yellow mb-3">
              Registration Received!
            </h3>
            <p className="text-off-white/80 mb-4">
              Thank you for registering. We've sent a confirmation email with event details and what to expect.
            </p>
            <p className="text-off-white/70 text-sm">
              See you on 3 October 2026 at RDS Simmonscourt!
            </p>
            <Button
              onClick={() => setStatus('idle')}
              variant="outline"
              className="mt-6"
            >
              Register Another Person
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-blue-grey/20 backdrop-blur-sm border border-blue-grey/30 rounded-xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="md:col-span-2">
                <label htmlFor="fullName" className="block text-off-white font-semibold mb-2">
                  Full Name <span className="text-accent-yellow">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 bg-navy border border-blue-grey/30 rounded-lg text-off-white placeholder-muted-grey focus:outline-none focus:ring-2 focus:ring-accent-yellow"
                  placeholder="John Smith"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-off-white font-semibold mb-2">
                  Email <span className="text-accent-yellow">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-navy border border-blue-grey/30 rounded-lg text-off-white placeholder-muted-grey focus:outline-none focus:ring-2 focus:ring-accent-yellow"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-off-white font-semibold mb-2">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-navy border border-blue-grey/30 rounded-lg text-off-white placeholder-muted-grey focus:outline-none focus:ring-2 focus:ring-accent-yellow"
                  placeholder="+353 123 456 789"
                />
              </div>

              {/* Destination Interest */}
              <div className="md:col-span-2">
                <label htmlFor="destinationInterest" className="block text-off-white font-semibold mb-2">
                  Primary Destination Interest <span className="text-accent-yellow">*</span>
                </label>
                <select
                  id="destinationInterest"
                  required
                  value={formData.destinationInterest}
                  onChange={(e) => setFormData({ ...formData, destinationInterest: e.target.value })}
                  className="w-full px-4 py-3 bg-navy border border-blue-grey/30 rounded-lg text-off-white focus:outline-none focus:ring-2 focus:ring-accent-yellow"
                >
                  <option value="Australia">Australia</option>
                  <option value="Canada">Canada</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="United States">United States</option>
                  <option value="Europe">Europe</option>
                  <option value="Other">Other</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-off-white font-semibold mb-2">
                  Message or Questions (Optional)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-navy border border-blue-grey/30 rounded-lg text-off-white placeholder-muted-grey focus:outline-none focus:ring-2 focus:ring-accent-yellow"
                  placeholder="Any specific questions or requirements?"
                />
              </div>

              {/* Consent */}
              <div className="md:col-span-2">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 w-5 h-5 text-accent-yellow bg-navy border-blue-grey/30 rounded focus:ring-2 focus:ring-accent-yellow"
                  />
                  <span className="text-off-white/80 text-sm">
                    I agree to be contacted about The Relocation Expo. I can unsubscribe at any time. 
                    See our <a href="/privacy" className="text-accent-yellow underline hover:no-underline">privacy policy</a>.
                  </span>
                </label>
              </div>
            </div>

            {/* Error Message */}
            {status === 'error' && errorMessage && (
              <div className="mt-6 bg-red-900/20 border border-red-500 rounded-lg p-4">
                <p className="text-red-300 text-sm">{errorMessage}</p>
              </div>
            )}

            {/* Submit Button */}
            <div className="mt-8">
              <Button
                type="submit"
                fullWidth
                size="lg"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Submitting...' : 'Register Now'}
              </Button>
            </div>

            <p className="text-center text-off-white/50 text-xs mt-4">
              By registering, you confirm your details are accurate. We'll only use them for event communication.
            </p>
          </form>
        )}
      </Container>
    </Section>
  );
}
