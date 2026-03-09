import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';

export function AboutSection() {
  return (
    <Section id="about">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">
              About The Relocation Expo
            </h2>
          </div>
          
          <div className="prose prose-lg mx-auto text-navy/90 leading-relaxed space-y-6">
            <p>
              Step into a full day of inspiration, honesty, and real‑world insight at The Relocation Expo 2026 — Dublin's biggest event for anyone considering a new life in Australia. Hear straight from the people who've already done it: nurses, tradies, teachers, engineers, and families who packed up, took the leap, and built a new life Down Under. They'll share the things no one tells you — how they saved money, what they wish they'd known, the mistakes they made, and the simple steps that made everything easier.
            </p>
            
            <p>
              Learn from migration agents and government experts who will break down visas and pathways in plain English, so you know exactly what to do — and what not to do. Explore stands from major Australian employers actively recruiting for roles across healthcare, mining, construction, engineering, education, and more.
            </p>
            
            <p>
              Whether you're just curious or already planning your move, this is your chance to get real answers, real stories, and real opportunities — all under one roof, in one powerful, life‑changing day.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
