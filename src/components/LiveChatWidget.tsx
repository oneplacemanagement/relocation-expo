'use client';

import { useState } from 'react';

export function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Array<{ text: string; sender: 'user' | 'bot' }>>([
    { text: "Hi! 👋 I'm here to help you with questions about The Relocation Expo. What would you like to know?", sender: 'bot' }
  ]);

  const quickQuestions = [
    "When is the event?",
    "Where is it located?",
    "How much does it cost?",
    "What destinations are covered?",
    "Can I book consultations?",
  ];

  const handleQuickQuestion = (question: string) => {
    setMessages([...messages, { text: question, sender: 'user' }]);
    
    // Simple FAQ responses
    let response = '';
    if (question.includes('When')) {
      response = "The Relocation Expo is on October 3, 2026, from 10:00 AM to 5:00 PM. 📅";
    } else if (question.includes('Where')) {
      response = "We're at RDS Simmonscourt, Ballsbridge, Dublin 4, Ireland. Easy to reach by public transport! 📍";
    } else if (question.includes('cost')) {
      response = "Early Bird tickets are just €15 (until March 31). Standard tickets are €25, or €35 at the door. Save €10 by registering early! 💰";
    } else if (question.includes('destinations')) {
      response = "We cover Australia (our main focus), Canada, New Zealand, USA, Europe, and more! 🌍";
    } else if (question.includes('consultations')) {
      response = "Yes! You can book free one-on-one consultations with migration agents at the event. Register early to secure your preferred time slots. 🤝";
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
        text: "Thanks for your message! For immediate assistance, call us at +353 1 234 5678 or email info@relocationexpo.ie. We'll respond within 24 hours! 📧", 
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
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold animate-pulse">
            1
          </span>
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
                <p className="text-xs opacity-80">We typically reply instantly</p>
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
