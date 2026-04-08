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
            Whether you're just exploring the idea or ready to make the move — we're here to help you make it happen in Australia.
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
              <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-xl font-bold text-accent-yellow mb-3">
                Families & Couples
              </h3>
              <p className="text-off-white/70">
                Planning a move with your family? Find exhibitors, advice, and real stories from 
                families who've already made the leap to Australia.
              </p>
            </div>
          </Card>

          <Card>
            <div className="text-center">
              <div className="text-4xl mb-4">🇮🇪🇬🇧</div>
              <h3 className="text-xl font-bold text-accent-yellow mb-3">
                Irish & UK Residents
              </h3>
              <p className="text-off-white/70">
                Tailored specifically for Irish and UK citizens and residents planning their move to Australia. 
                Meet experts who understand your journey.
              </p>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
