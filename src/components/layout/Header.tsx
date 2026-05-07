'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { eventData } from '@/data/event';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/#about', label: 'About' },
  { href: '/#whos-exhibiting', label: "Who's Exhibiting?" },
  { href: '/tickets', label: 'Tickets' },
  { href: '/exhibit', label: 'Why Exhibit?' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-b border-blue-grey/20'
          : 'bg-gradient-to-b from-navy/40 to-transparent border-b border-transparent'
      }`}
    >
      {/* Date banner — collapses on scroll */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          scrolled ? 'max-h-0 opacity-0' : 'max-h-10 opacity-100 border-b border-accent-yellow/20 bg-accent-yellow/[0.07]'
        }`}
      >
        <Container>
          <p className="py-1.5 text-center text-xs md:text-sm text-off-white/90">
            <span className="font-semibold text-accent-yellow">Sunday 27th September 2026</span>
            <span className="mx-2 opacity-40">·</span>
            <span>One Day Only</span>
            <span className="mx-2 opacity-40">·</span>
            <span>Croke Park, Dublin</span>
          </p>
        </Container>
      </div>

      <Container>
        <nav
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? 'py-2.5' : 'py-4'
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="The Relocation Expo home">
            <Image
              src="/images/White--Globe-Icon.png"
              alt=""
              aria-hidden="true"
              width={64}
              height={64}
              className={`w-auto flex-shrink-0 transition-all duration-300 mix-blend-screen ${
                scrolled ? 'h-9' : 'h-12 md:h-14'
              }`}
              priority
            />
            <Image
              src="/images/White-Text (1).png"
              alt="The Relocation Expo"
              width={200}
              height={48}
              className={`w-auto flex-shrink-0 transition-all duration-300 mix-blend-screen ${
                scrolled ? 'h-5' : 'h-8 md:h-10'
              }`}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-off-white/85 hover:text-accent-yellow transition-colors text-sm font-medium tracking-wide drop-shadow-md after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-px after:bg-accent-yellow after:transition-all"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={eventData.tickets.single.href}
              className="bg-gradient-to-r from-accent-yellow to-accent-yellow-glow text-navy font-bold text-sm px-5 py-2.5 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              Buy Tickets
            </a>
          </div>

          {/* Mobile button */}
          <button
            className="md:hidden text-off-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-5 pt-2 border-t border-blue-grey/20 bg-navy/95 backdrop-blur-xl -mx-4 px-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-off-white/90 hover:text-accent-yellow transition-colors py-2 px-1 text-base font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={eventData.tickets.single.href}
                className="bg-gradient-to-r from-accent-yellow to-accent-yellow-glow text-navy font-bold text-center py-3 rounded-xl mt-2"
                onClick={() => setMobileOpen(false)}
              >
                Buy Tickets — From €15
              </a>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
