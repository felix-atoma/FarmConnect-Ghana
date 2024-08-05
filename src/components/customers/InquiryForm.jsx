// src/components/Customer/InquiryForm.jsx
import React, { useState } from 'react';

const InquiryForm = ({ farmerId }) => {
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle inquiry submission
    alert(`Inquiry sent to farmer ${farmerId}`);
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <textarea
        value={message}
        onChange={handleChange}
        placeholder="Your inquiry..."
        rows="4"
        style={textareaStyle}
      />
      <button type="submit" style={buttonStyle}>Send Inquiry</button>
    </form>
  );
};

// Inline CSS styles
const formStyle = { display: 'flex', flexDirection: 'column', gap: '10px' };
const textareaStyle = { padding: '10px', borderRadius: '5px', border: '1px solid #ddd', width: '100%' };
const buttonStyle = { padding: '10px', borderRadius: '5px', backgroundColor: '#71B34A', color: '#fff', border: 'none' };

export default InquiryForm;
