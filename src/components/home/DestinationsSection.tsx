import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export function DestinationsSection() {
  const destinations = [
    {
      name: 'Australia',
      flag: '🇦🇺',
      description: 'Our primary focus. Skilled migration, family visas, working holiday, and permanent residency pathways.',
      primary: true,
    },
    {
      name: 'Canada',
      flag: '🇨🇦',
      description: 'Express Entry, Provincial Nominee Programs, and study-to-work pathways.',
      primary: false,
    },
    {
      name: 'New Zealand',
      flag: '🇳🇿',
      description: 'Skilled Migrant Category, Essential Skills Work Visa, and partner visas.',
      primary: false,
    },
    {
      name: 'United States',
      flag: '🇺🇸',
      description: 'Work visas (H-1B, L-1), green card pathways, and employment-based immigration.',
      primary: false,
    },
    {
      name: 'Europe',
      flag: '🇪🇺',
      description: 'Golden Visa programs, work permits, and residency options across EU countries.',
      primary: false,
    },
    {
      name: 'Other Destinations',
      flag: '🌏',
      description: 'Exploring other countries? Our exhibitors cover additional destinations worldwide.',
      primary: false,
    },
  ];

  return (
    <Section background="dark">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-off-white mb-4">
            Where Can You Go?
          </h2>
          <p className="text-xl text-off-white/70 max-w-3xl mx-auto">
            Explore visa and migration options for multiple destinations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <Card key={dest.name} hover>
              <div className="text-center">
                <div className="text-5xl mb-4">{dest.flag}</div>
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <h3 className="text-xl font-bold text-off-white">{dest.name}</h3>
                  {dest.primary && (
                    <Badge variant="yellow" className="text-xs">
                      Primary Focus
                    </Badge>
                  )}
                </div>
                <p className="text-off-white/70 text-sm">{dest.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
