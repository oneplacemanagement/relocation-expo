'use client';

import { useState, FormEvent } from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { eventData } from '@/data/event';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate submission (you can add actual API endpoint later)
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <>
      <Section className="pt-32">
        <Container size="md">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-off-white mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-off-white/70 max-w-2xl mx-auto">
              Have questions about The Relocation Expo? We're here to help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Form */}
            <div>
              {status === 'success' ? (
                <Card>
                  <div className="text-center py-8">
                    <div className="text-5xl mb-4">✅</div>
                    <h3 className="text-2xl font-bold text-accent-yellow mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-off-white/80 mb-4">
                      Thank you for contacting us. We'll get back to you within 1-2 business days.
                    </p>
                    <Button onClick={() => setStatus('idle')} variant="outline">
                      Send Another Message
                    </Button>
                  </div>
                </Card>
              ) : (
                <Card>
                  <h2 className="text-2xl font-bold text-accent-yellow mb-6">
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-off-white font-semibold mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-navy border border-blue-grey/30 rounded-lg text-off-white placeholder-muted-grey focus:outline-none focus:ring-2 focus:ring-accent-yellow"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-off-white font-semibold mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-navy border border-blue-grey/30 rounded-lg text-off-white placeholder-muted-grey focus:outline-none focus:ring-2 focus:ring-accent-yellow"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-off-white font-semibold mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 bg-navy border border-blue-grey/30 rounded-lg text-off-white placeholder-muted-grey focus:outline-none focus:ring-2 focus:ring-accent-yellow"
                        placeholder="What's your question about?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-off-white font-semibold mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-navy border border-blue-grey/30 rounded-lg text-off-white placeholder-muted-grey focus:outline-none focus:ring-2 focus:ring-accent-yellow"
                        placeholder="Tell us how we can help..."
                      />
                    </div>

                    <Button
                      type="submit"
                      fullWidth
                      disabled={status === 'submitting'}
                    >
                      {status === 'submitting' ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </Card>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <h2 className="text-2xl font-bold text-accent-yellow mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-off-white mb-2">
                      📧 Email
                    </h3>
                    <a
                      href={`mailto:${eventData.contactEmail}`}
                      className="text-off-white/70 hover:text-accent-yellow transition-colors"
                    >
                      {eventData.contactEmail}
                    </a>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-off-white mb-2">
                      📍 Event Venue
                    </h3>
                    <p className="text-off-white/70">
                      {eventData.venue}<br />
                      {eventData.address}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-off-white mb-2">
                      📅 Event Date
                    </h3>
                    <p className="text-off-white/70">
                      {eventData.date}<br />
                      {eventData.hours}
                    </p>
                  </div>
                </div>
              </Card>

              <Card>
                <h3 className="text-lg font-bold text-accent-yellow mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/faq" className="text-off-white/70 hover:text-accent-yellow transition-colors">
                      → Frequently Asked Questions
                    </a>
                  </li>
                  <li>
                    <a href="/exhibitors" className="text-off-white/70 hover:text-accent-yellow transition-colors">
                      → View Exhibitors
                    </a>
                  </li>
                  <li>
                    <a href="/#register" className="text-off-white/70 hover:text-accent-yellow transition-colors">
                      → Register Your Interest
                    </a>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
