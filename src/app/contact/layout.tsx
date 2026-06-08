import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | The Relocation Expo',
  description: 'Get in touch with The Relocation Expo team. We\'re here to answer your questions about attending, exhibiting, or sponsoring the event at Croke Park, Dublin on 27th September 2026.',
  openGraph: {
    title: 'Contact | The Relocation Expo',
    description: 'Have questions? Contact the team behind The Relocation Expo - taking place at Croke Park, Dublin on Sunday 27th September 2026.',
    url: 'https://therelocationexpo.com/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
