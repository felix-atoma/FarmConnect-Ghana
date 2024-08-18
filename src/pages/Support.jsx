import React, { useState } from 'react';
import { FaCommentDots, FaTimes } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const Support = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
    setStatusMessage('');
    setErrorMessage('');
  };

  const handleSend = async () => {
    setStatusMessage('');
    setErrorMessage('');
    setLoading(true);

    try {
      const response = await fetch('https://farm-connect-api.onrender.com/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming JWT is stored in local storage
        },
        body: JSON.stringify({ subject, message })
      });

      if (response.ok) {
        const data = await response.json();
        setStatusMessage('Feedback submitted successfully');
        // Optionally, clear the form fields
        setSubject('');
        setMessage('');
      } else {
        const errorData = await response.json();
        switch (response.status) {
          case 400:
            setErrorMessage(`Invalid feedback data: ${errorData.message}`);
            break;
          default:
            setErrorMessage('An unexpected error occurred.');
        }
      }
    } catch (error) {
      setErrorMessage('Network error. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ position: 'fixed', bottom: '10px', right: '10px', zIndex: 1000 }}>
      {/* Support Icon with Label */}
      <div 
        style={{ 
          position: 'relative', 
          width: '80px', 
          height: '80px', 
          backgroundColor: '#FF6F61', 
          borderRadius: '50%', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          cursor: 'pointer' 
        }}
        onClick={handleToggle}
      >
        <FaCommentDots size={30} color="#FFFFFF" />
        <span 
          style={{
            position: 'absolute',
            bottom: '-10px',
            color: '#FFFFFF',
            fontSize: '0.875rem',
            fontWeight: 'bold',
            backgroundColor: '#FF6F61',
            borderRadius: '5px',
            padding: '2px 5px',
          }}
        >
          Contact Support
        </span>
      </div>

      {/* Message Box */}
      {isOpen && (
        <div 
          style={{
            position: 'absolute', 
            bottom: '60px', 
            right: '0',
            backgroundColor: '#F9F9F9',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            borderRadius: '8px',
            width: '300px',
            padding: '15px',
            zIndex: 1000
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <AiOutlineMail size={24} color="#FF6F61" />
            <span style={{ fontWeight: 'bold' }}>Contact Us</span>
            <FaTimes size={24} color="#FF6F61" style={{ cursor: 'pointer' }} onClick={handleClose} />
          </div>
          <p style={{ marginTop: '10px' }}>
            Share your concerns, suggestions, or feedback to help us improve your experience.
          </p>
          <input
            type="text"
            placeholder="Subject*"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            style={{ width: '100%', marginTop: '10px', borderRadius: '4px', border: '1px solid #ddd', padding: '5px' }}
            required
          />
          <textarea 
            rows="4" 
            placeholder="Message*"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ width: '100%', marginTop: '10px', borderRadius: '4px', border: '1px solid #ddd', padding: '5px' }}
            required
          />
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
            <button 
              style={{ 
                backgroundColor: '#FF6F61',
                color: '#FFFFFF', 
                border: 'none', 
                borderRadius: '4px', 
                padding: '10px 15px',
                cursor: 'pointer',
                marginRight: '10px'
              }}
              onClick={handleSend}
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
            <button 
              style={{ 
                backgroundColor: 'orange', 
                color: '#FFFFFF', 
                border: 'none', 
                borderRadius: '4px', 
                padding: '10px 15px',
                cursor: 'pointer'
              }}
              onClick={handleClose}
            >
              Cancel
            </button>
          </div>
          {statusMessage && <p style={{ color: '#28a745', marginTop: '10px' }}>{statusMessage}</p>}
          {errorMessage && <p style={{ color: '#e60000', marginTop: '10px' }}>{errorMessage}</p>}
        </div>
      )}
    </div>
  );
};

export default Support;
