import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { faqs } from '@/data/faqs';

export function FAQSection() {
  const teaser = faqs.slice(0, 4);

  return (
    <Section id="faq" background="navy">
      <Container size="md">
        <Reveal className="text-center mb-12">
          <div className="inline-block bg-accent-yellow/15 text-accent-yellow text-xs uppercase tracking-[0.18em] font-bold px-4 py-1.5 rounded-full mb-5">
            FAQ
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-black text-off-white mb-4 leading-tight">
            The most common questions, <span className="text-accent-yellow">honestly answered</span>.
          </h2>
        </Reveal>

        <div className="space-y-4">
          {teaser.map((faq, i) => (
            <Reveal key={faq.id} delay={i * 0.05}>
              <details className="group bg-off-white/[0.04] border border-blue-grey/30 hover:border-accent-yellow/40 rounded-2xl p-6 transition-colors open:bg-off-white/[0.06]">
                <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                  <h3 className="text-lg font-bold text-off-white">{faq.question}</h3>
                  <svg
                    className="w-5 h-5 text-accent-yellow flex-shrink-0 mt-1 transition-transform group-open:rotate-45"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <div className="mt-4 space-y-3 text-off-white/75">
                  {faq.blocks.map((block, j) =>
                    block.type === 'paragraph' ? (
                      <p key={j} className="leading-relaxed">
                        {block.text}
                      </p>
                    ) : (
                      <ul key={j} className="space-y-1.5 pl-1">
                        {block.items.map((item, k) => (
                          <li key={k} className="flex items-start gap-2">
                            <span className="text-accent-yellow mt-1 text-xs">▸</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ),
                  )}
                </div>
              </details>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="text-center mt-10">
          <Button href="/faq" variant="outline">
            View all FAQs
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
