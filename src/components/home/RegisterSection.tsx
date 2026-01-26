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
    <Section id="register" background="dark" className="relative overflow-hidden">
      {/* Premium background effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-yellow rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-grey rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <Container size="md" className="relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-accent-yellow/20 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-accent-yellow rounded-full animate-pulse"></span>
            <span className="text-accent-yellow font-semibold text-sm uppercase tracking-wide">Limited Spots Available</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-off-white via-accent-yellow to-off-white mb-6">
            Register Your Interest
          </h2>
          <p className="text-xl text-off-white/80 max-w-2xl mx-auto leading-relaxed">
            Secure your spot at The Relocation Expo. We'll send you confirmation and event updates.
          </p>
        </div>

        {/* Early Bird Pricing Section */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Early Bird */}
            <div className="glass-card border-2 border-accent-yellow/50 p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-accent-yellow text-navy text-xs font-bold px-3 py-1 rounded-bl-lg">
                BEST VALUE
              </div>
              <div className="text-center mt-4">
                <h3 className="text-lg font-bold text-accent-yellow mb-2">Early Bird</h3>
                <div className="mb-4">
                  <span className="text-5xl font-black text-off-white">€15</span>
                  <span className="text-off-white/60 text-sm ml-2">per person</span>
                </div>
                <p className="text-off-white/70 text-sm mb-4">
                  Register before March 31, 2026
                </p>
                <ul className="text-left space-y-2 text-sm text-off-white/80 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-yellow mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Full event access
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-yellow mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Priority entry
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-yellow mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Welcome pack
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-yellow mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Save €10
                  </li>
                </ul>
              </div>
            </div>

            {/* Standard */}
            <div className="glass-card border-2 border-blue-grey/30 p-6">
              <div className="text-center">
                <h3 className="text-lg font-bold text-off-white mb-2 mt-6">Standard</h3>
                <div className="mb-4">
                  <span className="text-5xl font-black text-off-white">€25</span>
                  <span className="text-off-white/60 text-sm ml-2">per person</span>
                </div>
                <p className="text-off-white/70 text-sm mb-4">
                  Register April 1 - Sept 30
                </p>
                <ul className="text-left space-y-2 text-sm text-off-white/80 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-yellow mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Full event access
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-yellow mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Welcome pack
                  </li>
                  <li className="flex items-start opacity-30">
                    <svg className="w-5 h-5 text-off-white mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    No priority entry
                  </li>
                </ul>
              </div>
            </div>

            {/* At the Door */}
            <div className="glass-card border-2 border-blue-grey/30 p-6">
              <div className="text-center">
                <h3 className="text-lg font-bold text-off-white mb-2 mt-6">At the Door</h3>
                <div className="mb-4">
                  <span className="text-5xl font-black text-off-white">€35</span>
                  <span className="text-off-white/60 text-sm ml-2">per person</span>
                </div>
                <p className="text-off-white/70 text-sm mb-4">
                  Walk-ins on event day
                </p>
                <ul className="text-left space-y-2 text-sm text-off-white/80 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-yellow mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Full event access
                  </li>
                  <li className="flex items-start opacity-30">
                    <svg className="w-5 h-5 text-off-white mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    No welcome pack
                  </li>
                  <li className="flex items-start opacity-30">
                    <svg className="w-5 h-5 text-off-white mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    Subject to capacity
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <p className="text-center text-accent-yellow font-semibold mt-6 text-lg">
            ⏰ Early Bird deadline: March 31, 2026 — Save €10!
          </p>
        </div>

        {status === 'success' ? (
          <div className="glass-card border-accent-yellow/50 p-10 text-center animate-fade-in">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-accent-yellow mb-4">
              Registration Confirmed!
            </h3>
            <p className="text-off-white/80 text-lg mb-3">
              Thank you for registering. We've sent a confirmation email with event details and what to expect.
            </p>
            <p className="text-off-white/60 text-sm mb-8">
              See you on 3 October 2026 at RDS Simmonscourt, Dublin!
            </p>
            <Button
              onClick={() => setStatus('idle')}
              variant="outline"
              size="lg"
            >
              Register Another Person
            </Button>
          </div>
        ) : (
          <div className="glass-card p-8 md:p-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-8 pb-8 border-b border-blue-grey/30">
              <div className="flex items-center space-x-2 text-off-white/70">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold">Secure Registration</span>
              </div>
              <div className="flex items-center space-x-2 text-off-white/70">
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-sm font-semibold">Instant Confirmation</span>
              </div>
              <div className="flex items-center space-x-2 text-off-white/70">
                <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold">No Spam Guarantee</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="md:col-span-2">
                  <label htmlFor="fullName" className="block text-off-white font-semibold mb-2 text-sm uppercase tracking-wide">
                    Full Name <span className="text-accent-yellow">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-5 py-4 bg-navy/50 border-2 border-blue-grey/30 rounded-xl text-off-white placeholder-muted-grey/50 focus:outline-none focus:ring-4 focus:ring-accent-yellow/30 focus:border-accent-yellow transition-all"
                    placeholder="John Smith"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-off-white font-semibold mb-2 text-sm uppercase tracking-wide">
                    Email <span className="text-accent-yellow">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 bg-navy/50 border-2 border-blue-grey/30 rounded-xl text-off-white placeholder-muted-grey/50 focus:outline-none focus:ring-4 focus:ring-accent-yellow/30 focus:border-accent-yellow transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-off-white font-semibold mb-2 text-sm uppercase tracking-wide">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-5 py-4 bg-navy/50 border-2 border-blue-grey/30 rounded-xl text-off-white placeholder-muted-grey/50 focus:outline-none focus:ring-4 focus:ring-accent-yellow/30 focus:border-accent-yellow transition-all"
                    placeholder="+353 123 456 789"
                  />
                </div>

                {/* Destination Interest */}
                <div className="md:col-span-2">
                  <label htmlFor="destinationInterest" className="block text-off-white font-semibold mb-2 text-sm uppercase tracking-wide">
                    Primary Destination Interest <span className="text-accent-yellow">*</span>
                  </label>
                  <select
                    id="destinationInterest"
                    required
                    value={formData.destinationInterest}
                    onChange={(e) => setFormData({ ...formData, destinationInterest: e.target.value })}
                    className="w-full px-5 py-4 bg-navy/50 border-2 border-blue-grey/30 rounded-xl text-off-white focus:outline-none focus:ring-4 focus:ring-accent-yellow/30 focus:border-accent-yellow transition-all"
                  >
                    <option value="Australia">🇦🇺 Australia</option>
                    <option value="Canada">🇨🇦 Canada</option>
                    <option value="New Zealand">🇳🇿 New Zealand</option>
                    <option value="United States">🇺🇸 United States</option>
                    <option value="Europe">🇪🇺 Europe</option>
                    <option value="Other">🌍 Other</option>
                    <option value="Not sure yet">🤔 Not sure yet</option>
                  </select>
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-off-white font-semibold mb-2 text-sm uppercase tracking-wide">
                    Message or Questions (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-4 bg-navy/50 border-2 border-blue-grey/30 rounded-xl text-off-white placeholder-muted-grey/50 focus:outline-none focus:ring-4 focus:ring-accent-yellow/30 focus:border-accent-yellow transition-all"
                    placeholder="Any specific questions or requirements?"
                  />
                </div>

                {/* Consent */}
                <div className="md:col-span-2">
                  <label className="flex items-start space-x-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-1 w-5 h-5 text-accent-yellow bg-navy/50 border-2 border-blue-grey/30 rounded focus:ring-4 focus:ring-accent-yellow/30 transition-all"
                    />
                    <span className="text-off-white/80 text-sm leading-relaxed group-hover:text-off-white transition-colors">
                      I agree to be contacted about The Relocation Expo. I can unsubscribe at any time. 
                      See our <a href="/privacy" className="text-accent-yellow underline hover:no-underline font-semibold">privacy policy</a>.
                    </span>
                  </label>
                </div>
              </div>

              {/* Error Message */}
              {status === 'error' && errorMessage && (
                <div className="bg-red-900/30 border-2 border-red-500/50 rounded-xl p-4 animate-fade-in">
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-red-300">{errorMessage}</p>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  fullWidth
                  size="lg"
                  disabled={status === 'submitting'}
                  className="text-lg font-bold py-5"
                >
                  {status === 'submitting' ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      Register Now — It's Free
                      <svg className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  )}
                </Button>
              </div>

              <p className="text-center text-off-white/50 text-xs mt-4">
                🔒 Your data is secure and will only be used for event communication. We respect your privacy.
              </p>
            </form>
          </div>
        )}
      </Container>
    </Section>
  );
}
