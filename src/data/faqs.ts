export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'tickets' | 'visa' | 'venue';
}

export const faqs: FAQ[] = [
  {
    id: 'cost',
    question: 'What is the cost of attending The Relocation Expo?',
    answer: 'Ticket pricing will be announced soon. Register your interest to be notified when tickets go on sale and to receive early bird offers.',
    category: 'tickets',
  },
  {
    id: 'who-should-attend',
    question: 'Who should attend?',
    answer: 'Anyone considering relocating abroad, especially Irish residents interested in moving to Australia. We also have exhibitors covering Canada, New Zealand, USA, and Europe.',
    category: 'general',
  },
  {
    id: 'what-to-expect',
    question: 'What can I expect at the expo?',
    answer: 'You\'ll meet registered migration agents, visa specialists, relocation experts, and employment consultants. Attend informational talks, one-on-one visa clinics, and collect resources to help plan your move.',
    category: 'general',
  },
  {
    id: 'visa-advice',
    question: 'Can I get personalized visa advice at the event?',
    answer: 'Yes. Many exhibitors offer free initial consultations and can discuss your specific situation. However, detailed assessments may require a follow-up appointment.',
    category: 'visa',
  },
  {
    id: 'parking',
    question: 'Is there parking at the RDS?',
    answer: 'Yes, the RDS has on-site parking available. We recommend arriving early or using public transport (DART to Sandymount or Dublin Bus routes).',
    category: 'venue',
  },
  {
    id: 'age-restrictions',
    question: 'Are there age restrictions?',
    answer: 'The expo is open to all ages, but content is geared towards adults planning to relocate. Children are welcome but there are no dedicated children\'s activities.',
    category: 'general',
  },
  {
    id: 'what-to-bring',
    question: 'What should I bring?',
    answer: 'Bring a notepad, questions for exhibitors, and copies of any relevant documents (passport, CV, qualifications) if you want personalized advice. Business cards are helpful too.',
    category: 'general',
  },
  {
    id: 'food',
    question: 'Will food be available?',
    answer: 'Yes, there will be refreshments and light snacks available at the venue. The RDS also has café facilities.',
    category: 'venue',
  },
  {
    id: 'australia-focus',
    question: 'I\'m interested in countries other than Australia. Is this expo still for me?',
    answer: 'Absolutely! While Australia is our primary focus, we have exhibitors covering Canada, New Zealand, USA, and Europe. You\'ll find valuable information for various destinations.',
    category: 'general',
  },
  {
    id: 'register-advance',
    question: 'Do I need to register in advance?',
    answer: 'Pre-registration is strongly encouraged to help us manage capacity and send you updates. Walk-ins may be accepted subject to space availability.',
    category: 'tickets',
  },
];
