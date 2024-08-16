import React, { useState } from 'react';
import { FaSms, FaTimes } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const Support = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

  const handleSend = () => {
    // Implement send message functionality here
    alert('Message sent!');
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div style={{ position: 'fixed', bottom: '10px', right: '10px', zIndex: 1000 }}>
      {/* Support Icon with Label */}
      <div 
        style={{ 
          position: 'relative', 
          width: '80px', 
          height: '80px', 
          backgroundColor: '#71B34A', 
          borderRadius: '50%', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          cursor: 'pointer' 
        }}
        onClick={handleToggle}
      >
        <FaSms size={30} color="#FFFFFF" />
        <span 
          style={{
            position: 'absolute',
            bottom: '-10px',
            color: '#FFFFFF',
            fontSize: '0.875rem',
            fontWeight: 'bold',
            backgroundColor: '#71B34A',
            borderRadius: '5px',
            padding: '2px 5px',
          }}
        >
          Support
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
            width: '250px',
            padding: '15px',
            zIndex: 1000
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <AiOutlineMail size={24} color="#71B34A" />
            <span style={{ fontWeight: 'bold' }}>Have your say!</span>
            <FaTimes size={24} color="#71B34A" style={{ cursor: 'pointer' }} onClick={handleClose} />
          </div>
          <p style={{ marginTop: '10px' }}>
            Share your complaints, suggestions, and feedback to help us improve your experience.
          </p>
          <textarea 
            rows="4" 
            style={{ width: '100%', marginTop: '10px', borderRadius: '4px', border: '1px solid #ddd', padding: '5px' }}
          />
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
            <button 
              style={{ 
                backgroundColor: '#71B34A', 
                color: '#FFFFFF', 
                border: 'none', 
                borderRadius: '4px', 
                padding: '10px 15px',
                cursor: 'pointer',
                marginRight: '10px'
              }}
              onClick={handleSend}
            >
              Send
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
        </div>
      )}
    </div>
  );
};

export default Support;
