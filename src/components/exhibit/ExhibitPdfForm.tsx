'use client';

import { useState, type FormEvent } from 'react';

export function ExhibitPdfForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'c188ed1a-81bf-43a4-a3b4-5b531128a80a',
          subject: 'Exhibitor Pack PDF Download Request',
          from_name: data.get('name') as string,
          email: data.get('email') as string,
          message: `PDF Download Request\nName: ${data.get('name')}\nEmail: ${data.get('email')}\nCompany: ${data.get('company') || 'Not provided'}\n\nPlease send the Exhibitor Packages PDF.`,
          botcheck: data.get('honeypot') as string,
        }),
      });
      const result = await res.json();
      if (!result.success) throw new Error('Submission failed');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-8">
        <div className="w-14 h-14 bg-accent-yellow/20 rounded-full flex items-center justify-center mx-auto mb-3">
          <svg className="w-7 h-7 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h4 className="font-display text-xl font-bold text-off-white mb-1.5">Request Received</h4>
        <p className="text-off-white/70 text-sm">We&apos;ll email you the full Exhibitor Packages PDF shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="honeypot" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid sm:grid-cols-3 gap-3">
        <input
          name="name"
          type="text"
          required
          className="w-full bg-off-white/[0.06] border border-blue-grey/40 rounded-xl px-4 py-3 text-off-white placeholder:text-off-white/40 focus:border-accent-yellow focus:ring-1 focus:ring-accent-yellow/50 outline-none transition-colors text-sm"
          placeholder="Full Name *"
        />
        <input
          name="email"
          type="email"
          required
          className="w-full bg-off-white/[0.06] border border-blue-grey/40 rounded-xl px-4 py-3 text-off-white placeholder:text-off-white/40 focus:border-accent-yellow focus:ring-1 focus:ring-accent-yellow/50 outline-none transition-colors text-sm"
          placeholder="Work Email *"
        />
        <input
          name="company"
          type="text"
          className="w-full bg-off-white/[0.06] border border-blue-grey/40 rounded-xl px-4 py-3 text-off-white placeholder:text-off-white/40 focus:border-accent-yellow focus:ring-1 focus:ring-accent-yellow/50 outline-none transition-colors text-sm"
          placeholder="Company (optional)"
        />
      </div>

      {errorMsg && (
        <p className="text-red-400 text-xs">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex items-center gap-2 bg-off-white/10 border border-accent-yellow/50 text-accent-yellow font-bold text-sm px-6 py-3 rounded-xl transition-all duration-200 hover:bg-accent-yellow hover:text-navy disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        {status === 'loading' ? 'Requesting...' : 'Download Exhibitor Pack PDF'}
      </button>
    </form>
  );
}
