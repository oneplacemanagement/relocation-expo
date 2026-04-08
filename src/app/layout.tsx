import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CookieBanner } from '@/components/CookieBanner';
import { LiveChatWidget } from '@/components/LiveChatWidget';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'The Relocation Expo | Sunday 27th September 2026 | Croke Park, Dublin',
  description: 'The Relocation Expo brings together visa companies, migration experts, and relocation specialists to help Irish and UK people planning their move to Australia — one powerful day at Croke Park, Dublin, Sunday 27th September 2026.',
  keywords: ['relocation', 'visa', 'migration', 'Australia', 'Ireland', 'Dublin', 'expo', 'moving abroad', 'Croke Park'],
  openGraph: {
    title: 'The Relocation Expo',
    description: 'Everything you need to plan your move to Australia — visa experts, employers, and relocation specialists all under one roof at Croke Park, Dublin.',
    type: 'website',
    locale: 'en_IE',
    siteName: 'The Relocation Expo',
    url: 'https://therelocationexpo.com',
    images: [
      {
        url: 'https://therelocationexpo.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Relocation Expo — Sunday 27th September 2026 at Croke Park, Dublin',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Relocation Expo | Croke Park, Dublin | 27 Sept 2026',
    description: 'Everything you need to plan your move to Australia — visa experts, employers, and relocation specialists all under one roof at Croke Park, Dublin.',
    images: ['https://therelocationexpo.com/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
        <LiveChatWidget />
      </body>
    </html>
  );
}
