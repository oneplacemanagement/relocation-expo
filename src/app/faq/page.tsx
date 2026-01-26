import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { faqs, FAQ } from '@/data/faqs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | The Relocation Expo',
  description: 'Frequently asked questions about The Relocation Expo - entry, parking, what to expect, and more.',
};

export default function FAQPage() {
  // Group FAQs by category
  const faqsByCategory = faqs.reduce((acc, faq) => {
    if (!acc[faq.category]) {
      acc[faq.category] = [];
    }
    acc[faq.category].push(faq);
    return acc;
  }, {} as Record<string, FAQ[]>);

  const categoryNames: Record<string, string> = {
    general: 'General Questions',
    tickets: 'Registration & Entry',
    visa: 'Visa & Migration Advice',
    venue: 'Venue & Accessibility',
  };

  return (
    <>
      <Section className="pt-32">
        <Container size="md">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-off-white mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-off-white/70 max-w-2xl mx-auto">
              Everything you need to know about attending The Relocation Expo.
            </p>
          </div>

          {/* FAQs by Category */}
          <div className="space-y-12">
            {Object.entries(faqsByCategory).map(([category, categoryFaqs]) => (
              <div key={category}>
                <div className="flex items-center space-x-3 mb-6">
                  <Badge variant="yellow">{categoryNames[category] || category}</Badge>
                </div>
                <div className="space-y-6">
                  {categoryFaqs.map((faq) => (
                    <div
                      key={faq.id}
                      className="bg-blue-grey/20 backdrop-blur-sm border border-blue-grey/30 rounded-xl p-6"
                    >
                      <h2 className="text-lg font-bold text-accent-yellow mb-3">
                        {faq.question}
                      </h2>
                      <p className="text-off-white/80 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Still Have Questions */}
          <div className="mt-16 text-center bg-blue-grey/10 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-accent-yellow mb-4">
              Still Have Questions?
            </h3>
            <p className="text-off-white/70 mb-6">
              Can't find what you're looking for? Get in touch and we'll help you out.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent-yellow text-navy font-semibold rounded-lg hover:bg-accent-yellow/90 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}
