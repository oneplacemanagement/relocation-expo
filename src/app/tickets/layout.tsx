import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tickets & Early Bird Pricing | The Relocation Expo',
  description: 'Register your interest for The Relocation Expo 2026. Early Bird tickets from €15. Taking place at Croke Park, Dublin on Sunday 27th September 2026.',
  openGraph: {
    title: 'Tickets | The Relocation Expo — Croke Park, Dublin',
    description: 'Early Bird tickets from €15. Register your interest for The Relocation Expo 2026 — one powerful day at Croke Park, Dublin on 27th September.',
    url: 'https://therelocationexpo.com/tickets',
  },
};

export default function TicketsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
