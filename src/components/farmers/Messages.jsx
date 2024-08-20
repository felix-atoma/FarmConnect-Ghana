import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { FaEnvelope } from 'react-icons/fa';
import axios from 'axios'; // Make sure axios is installed for API calls
import { useNavigate } from 'react-router-dom';

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

// Modal for sending a new message
const MessageModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  width: 80%;
  max-width: 600px;
`;

// Close button for the modal
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
`;

// Form styling for sending messages
const MessageForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

// Form inputs
const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

// Form textarea
const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  height: 150px;
`;

// Submit button
const SubmitButton = styled.button`
  padding: 10px;
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

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newMessage, setNewMessage] = useState({ subject: '', body: '' });
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch messages from the API
    const fetchMessages = async () => {
      try {
        const response = await axios.get('/api/messages'); // Replace with your API endpoint
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);

  const handleMessageClick = (messageId) => {
    // Navigate to message details page or show details
    navigate(`/messages/${messageId}`);
  };

  const handleNewMessageClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMessage((prevMessage) => ({ ...prevMessage, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/messages', newMessage); // Replace with your API endpoint
      setShowModal(false);
      setNewMessage({ subject: '', body: '' });
      // Optionally, refresh messages
    } catch (error) {
      console.error('Error sending message:', error);
    }
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
      <NewMessageButton onClick={handleNewMessageClick}>Send New Message</NewMessageButton>
      {showModal && (
        <MessageModal>
          <CloseButton onClick={handleCloseModal}>&times;</CloseButton>
          <h3>New Message</h3>
          <MessageForm onSubmit={handleSubmit}>
            <Input
              type="text"
              name="subject"
              placeholder="Subject"
              value={newMessage.subject}
              onChange={handleInputChange}
              required
            />
            <Textarea
              name="body"
              placeholder="Message body"
              value={newMessage.body}
              onChange={handleInputChange}
              required
            />
            <SubmitButton type="submit">Send</SubmitButton>
          </MessageForm>
        </MessageModal>
      )}
    </MessagesContainer>
  );
};

export default Messages;
