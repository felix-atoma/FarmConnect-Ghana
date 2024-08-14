import React, { useState, useEffect } from 'react';
import { fetchMessages,sendMessage } from '../../services/Auth';

const CustomerCommunication = ({ userId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const data = await fetchMessages(userId);
        setMessages(data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    loadMessages();
  }, [userId]);

  const handleSendMessage = async () => {
    if (newMessage.trim()) {
      try {
        const messageData = { text: newMessage, userId };
        await sendMessage(messageData);
        setNewMessage('');
        // Reload messages after sending
        const data = await fetchMessages(userId);
        setMessages(data);
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  const containerStyle = {
    padding: '1rem',
    maxWidth: '600px',
    margin: '0 auto',
  };

  const messageListStyle = {
    border: '1px solid #ddd',
    padding: '1rem',
    maxHeight: '300px',
    overflowY: 'auto',
    marginBottom: '1rem',
  };

  const messageItemStyle = {
    padding: '0.5rem',
    borderBottom: '1px solid #eee',
  };

  const inputContainerStyle = {
    marginTop: '1rem',
  };

  const textareaStyle = {
    width: '100%',
    height: '100px',
    padding: '0.5rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    marginTop: '0.5rem',
    padding: '0.5rem 1rem',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  return (
    <div style={containerStyle}>
      <h2>Customer Communication</h2>
      <div style={messageListStyle}>
        {messages.length > 0 ? (
          <ul style={{ listStyleType: 'none', padding: '0' }}>
            {messages.map((msg) => (
              <li key={msg.id} style={messageItemStyle}>{msg.text}</li>
            ))}
          </ul>
        ) : (
          <p>No messages yet.</p>
        )}
      </div>
      <div style={inputContainerStyle}>
        <textarea
          style={textareaStyle}
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message here..."
        />
        <button
          style={buttonStyle}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default CustomerCommunication;
