import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaReply } from 'react-icons/fa';

// Mock data (Replace with actual API data)
const mockMessages = [
  { id: 1, from: 'Customer A', subject: 'Inquiry about product', body: 'Hello, I am interested in your product. Can you provide more details?', date: '2024-08-15' },
  { id: 2, from: 'Customer B', subject: 'Order status', body: 'Hi, I would like to know the status of my recent order.', date: '2024-08-14' },
];

const FarmerMessages = () => {
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);

  // Fetch messages from API or use mock data
  useEffect(() => {
    // Replace with API call
    setMessages(mockMessages);
  }, []);

  const handleViewMessage = (message) => {
    setSelectedMessage(message);
  };

  const handleReply = (message) => {
    // Implement reply functionality here
    console.log('Reply to:', message);
  };

  return (
    <MessagesContainer>
      <MessageList>
        {messages.map(message => (
          <MessageItem key={message.id} onClick={() => handleViewMessage(message)}>
            <Subject>{message.subject}</Subject>
            <From>{message.from}</From>
            <Date>{message.date}</Date>
          </MessageItem>
        ))}
      </MessageList>
      {selectedMessage && (
        <MessageDetails>
          <Subject>{selectedMessage.subject}</Subject>
          <From>{selectedMessage.from}</From>
          <Date>{selectedMessage.date}</Date>
          <Body>{selectedMessage.body}</Body>
          <ReplyButton onClick={() => handleReply(selectedMessage)}>
            <FaReply /> Reply
          </ReplyButton>
        </MessageDetails>
      )}
    </MessagesContainer>
  );
};

// Styled components
const MessagesContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const MessageList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 300px;
  background-color: #f4f4f4; /* Light gray background */
  border: 1px solid #e0e0e0; /* Light gray border */
  border-radius: 8px;
  overflow-y: auto;
  height: calc(100vh - 40px); /* Adjust height based on your layout */
`;

const MessageItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #e0e0e0; /* Light gray border */
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0; /* Light gray background on hover */
  }
`;

const Subject = styled.h3`
  font-size: 1em;
  margin: 0;
`;

const From = styled.p`
  font-size: 0.9em;
  color: #555;
  margin: 0;
`;

const Date = styled.p`
  font-size: 0.8em;
  color: #888;
  margin: 0;
`;

const MessageDetails = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #ffffff; /* White background */
  border: 1px solid #e0e0e0; /* Light gray border */
  border-radius: 8px;
`;

const Body = styled.p`
  font-size: 1em;
  margin-top: 10px;
`;

const ReplyButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  background-color: #71b34a; /* Green background */
  color: white;
  font-size: 1em;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    background-color: #5a9a3e; /* Darker green on hover */
  }
`;

export default FarmerMessages;
