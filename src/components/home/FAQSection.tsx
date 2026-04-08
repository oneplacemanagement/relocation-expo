import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { faqs } from '@/data/faqs';

export function FAQSection() {
  // Show first 3 FAQs as teaser
  const teaserFAQs = faqs.slice(0, 3);

  return (
    <Section background="navy">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-off-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-off-white/70 max-w-3xl mx-auto">
            Quick answers to common questions about the expo.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6 mb-8">
          {teaserFAQs.map((faq) => (
            <div
              key={faq.id}
              className="bg-blue-grey/10 p-6 rounded-xl hover:bg-blue-grey/20 transition-colors"
            >
              <h3 className="text-lg font-bold text-accent-yellow mb-3">
                {faq.question}
              </h3>
              <div className="space-y-3">
                {faq.blocks.map((block, i) =>
                  block.type === 'paragraph' ? (
                    <p key={i} className="text-off-white/70">{block.text}</p>
                  ) : (
                    <ul key={i} className="space-y-1.5 pl-1">
                      {block.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-off-white/70">
                          <span className="text-accent-yellow mt-1 flex-shrink-0 text-xs">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button href="/faq" variant="outline">
            View All FAQs
          </Button>
        </div>
      </Container>
    </Section>
  );
}
