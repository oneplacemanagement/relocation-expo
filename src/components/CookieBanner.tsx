'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-t border-blue-grey/20 p-4 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-off-white text-sm">
          We use essential cookies to ensure the website functions properly. No tracking cookies are used by default.{' '}
          <a href="/privacy" className="text-accent-yellow underline hover:no-underline">
            Learn more
          </a>
        </p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handleDecline}>
            Essential Only
          </Button>
          <Button size="sm" onClick={handleAccept}>
            Accept All
          </Button>
        </div>
      </div>
    </div>
  );
}
