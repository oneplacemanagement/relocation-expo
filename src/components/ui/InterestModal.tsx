'use client';

import { FormEvent, useState } from 'react';

interface InterestModalProps {
  isOpen: boolean;
  onClose: () => void;
  ticketType: string;
}

export function InterestModal({ isOpen, onClose, ticketType }: InterestModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'c188ed1a-81bf-43a4-a3b4-5b531128a80a';

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Ticket Interest - ${ticketType}`,
          from_name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: `I'm interested in registering for: ${ticketType}\n\nPhone: ${formData.phone}`,
        }),
      });

      const result = await response.json();

      if (!response.ok || result.success === false) {
        throw new Error(result.message || 'Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', phone: '' });
      
      // Close modal after 2 seconds
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-fade-in">
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
              We'll notify you when {ticketType} tickets become available on May 1st, 2026.
            </p>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-bold text-navy mb-2">Register Your Interest</h3>
            <p className="text-muted-grey mb-2">{ticketType}</p>
            <p className="text-sm text-muted-grey mb-6">
              Tickets launch on <strong className="text-navy">1st May 2026</strong>. Register now and we'll notify you when they're available.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
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
                  className="w-full px-4 py-2 border border-muted-grey/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:border-transparent"
                  placeholder="John Smith"
                  disabled={status === 'submitting'}
                />
              </div>

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
                  className="w-full px-4 py-2 border border-muted-grey/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:border-transparent"
                  placeholder="john@example.com"
                  disabled={status === 'submitting'}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-navy mb-1">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-muted-grey/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:border-transparent"
                  placeholder="+353 XX XXX XXXX"
                  disabled={status === 'submitting'}
                />
              </div>

              {status === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
                  Sorry, there was an error. Please try again or email us at info@therelocationexpo.com
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-accent-yellow text-navy font-bold py-3 px-6 rounded-lg hover:bg-accent-yellow/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Submitting...' : 'Register Interest'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
