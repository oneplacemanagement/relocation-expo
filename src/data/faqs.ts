export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'tickets' | 'visa' | 'venue';
}

export const faqs: FAQ[] = [
  {
    id: 'what-to-bring',
    question: 'Do I need to bring anything?',
    answer: 'Just yourself — that\'s genuinely all you need. The expo is designed so you can walk in, explore, listen, and learn without any preparation.\n\nIf you\'re job-seeking, bringing a CV can be a big advantage. Many employers and recruiters will be available for informal chats, and having your CV ready means you can share your experience on the spot, stand out to employers offering sponsorship, leave a lasting impression after a conversation, and make it easier for recruiters to follow up with you.\n\nBut don\'t worry if you don\'t have one printed — plenty of attendees come without a CV and still get great value from the day. You can also keep a digital copy on your phone to email directly to employers or migration agents if needed.\n\nMost importantly, bring your questions, your curiosity, and your openness to new possibilities. The expo is built to give you clarity, confidence, and real next steps — no matter where you are in your relocation journey.',
    category: 'general',
  },
  {
    id: 'migration-agents',
    question: 'Can I speak to migration agents on the day?',
    answer: 'Yes — throughout the entire event, you\'ll have access to migration advice clinics run by registered, experienced migration professionals. These aren\'t generic information desks; they\'re real one-to-one conversations where you can ask specific questions about your situation and get clear, practical guidance.\n\nAcross the day, you\'ll be able to speak directly with registered migration agents who understand the Irish/UK-to-Australia pathway, get clarity on visa options, eligibility, timelines, and costs, understand how employer sponsorship works and what you need to prepare, ask about family visas, partner visas, skilled visas, and regional pathways, learn how to avoid common mistakes that delay applications, and receive personalised advice tailored to your profession, experience, and goals.\n\nThese sessions are designed to give you real answers, not vague generalities. Whether you\'re just exploring the idea or ready to start the process, the migration clinics are one of the most valuable parts of the expo — and a big reason many attendees walk away feeling more confident and informed.',
    category: 'visa',
  },
  {
    id: 'children-welcome',
    question: 'Are children welcome?',
    answer: 'Absolutely. Families are a huge part of the relocation journey, and children are more than welcome at the expo. Our Family Ticket covers 2 adults and up to 3 children, making it easy to bring everyone along.\n\nWe actively encourage parents to involve their kids in the day. The expo is designed to help them feel excited, included, and confident about the move. Throughout the venue, you\'ll find large screens showcasing real success stories of families who\'ve already made the move, images and videos of Australian life from beaches and wildlife to schools, parks, and community activities, main-stage speakers sharing their own family relocation journeys, honest, child-friendly insights into what life in Australia is really like, and interactive moments where kids can see the places they might soon call home.\n\nIt\'s a day that helps children visualise their new life, understand the adventure ahead, and feel part of the decision — not just along for the ride.',
    category: 'general',
  },
  {
    id: 'real-jobs',
    question: 'Will there be real job opportunities?',
    answer: 'Yes — absolutely. This isn\'t a theoretical careers fair or a day of vague conversations. The Relocation Expo brings real Australian employers, real vacancies, and real sponsorship pathways directly to Dublin.\n\nAcross the day, you\'ll be able to meet employers who are actively hiring right now, discuss 482 sponsorship pathways and long-term career options, explore roles across mining, construction, civil, healthcare, education, tech, IT, trades, engineering, and more, speak directly with recruiters who understand the Irish skillset and are ready to match you with opportunities, attend industry-specific sessions where employers outline exact skills they need and how to stand out, join job-matching conversations designed to help you take the next step, and learn what salaries, rosters, benefits, and lifestyle packages look like across different states.\n\nYou\'ll also hear from people who\'ve already secured roles and made the move — sharing what worked, what didn\'t, and how they landed their sponsorship. This is your chance to walk away with clarity, confidence, and real pathways toward a new life in Australia.',
    category: 'general',
  },
  {
    id: 'tickets-at-door',
    question: 'Can I buy tickets at the door?',
    answer: 'Yes — walk-in tickets will be available at the door (cash only) and priced higher than Early Bird online tickets. Early Bird tickets launch 1st May 2026.',
    category: 'tickets',
  },
  {
    id: 'just-exploring',
    question: 'Is the event suitable for people who are just exploring the idea?',
    answer: 'The Relocation Expo is designed to support people at every stage of the journey — from the "just thinking about it" stage to those ready to secure sponsorship and start packing.\n\nIf you\'re simply exploring the idea, you\'ll find clear, honest information about visas, relocation, and what life in Australia is really like, real stories from individuals and families who\'ve already made the move, industry insights that help you understand job demand, salaries, and career pathways, lifestyle overviews of different Australian states and cities, practical advice on costs, timelines, and what to expect, and a no-pressure environment where you can browse, listen, ask questions, and take it all in at your own pace.\n\nMany people leave the expo feeling more confident, more informed, and more excited — even if they\'re not ready to commit yet. It\'s the perfect place to explore your options, get clarity, and decide whether relocating to Australia is the right move for you and your family.',
    category: 'general',
  },
];
