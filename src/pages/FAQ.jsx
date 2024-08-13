// src/pages/FAQ.jsx

import React, { useState } from 'react';

const questionsAndAnswers = [
  {
    question: 'What is FarmConnect Ghana?',
    answer: 'FarmConnect Ghana is a platform that connects farmers with customers, enabling efficient and direct trade of agricultural produce.',
  },
  {
    question: 'How do I register as a farmer?',
    answer: 'To register as a farmer, go to the registration page and select the "Farmer" option. Fill out the required details about your farm and produce.',
  },
  {
    question: 'How can I contact customer support?',
    answer: 'You can contact customer support by emailing support@farmconnectghana.com or visiting the "Contact Us" page.',
  },
  {
    question: 'How do I place an order?',
    answer: 'Browse the products listed by farmers, select the items you want, and proceed to checkout. You can track your order status in the "My Orders" section.',
  },
  {
    question: 'What payment methods are accepted?',
    answer: 'We accept various payment methods including credit/debit cards and mobile money. Please check the payment options during checkout.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <p className="faq-description">Find answers to the most common questions about FarmConnect Ghana.</p>
      <div className="faq-list">
        {questionsAndAnswers.map((item, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleQuestion(index)}>
              {item.question}
              <span className={`faq-icon ${openIndex === index ? 'open' : ''}`}>&#9662;</span>
            </button>
            {openIndex === index && <p className="faq-answer">{item.answer}</p>}
          </div>
        ))}
      </div>
      <style jsx>{`
        .faq-container {
          max-width: 800px;
          margin: auto;
          padding: 20px;
        }
        .faq-title {
          font-size: 2rem;
          margin-bottom: 10px;
          color: #333;
        }
        .faq-description {
          font-size: 1.1rem;
          color: #666;
          margin-bottom: 20px;
        }
        .faq-list {
          display: flex;
          flex-direction: column;
        }
        .faq-item {
          border-bottom: 1px solid #ddd;
          padding: 10px 0;
        }
        .faq-question {
          background: none;
          border: none;
          font-size: 1.1rem;
          text-align: left;
          width: 100%;
          cursor: pointer;
          color: #333;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .faq-answer {
          font-size: 1rem;
          color: #555;
          margin-top: 10px;
          padding-left: 20px;
        }
        .faq-icon {
          font-size: 1.2rem;
          transition: transform 0.3s;
        }
        .faq-icon.open {
          transform: rotate(180deg);
        }
      `}</style>
    </div>
  );
};

export default FAQ;
