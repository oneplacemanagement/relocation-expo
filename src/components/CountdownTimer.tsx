'use client';

import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer() {
  const targetDate = new Date('2026-05-01T09:00:00+01:00'); // May 1, 2026 — Ticket Launch Day
  
  const calculateTimeLeft = (): TimeLeft => {
    const difference = targetDate.getTime() - new Date().getTime();
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Prevent hydration mismatch by not rendering countdown until client-side
  if (!mounted) {
    return (
      <div className="bg-navy/50 backdrop-blur-md border-2 border-accent-yellow/30 rounded-2xl p-6 md:p-8 shadow-2xl">
        <div className="text-center mb-6">
          <h3 className="text-2xl md:text-3xl font-bold text-off-white mb-2">
            Early Bird Tickets Launch
          </h3>
          <p className="text-accent-yellow text-sm md:text-base font-semibold">
            1st May 2026 • Register your interest now
          </p>
        </div>
        
        <div className="flex justify-center gap-3 md:gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="bg-gradient-to-br from-accent-yellow to-yellow-500 text-navy font-bold text-3xl md:text-5xl w-16 h-16 md:w-24 md:h-24 rounded-2xl flex items-center justify-center shadow-lg mb-2">
                <span className="opacity-0">00</span>
              </div>
              <span className="text-off-white/70 text-xs md:text-sm font-semibold uppercase tracking-wide opacity-0">
                Loading
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <p className="text-off-white/60 text-xs md:text-sm">
            🎟️ Early Bird tickets are limited — register your interest to be first in line
          </p>
        </div>
      </div>
    );
  }

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-gradient-to-br from-accent-yellow to-yellow-500 text-navy font-bold text-3xl md:text-5xl w-16 h-16 md:w-24 md:h-24 rounded-2xl flex items-center justify-center shadow-lg mb-2">
        {String(value).padStart(2, '0')}
      </div>
      <span className="text-off-white/70 text-xs md:text-sm font-semibold uppercase tracking-wide">
        {label}
      </span>
    </div>
  );

  return (
    <div className="bg-navy/50 backdrop-blur-md border-2 border-accent-yellow/30 rounded-2xl p-6 md:p-8 shadow-2xl">
      <div className="text-center mb-6">
        <h3 className="text-2xl md:text-3xl font-bold text-off-white mb-2">
          Early Bird Tickets Launch
        </h3>
        <p className="text-accent-yellow text-sm md:text-base font-semibold">
          1st May 2026 • Register your interest now
        </p>
      </div>
      
      <div className="flex justify-center gap-3 md:gap-6">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </div>

      <div className="mt-6 text-center">
        <p className="text-off-white/60 text-xs md:text-sm">
          🎟️ Early Bird tickets are limited — register your interest to be first in line
        </p>
      </div>
    </div>
  );
}
