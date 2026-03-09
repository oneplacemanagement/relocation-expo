'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { eventData } from '@/data/event';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '#why-attend', label: 'Why Attend' },
    { href: '#why-exhibit', label: 'Why Exhibit' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-navy/95 backdrop-blur-md border-b border-blue-grey/20">
      {/* Top Banner with Event Details */}
      <div className="bg-accent-yellow/10 border-b border-accent-yellow/20">
        <Container>
          <div className="py-2 text-center text-sm text-off-white/90">
            <span className="font-semibold">October 3, 2026</span>
            <span className="mx-2">|</span>
            <span>11:30 AM - 5:00 PM</span>
            <span className="mx-2">|</span>
            <span>RDS Simmonscourt, Dublin</span>
          </div>
        </Container>
      </div>
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img 
              src="/brand/globe.svg" 
              alt="The Relocation Expo" 
              className="h-10 w-10 flex-shrink-0"
            />
            <img 
              src="/brand/logo.svg" 
              alt="The Relocation Expo" 
              className="h-7 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-off-white hover:text-accent-yellow transition-colors"
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
            className="md:hidden text-off-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-grey/20">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-off-white hover:text-accent-yellow transition-colors"
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
