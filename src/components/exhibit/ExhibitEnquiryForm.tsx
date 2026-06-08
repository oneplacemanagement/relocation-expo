'use client';

import { useState, type FormEvent } from 'react';

export function ExhibitEnquiryForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: data.get('name') as string,
      email: data.get('email') as string,
      subject: `Exhibitor Enquiry - ${data.get('company')}`,
      message: `Company: ${data.get('company')}\nIndustry: ${data.get('industry')}\nMessage: ${data.get('message') || 'N/A'}`,
      honeypot: data.get('honeypot') as string,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Submission failed');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or email us directly.');
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-accent-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-bold text-off-white mb-2">Enquiry Received</h3>
        <p className="text-off-white/70">We&apos;ll get back to you within 24 hours with the full exhibitor pack.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="text" name="honeypot" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="enquiry-name" className="text-off-white/70 text-sm mb-1.5 block">Full Name *</label>
          <input
            id="enquiry-name"
            name="name"
            type="text"
            required
            className="w-full bg-off-white/[0.06] border border-blue-grey/40 rounded-xl px-4 py-3 text-off-white placeholder:text-off-white/40 focus:border-accent-yellow focus:ring-1 focus:ring-accent-yellow/50 outline-none transition-colors"
            placeholder="John Murphy"
          />
        </div>
        <div>
          <label htmlFor="enquiry-email" className="text-off-white/70 text-sm mb-1.5 block">Work Email *</label>
          <input
            id="enquiry-email"
            name="email"
            type="email"
            required
            className="w-full bg-off-white/[0.06] border border-blue-grey/40 rounded-xl px-4 py-3 text-off-white placeholder:text-off-white/40 focus:border-accent-yellow focus:ring-1 focus:ring-accent-yellow/50 outline-none transition-colors"
            placeholder="john@company.com.au"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="enquiry-company" className="text-off-white/70 text-sm mb-1.5 block">Company Name *</label>
          <input
            id="enquiry-company"
            name="company"
            type="text"
            required
            className="w-full bg-off-white/[0.06] border border-blue-grey/40 rounded-xl px-4 py-3 text-off-white placeholder:text-off-white/40 focus:border-accent-yellow focus:ring-1 focus:ring-accent-yellow/50 outline-none transition-colors"
            placeholder="Your Company Pty Ltd"
          />
        </div>
        <div>
          <label htmlFor="enquiry-industry" className="text-off-white/70 text-sm mb-1.5 block">Industry *</label>
          <input
            id="enquiry-industry"
            name="industry"
            type="text"
            required
            className="w-full bg-off-white/[0.06] border border-blue-grey/40 rounded-xl px-4 py-3 text-off-white placeholder:text-off-white/40 focus:border-accent-yellow focus:ring-1 focus:ring-accent-yellow/50 outline-none transition-colors"
            placeholder="e.g. Construction, Healthcare, Mining"
          />
        </div>
      </div>

      <div>
        <label htmlFor="enquiry-message" className="text-off-white/70 text-sm mb-1.5 block">Message (optional)</label>
        <textarea
          id="enquiry-message"
          name="message"
          rows={3}
          className="w-full bg-off-white/[0.06] border border-blue-grey/40 rounded-xl px-4 py-3 text-off-white placeholder:text-off-white/40 focus:border-accent-yellow focus:ring-1 focus:ring-accent-yellow/50 outline-none transition-colors resize-none"
          placeholder="Tell us about your hiring needs or questions..."
        />
      </div>

      {errorMsg && (
        <p className="text-red-400 text-sm">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full sm:w-auto bg-gradient-to-r from-accent-yellow to-accent-yellow-glow text-navy font-bold text-base px-8 py-3.5 rounded-xl shadow-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-2xl disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending...' : 'Request Exhibitor Pack'}
      </button>

      <p className="text-off-white/40 text-xs">
        Or email us directly at{' '}
        <a href="mailto:partner@therelocationexpo.com" className="text-accent-yellow underline hover:no-underline">
          partner@therelocationexpo.com
        </a>
      </p>
    </form>
  );
}
