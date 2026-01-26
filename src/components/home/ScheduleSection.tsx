import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';

export function ScheduleSection() {
  const schedule = [
    { time: '10:00', title: 'Doors Open', description: 'Registration and welcome coffee' },
    { time: '10:30', title: 'Opening Keynote', description: 'Welcome address and overview of the day' },
    { time: '11:00', title: 'Australia Visa Pathways', description: 'Presentation by migration experts' },
    { time: '11:45', title: 'Open Expo & Clinics', description: 'Visit exhibitors, book consultations' },
    { time: '13:00', title: 'Lunch Break', description: 'Refreshments available' },
    { time: '14:00', title: 'Panel Discussion', description: 'Living & Working Abroad: What You Need to Know' },
    { time: '15:00', title: 'Canadian & NZ Pathways', description: 'Alternative destination seminars' },
    { time: '16:00', title: 'Final Q&A Session', description: 'Last chance to ask your questions' },
    { time: '17:00', title: 'Expo Closes', description: 'Thank you for attending!' },
  ];

  return (
    <Section background="navy">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-off-white mb-4">
            Event Schedule
          </h2>
          <p className="text-xl text-off-white/70 max-w-3xl mx-auto">
            Plan your day at The Relocation Expo. Times are approximate and subject to change.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {schedule.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-blue-grey/10 p-6 rounded-xl hover:bg-blue-grey/20 transition-colors"
              >
                <div className="flex-shrink-0 w-20">
                  <span className="text-accent-yellow font-bold text-lg">
                    {item.time}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-off-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-off-white/70 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-off-white/50 text-sm">
            * Schedule is indicative and may be updated closer to the event date.
          </p>
        </div>
      </Container>
    </Section>
  );
}
