import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { exhibitors } from '@/data/exhibitors';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Exhibitors | The Relocation Expo',
  description: 'Meet the visa companies, migration experts, and relocation specialists exhibiting at The Relocation Expo.',
};

export default function ExhibitorsPage() {
  const featuredExhibitors = exhibitors.filter((ex) => ex.featured);
  const otherExhibitors = exhibitors.filter((ex) => !ex.featured);

  return (
    <>
      <Section className="pt-32">
        <Container>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-off-white mb-4">
              Exhibitors
            </h1>
            <p className="text-xl text-off-white/70 max-w-3xl mx-auto">
              Meet the expert companies and consultants you'll find at The Relocation Expo.
            </p>
            <p className="text-sm text-off-white/50 mt-4">
              * Example exhibitors shown. Actual lineup subject to confirmation.
            </p>
          </div>

          {/* Featured Exhibitors */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-accent-yellow mb-6">
              Featured Exhibitors
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredExhibitors.map((exhibitor) => (
                <Card key={exhibitor.id} hover>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-off-white">
                      {exhibitor.name}
                    </h3>
                    <Badge variant="yellow" className="text-xs">
                      Featured
                    </Badge>
                  </div>
                  <p className="text-off-white/70 mb-4">{exhibitor.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exhibitor.destinations.map((dest) => (
                      <span
                        key={dest}
                        className="text-xs bg-navy/50 px-2 py-1 rounded text-accent-yellow"
                      >
                        {dest}
                      </span>
                    ))}
                  </div>
                  <Badge variant="blue" className="text-xs">
                    {exhibitor.category}
                  </Badge>
                </Card>
              ))}
            </div>
          </div>

          {/* Other Exhibitors */}
          {otherExhibitors.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-accent-yellow mb-6">
                More Exhibitors
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherExhibitors.map((exhibitor) => (
                  <Card key={exhibitor.id} hover>
                    <h3 className="text-lg font-bold text-off-white mb-3">
                      {exhibitor.name}
                    </h3>
                    <p className="text-off-white/70 text-sm mb-4">{exhibitor.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {exhibitor.destinations.map((dest) => (
                        <span
                          key={dest}
                          className="text-xs bg-navy/50 px-2 py-1 rounded text-accent-yellow"
                        >
                          {dest}
                        </span>
                      ))}
                    </div>
                    <Badge variant="blue" className="text-xs">
                      {exhibitor.category}
                    </Badge>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* More Coming Soon */}
          <div className="text-center bg-blue-grey/10 rounded-xl p-12">
            <h3 className="text-2xl font-bold text-accent-yellow mb-4">
              More Exhibitors Coming Soon!
            </h3>
            <p className="text-off-white/70 max-w-2xl mx-auto">
              We're confirming additional visa companies, migration consultants, recruitment agencies, 
              and relocation specialists. Check back for updates or{' '}
              <a href="/#register" className="text-accent-yellow underline hover:no-underline">
                register your interest
              </a>{' '}
              to receive the latest announcements.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
