import type { Metadata } from 'next';
import { Inter, Fraunces } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CookieBanner } from '@/components/CookieBanner';
import { LiveChatWidget } from '@/components/LiveChatWidget';
import { JsonLd } from '@/components/JsonLd';
import { Analytics } from '@/components/Analytics';
import { StickyMobileCTA } from '@/components/StickyMobileCTA';
import { ScrollProgress } from '@/components/ScrollProgress';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

const SITE_URL = 'https://therelocationexpo.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'The Relocation Expo 2026 | Croke Park, Dublin',
    template: '%s | The Relocation Expo',
  },
  description:
    "Australia's leading employers, registered migration agents, and relocation specialists — all under one roof at Croke Park, Dublin, on Sunday 27th September 2026.",
  keywords: [
    'relocation expo',
    'move to Australia',
    'Australia visa',
    'skilled migration Australia',
    '482 sponsorship Ireland',
    'Croke Park event',
    'Dublin expo 2026',
    'Australian employers Ireland',
    'relocate Ireland to Australia',
    'UK to Australia',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'The Relocation Expo 2026',
    description:
      "Australia's leading employers, registered migration agents, and relocation specialists — all under one roof at Croke Park, Dublin, on Sunday 27th September 2026.",
    type: 'website',
    locale: 'en_IE',
    siteName: 'The Relocation Expo',
    url: SITE_URL,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Relocation Expo — Sunday 27th September 2026 at Croke Park, Dublin',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Relocation Expo 2026 | Croke Park, Dublin',
    description:
      "Move to Australia. Start at Croke Park. Sunday 27th September 2026 — meet employers, migration agents, and relocation experts in one day.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IE" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="antialiased">
        {/* Skip-to-content for screen-reader / keyboard users */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent-yellow focus:text-navy focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold"
        >
          Skip to main content
        </a>
        <ScrollProgress />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <CookieBanner />
        <LiveChatWidget />
        <StickyMobileCTA />
        <Analytics />
      </body>
    </html>
  );
}
