import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { FaEnvelope } from 'react-icons/fa';

// Container for the messages page
const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// Header styling
const Header = styled.div`
  margin-bottom: 20px;
  border-bottom: 2px solid #71b34a;
  padding-bottom: 10px;
  h2 {
    font-size: 1.5em;
    color: #333;
    margin: 0;
  }
`;

// List of messages container
const MessagesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// Individual message styling
const MessageCard = styled.div`
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  cursor: pointer;
  
  &:hover {
    background-color: #f1f1f1;
  }
`;

// Message header styling
const MessageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

// Message body styling
const MessageBody = styled.div`
  font-size: 1em;
  color: #333;
`;

// Styled button for sending new messages
const NewMessageButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  background-color: #71b34a;
  color: white;
  font-size: 1em;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #5a9b38;
  }
`;

// Example message data (replace with actual data from an API or state)
const sampleMessages = [
  { id: 1, subject: 'Order Update', date: '2024-08-20', body: 'Your order has been shipped.' },
  { id: 2, subject: 'Customer Inquiry', date: '2024-08-19', body: 'Please provide more details about your product.' },
  { id: 3, subject: 'Feedback Request', date: '2024-08-18', body: 'We would love to hear your feedback on our service.' }
];

const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Simulate fetching messages (replace with API call)
    setMessages(sampleMessages);
  }, []);

  const handleMessageClick = (messageId) => {
    // Handle message click (e.g., show details or navigate to a details page)
    console.log(`Message ${messageId} clicked`);
  };

  return (
    <MessagesContainer>
      <Header>
        <h2><FaEnvelope /> Messages</h2>
      </Header>
      <MessagesList>
        {messages.map((message) => (
          <MessageCard key={message.id} onClick={() => handleMessageClick(message.id)}>
            <MessageHeader>
              <strong>{message.subject}</strong>
              <span>{message.date}</span>
            </MessageHeader>
            <MessageBody>
              {message.body}
            </MessageBody>
          </MessageCard>
        ))}
      </MessagesList>
      <NewMessageButton>Send New Message</NewMessageButton>
    </MessagesContainer>
  );
};

export default Messages;
