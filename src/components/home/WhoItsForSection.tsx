import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';

export function WhoItsForSection() {
  return (
    <Section background="dark">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-off-white mb-4">
            Who Is This For?
          </h2>
          <p className="text-xl text-off-white/70 max-w-3xl mx-auto">
            Whether you're dreaming of Sydney's beaches, Vancouver's mountains, or Europe's vibrant cities — 
            we're here to help you make it happen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <div className="text-center">
              <div className="text-4xl mb-4">🇦🇺</div>
              <h3 className="text-xl font-bold text-accent-yellow mb-3">
                Australia-Focused
              </h3>
              <p className="text-off-white/70">
                Our primary focus is helping Irish people relocate to Australia. Expert visa advice, 
                migration pathways, and settling-in support.
              </p>
            </div>
          </Card>

          <Card>
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-accent-yellow mb-3">
                Multiple Destinations
              </h3>
              <p className="text-off-white/70">
                Also covering Canada, New Zealand, USA, and Europe. Find exhibitors and resources 
                for your chosen destination.
              </p>
            </div>
          </Card>

          <Card>
            <div className="text-center">
              <div className="text-4xl mb-4">🇮🇪</div>
              <h3 className="text-xl font-bold text-accent-yellow mb-3">
                Irish Residents
              </h3>
              <p className="text-off-white/70">
                Tailored specifically for Irish citizens and residents planning their move abroad. 
                Meet experts who understand your journey.
              </p>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
