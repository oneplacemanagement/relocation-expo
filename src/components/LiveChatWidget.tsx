'use client';

import { useState } from 'react';

export function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Array<{ text: string; sender: 'user' | 'bot' }>>([
    { text: "Hi! 👋 I'm here to help you with questions about The Relocation Expo. What would you like to know?", sender: 'bot' }
  ]);

  const quickQuestions = [
    "Do I need to bring anything?",
    "Can I speak to migration agents?",
    "Are children welcome?",
    "Will there be real job opportunities?",
    "Can I buy tickets at the door?",
  ];

  const handleQuickQuestion = (question: string) => {
    setMessages([...messages, { text: question, sender: 'user' }]);
    
    // Simple FAQ responses
    let response = '';
    if (question.includes('bring')) {
      response = "Bring copies of your CV, a notebook, and an open mind! We recommend having your CV ready to hand directly to employers.";
    } else if (question.includes('migration agents')) {
      response = "Yes! There'll be migration clinics where you can book a 15-20 minute consultation with agents who specialise in 482 sponsorship, skilled migration, and family visas.";
    } else if (question.includes('children')) {
      response = "Absolutely! The event is family-friendly. There'll be a quiet area if you need space, and the atmosphere is welcoming for all ages.";
    } else if (question.includes('job opportunities')) {
      response = "Yes! Australian employers attending are recruiting now and many are visa sponsors. Bring your CV and be ready to talk about your skills and experience. 💼";
    } else if (question.includes('door')) {
      response = "Yes, Walk-In tickets will be available at the door (cash only) on the day. However, they're more expensive than online tickets (€15-35). We recommend buying online to guarantee your spot and skip the queue! 🎟️";
    }
    
    setTimeout(() => {
      setMessages(prev => [...prev, { text: response, sender: 'bot' }]);
    }, 500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setMessages([...messages, { text: message, sender: 'user' }]);
    
    // Auto-response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "Thanks for your message! For immediate assistance, email us at info@therelocationexpo.com. We'll respond within 24 hours! 📧", 
        sender: 'bot' 
      }]);
    }, 800);
    
    setMessage('');
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-accent-yellow to-yellow-500 text-navy w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 animate-bounce"
          aria-label="Open chat"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-3rem)] bg-navy border-2 border-accent-yellow/30 rounded-2xl shadow-2xl flex flex-col animate-fade-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-accent-yellow to-yellow-500 text-navy p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg">Chat with Us</h3>
                <p className="text-xs opacity-80">Answers to common questions</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-navy/20 p-1 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-navy/50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    msg.sender === 'user'
                      ? 'bg-accent-yellow text-navy rounded-br-none'
                      : 'bg-blue-grey/30 text-off-white rounded-bl-none'
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="p-4 bg-navy/30 border-t border-blue-grey/30">
              <p className="text-off-white/70 text-xs mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickQuestion(q)}
                    className="bg-blue-grey/30 hover:bg-accent-yellow/20 text-off-white/80 hover:text-accent-yellow text-xs px-3 py-2 rounded-full transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-4 bg-navy border-t border-blue-grey/30">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-blue-grey/30 text-off-white border border-blue-grey/30 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent-yellow"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-accent-yellow to-yellow-500 text-navy w-10 h-10 rounded-full flex items-center justify-center hover:scale-105 transition-transform"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
