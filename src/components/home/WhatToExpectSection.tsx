import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';

export function WhatToExpectSection() {
  const expectations = [
    {
      title: 'Informational Talks',
      description: 'Attend presentations from migration experts covering visa pathways, eligibility requirements, timelines, and costs.',
      icon: '🎤',
    },
    {
      title: 'Visa Clinics',
      description: 'Book free initial consultations with registered agents to discuss your personal situation and visa options.',
      icon: '📝',
    },
    {
      title: 'Exhibitor Booths',
      description: 'Visit stands from visa companies, relocation specialists, recruiters, financial advisors, and more.',
      icon: '🏢',
    },
    {
      title: 'Q&A Sessions',
      description: 'Ask questions in group settings or one-on-one. Get honest answers about the realities of relocating.',
      icon: '💬',
    },
    {
      title: 'Resource Materials',
      description: 'Collect brochures, checklists, Australia guides, and contact information to take home.',
      icon: '📚',
    },
    {
      title: 'Networking',
      description: 'Meet others planning their move and share experiences, tips, and support.',
      icon: '🤝',
    },
  ];

  return (
    <Section background="dark">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-off-white mb-4">
            What to Expect at the Expo
          </h2>
          <p className="text-xl text-off-white/70 max-w-3xl mx-auto">
            A full day of expert advice, practical resources, and face-to-face support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expectations.map((item) => (
            <Card key={item.title} hover>
              <div className="text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-off-white mb-3">
                  {item.title}
                </h3>
                <p className="text-off-white/70 text-sm">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
