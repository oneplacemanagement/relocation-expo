import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';

export function WhoYouMeetSection() {
  return (
    <Section
      background="dark"
      backgroundImage="/images/Reception_files/b322465c4acd45df904fee502d435a56_LARGE!_!0236342884f5cc63be90595fa4e7e88f.jpeg"
      backgroundImageAlt="Reception, Croke Park"
      overlayIntensity="heavy"
    >
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-off-white mb-6">
            Who You'll Meet
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-accent-yellow mb-4">
              Attendees
            </h3>
            <p className="text-off-white/90 leading-relaxed">
              Professionals across healthcare, trades, engineering, civil, mining, education, IT, tech, hospitality, and more — plus families planning a new life abroad.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-accent-yellow mb-4">
              Exhibitors
            </h3>
            <p className="text-off-white/90 leading-relaxed">
              Australian employers, state government representatives, migration agents, relocation companies, training providers, and industry partners.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl text-off-white/70 italic max-w-3xl mx-auto">
            Irish and UK professionals and families ready to explore opportunities in Australia
          </p>
        </div>
      </Container>
    </Section>
  );
}
