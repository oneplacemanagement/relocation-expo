'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { eventData } from '@/data/event';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Trigger almost immediately — 8px threshold feels cinematic
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/#why-attend', label: 'Why Attend' },
    { href: '/#why-exhibit', label: 'Why Exhibit' },
    { href: '/#location', label: 'Location' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy/95 backdrop-blur-md shadow-lg border-b border-blue-grey/30'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      {/* Top banner — always visible, background appears on scroll */}
      <div
        className={`transition-all duration-300 border-b ${
          scrolled
            ? 'bg-accent-yellow/10 border-accent-yellow/20'
            : 'bg-transparent border-transparent'
        }`}
      >
        <Container>
          <div className="py-2 text-center text-sm text-off-white/90 drop-shadow-md">
            <span className="font-semibold">Sunday 27th September 2026</span>
            <span className="mx-2 opacity-50">|</span>
            <span>One Day Only</span>
            <span className="mx-2 opacity-50">|</span>
            <span>Croke Park, Dublin</span>
          </div>
        </Container>
      </div>

      {/* Nav — tighter padding when scrolled so hamburger shifts up cleanly */}
      <Container>
        <nav
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? 'py-2' : 'py-4'
          }`}
        >
          {/* Logo — shrinks on scroll */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/images/White--Globe-Icon.png"
              alt=""
              aria-hidden="true"
              className={`w-auto flex-shrink-0 transition-all duration-300 mix-blend-screen ${
                scrolled ? 'h-9' : 'h-14 md:h-16'
              }`}
            />
            <img
              src="/images/White-Text (1).png"
              alt="The Relocation Expo"
              className={`w-auto flex-shrink-0 transition-all duration-300 mix-blend-screen ${
                scrolled ? 'h-6' : 'h-10 md:h-12'
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-off-white hover:text-accent-yellow transition-colors text-sm font-medium tracking-wide drop-shadow-md"
              >
                {link.label}
              </Link>
            ))}
            <Button href={eventData.primaryCTA.href} size="sm">
              {eventData.primaryCTA.text}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-off-white p-2 drop-shadow-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu — always solid regardless of scroll state */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-grey/20 bg-navy/95 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-off-white hover:text-accent-yellow transition-colors px-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button href={eventData.primaryCTA.href} fullWidth>
                {eventData.primaryCTA.text}
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
