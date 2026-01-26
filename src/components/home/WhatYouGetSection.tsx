import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';

export function WhatYouGetSection() {
  const benefits = [
    {
      icon: '✅',
      title: 'Expert Visa Guidance',
      description: 'Meet registered migration agents and visa specialists who can assess your eligibility and guide your application.',
    },
    {
      icon: '🗺️',
      title: 'Relocation Planning',
      description: 'Get practical advice on shipping, accommodation, jobs, schools, and settling into your new country.',
    },
    {
      icon: '💼',
      title: 'Employment Support',
      description: 'Connect with recruiters and employment consultants who specialize in placing international workers.',
    },
    {
      icon: '📚',
      title: 'Informational Talks',
      description: 'Attend seminars on visa pathways, cost of living, healthcare, education, and more.',
    },
    {
      icon: '🤝',
      title: 'One-on-One Clinics',
      description: 'Book time with exhibitors for personalized consultations about your specific situation.',
    },
    {
      icon: '📋',
      title: 'Checklists & Resources',
      description: 'Take home comprehensive guides, checklists, and contact information to continue your planning.',
    },
  ];

  return (
    <Section background="navy">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-off-white mb-4">
            What You'll Get
          </h2>
          <p className="text-xl text-off-white/70 max-w-3xl mx-auto">
            Everything you need to confidently plan your move abroad — all in one place, all in one day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex items-start space-x-4 bg-blue-grey/10 p-6 rounded-xl hover:bg-blue-grey/20 transition-colors"
            >
              <div className="text-3xl flex-shrink-0">{benefit.icon}</div>
              <div>
                <h3 className="text-lg font-bold text-accent-yellow mb-2">
                  {benefit.title}
                </h3>
                <p className="text-off-white/70 text-sm">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
