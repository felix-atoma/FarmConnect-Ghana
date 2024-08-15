// src/components/FeedbackForm.jsx
import { useState } from 'react';
import axios from 'axios';

function FeedbackForm() {
  const [feedback, setFeedback] = useState('');

  const handleChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://farm-connect-api.onrender.com/feedback', { feedback });
      alert('Feedback submitted successfully!');
      setFeedback('');
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={feedback} onChange={handleChange} placeholder="Your feedback" />
      <button type="submit">Submit Feedback</button>
    </form>
  );
}

export default FeedbackForm;
