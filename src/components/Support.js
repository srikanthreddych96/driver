import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import './Support.css';

const faqs = [
  { question: 'How do I reset my password?', answer: 'Click on the "Forgot Password" link on the login page and follow the instructions.' },
  { question: 'How do I contact support?', answer: 'You can contact us via the phone or email provided below.' },
  { question: 'Where can I find the billing reports?', answer: 'Navigate to the Billing & Invoicing section to view and download billing reports.' }
];

const randomBotResponses = [
  'I am here to assist you. How can I help?',
  'Could you please provide more details?',
  'I am not sure about that. Let me check for you.',
  'That’s an interesting question! I will get back to you on that.',
  'I am currently learning about that topic. Please check back later.',
  'Here’s a helpful tip: Try searching for it online.',
  'I am unable to answer that right now. Can you rephrase your question?',
  'Your feedback is important to us. Please contact support for more help.'
];

const Support = () => {
  const [selectedFAQ, setSelectedFAQ] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const toggleFAQ = (index) => {
    setSelectedFAQ(selectedFAQ === index ? null : index);
  };

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim()) {
      const response = getBotResponse(userInput.trim());
      setChatMessages([
        ...chatMessages,
        { sender: 'user', text: userInput.trim() },
        { sender: 'bot', text: response }
      ]);
      setUserInput('');
    }
  };

  const getBotResponse = (input) => {
    const lowercasedInput = input.toLowerCase();
    const matchedFAQ = faqs.find(faq => lowercasedInput.includes(faq.question.toLowerCase()));
    if (matchedFAQ) {
      return matchedFAQ.answer;
    } else {
      return randomBotResponses[Math.floor(Math.random() * randomBotResponses.length)];
    }
  };

  return (
    <div className="support-container">
      <h2>Support and Help</h2>
      <div className="support-options">
        <div className="support-option">
          <h3>FAQ</h3>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                  <span>{faq.question}</span>
                  <span className="faq-icon">
                    {selectedFAQ === index ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </div>
                {selectedFAQ === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="support-option">
          <h3>Contact Us</h3>
          <div className="contact-info">
            <div className="contact-item">
              <FaPhoneAlt /> <span>+100000000</span>
            </div>
            <div className="contact-item">
              <FaEnvelope /> <span>support@example.com</span>
            </div>
          </div>
        </div>
        <div className="support-option">
          <h3>Chat with Us</h3>
          <div className="chat-box">
            <div className="chat-messages">
              {chatMessages.map((message, index) => (
                <div key={index} className={`chat-message ${message.sender}`}>
                  <p>{message.text}</p>
                </div>
              ))}
            </div>
            <form className="chat-form" onSubmit={handleChatSubmit}>
              <input
                type="text"
                value={userInput}
                onChange={handleUserInput}
                placeholder="Type your message..."
                required
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
        <div className="support-option">
          <h3>Follow Us</h3>
          <div className="social-media-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;

