import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CookieBanner } from '@/components/CookieBanner';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'The Relocation Expo | 3 October 2026 | Dublin, Ireland',
  description: 'The Relocation Expo brings together visa companies, migration experts, and relocation specialists to help Irish people planning their move abroad — with a primary focus on Australia.',
  keywords: ['relocation', 'visa', 'migration', 'Australia', 'Ireland', 'Dublin', 'expo', 'moving abroad'],
  openGraph: {
    title: 'The Relocation Expo',
    description: 'Everything you need to plan your move — with visa experts on-site.',
    type: 'website',
    locale: 'en_IE',
    siteName: 'The Relocation Expo',
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
      </body>
    </html>
  );
}
