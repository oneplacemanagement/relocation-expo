'use client';

const TICKET_URL = 'https://tickets.therelocationexpo.com/events/the-relocation-expo';

export function CountdownTimer() {
  return (
    <div className="bg-navy/50 backdrop-blur-md border-2 border-accent-yellow/30 rounded-2xl p-6 md:p-8 shadow-2xl">
      <div className="text-center mb-6">
        <div className="inline-block bg-accent-yellow text-navy text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
          Early Bird Tickets On Sale Now
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-off-white mb-2">
          Buy Your Tickets Now — Limited Early Bird Availability
        </h3>
        <p className="text-off-white/70 text-sm md:text-base">
          Early Bird tickets are on sale now. Limited availability — don't miss out.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href={TICKET_URL}
          className="inline-flex items-center gap-2 bg-accent-yellow hover:bg-yellow-400 text-navy font-bold text-lg px-8 py-4 rounded-xl shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
          </svg>
          Get Early Bird Tickets
        </a>
      </div>

      <div className="mt-5 flex flex-wrap justify-center gap-6 text-off-white/60 text-xs md:text-sm">
        <span className="flex items-center gap-1.5">
          <svg className="w-4 h-4 text-accent-yellow" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Single from €15
        </span>
        <span className="flex items-center gap-1.5">
          <svg className="w-4 h-4 text-accent-yellow" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Couple €25
        </span>
        <span className="flex items-center gap-1.5">
          <svg className="w-4 h-4 text-accent-yellow" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Family Pass €35
        </span>
      </div>
    </div>
  );
}
