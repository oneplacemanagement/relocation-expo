import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { exhibitors } from '@/data/exhibitors';

export function ExhibitorsSection() {
  const featuredExhibitors = exhibitors.filter((ex) => ex.featured);

  return (
    <Section background="dark">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-off-white mb-4">
            Featured Exhibitors
          </h2>
          <p className="text-xl text-off-white/70 max-w-3xl mx-auto">
            Meet some of the expert companies and consultants you'll find at the expo.
          </p>
          <p className="text-sm text-off-white/50 mt-2">
            * Example exhibitors shown. Actual lineup subject to confirmation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {featuredExhibitors.map((exhibitor) => (
            <Card key={exhibitor.id} hover>
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-off-white">
                  {exhibitor.name}
                </h3>
                <Badge variant="blue" className="text-xs">
                  {exhibitor.category}
                </Badge>
              </div>
              <p className="text-off-white/70 mb-4">{exhibitor.description}</p>
              <div className="flex flex-wrap gap-2">
                {exhibitor.destinations.map((dest) => (
                  <span
                    key={dest}
                    className="text-xs bg-navy/50 px-2 py-1 rounded text-accent-yellow"
                  >
                    {dest}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-off-white/70 mb-4">
            ...and many more exhibitors to be announced!
          </p>
          <Button href="/exhibitors" variant="outline">
            View All Exhibitors
          </Button>
        </div>
      </Container>
    </Section>
  );
}
