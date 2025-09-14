import React, { useState } from "react";
import "./FAQs.css";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqData = [
  {
    question: "How do I enroll or register for courses?",
    answer:
      "Start by creating a user account on our website. You will typically need to provide your name, email address, and create a password. Make sure to verify your email if required.",
  },
  {
    question: "How can I pay for courses?",
    answer:
      "You can pay using credit card, debit card, UPI, or net banking. We also offer EMI options for selected courses.",
  },
  {
    question: "Do I get a certificate after completion?",
    answer:
      "Yes! Once you complete the course successfully, you’ll receive a verifiable digital certificate.",
  },
];

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-header">
        <p className="faq-subtitle">F.A.Q.</p>
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Maecenas felis felis, vulputate sit amet mauris.
        </p>
      </div>

      <div className="faq-container">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`faq-card ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleToggle(index)}
          >
            <div className="faq-question">
              {activeIndex === index ? <FiMinus /> : <FiPlus />}
              <h3>{faq.question}</h3>
            </div>
            <div className="faq-answer">{faq.answer}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
