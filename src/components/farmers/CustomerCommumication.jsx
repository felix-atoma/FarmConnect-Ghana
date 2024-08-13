import React, { useState, useEffect } from 'react';
import { fetchMessages, sendMessage } from '../../services/Auth'; // Adjust path as necessary

const CustomerCommunication = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Fetch messages data from API
    const getMessages = async () => {
      try {
        const response = await fetchMessages(); // Use the correct method
        setMessages(response.data); // Adjust based on response structure
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    getMessages();
  }, []);

  const handleSend = async () => {
    try {
      await sendMessage(newMessage); // Use the correct method
      setNewMessage('');
      const updatedMessages = await fetchMessages(); // Refresh messages
      setMessages(updatedMessages.data); // Adjust based on response structure
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Customer Communication</h1>
      <div style={messagesContainerStyle}>
        {messages.map(message => (
          <div key={message.id} style={messageItemStyle}>
            <p><strong>{message.sender}:</strong> {message.text}</p>
          </div>
        ))}
      </div>
      <textarea
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type your message here..."
        style={messageInputStyle}
      />
      <button onClick={handleSend} style={buttonStyle}>Send</button>
    </div>
  );
};

// Inline CSS styles
const containerStyle = { padding: '20px' };
const headingStyle = { fontSize: '24px', marginBottom: '20px' };
const messagesContainerStyle = { marginBottom: '20px' };
const messageItemStyle = { padding: '10px', borderBottom: '1px solid #ddd' };
const messageInputStyle = { width: '100%', padding: '10px' };
const buttonStyle = { backgroundColor: '#71B34A', color: '#fff', padding: '10px', border: 'none', cursor: 'pointer' };

export default CustomerCommunication;
