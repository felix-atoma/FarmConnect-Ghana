import React, { useState } from 'react';
import { MdHome, MdMessage, MdDelete, MdEdit, MdSend } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const MessageHolder = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello, I need help with my account.' },
    { id: 2, text: 'Can you provide information on pricing?' }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [editingMessageId, setEditingMessageId] = useState(null);
  const [editingMessageText, setEditingMessageText] = useState('');
  const navigate = useNavigate();

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { id: Date.now(), text: newMessage }]);
      setNewMessage('');
    }
  };

  const handleEditMessage = (id, text) => {
    setEditingMessageId(id);
    setEditingMessageText(text);
  };

  const handleUpdateMessage = () => {
    setMessages(
      messages.map((message) =>
        message.id === editingMessageId
          ? { ...message, text: editingMessageText }
          : message
      )
    );
    setEditingMessageId(null);
    setEditingMessageText('');
  };

  const handleDeleteMessage = (id) => {
    setMessages(messages.filter((message) => message.id !== id));
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', padding: '20px', backgroundColor: '#F9FAFB' }}>
      <h1 style={{ color: '#71B34A' }}>Message Holder</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#FFFFFF',
          padding: '20px',
          borderRadius: '0.5rem',
          flex: 1,
          overflowY: 'auto',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        {messages.map((message) => (
          <div key={message.id} style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#F9FAFB', borderRadius: '0.5rem', position: 'relative', border: '1px solid #D1D5DB' }}>
            <p>{message.text}</p>
            <div style={{ position: 'absolute', top: '10px', right: '10px', display: 'flex', gap: '5px' }}>
              <MdEdit
                size={20}
                color="#FFA500"
                style={{ cursor: 'pointer' }}
                onClick={() => handleEditMessage(message.id, message.text)}
              />
              <MdDelete
                size={20}
                color="#E53E3E"
                style={{ cursor: 'pointer' }}
                onClick={() => handleDeleteMessage(message.id)}
              />
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px' }}>
        {editingMessageId !== null ? (
          <div>
            <textarea
              value={editingMessageText}
              onChange={(e) => setEditingMessageText(e.target.value)}
              rows="3"
              style={{ width: '100%', padding: '10px', borderRadius: '0.5rem', border: '1px solid #D1D5DB', marginBottom: '10px' }}
            />
            <button
              onClick={handleUpdateMessage}
              style={{ backgroundColor: '#71B34A', color: '#FFFFFF', padding: '10px', borderRadius: '0.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center', border: 'none' }}
            >
              <MdSend size={20} /> Update Message
            </button>
          </div>
        ) : (
          <div>
            <textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              rows="3"
              style={{ width: '100%', padding: '10px', borderRadius: '0.5rem', border: '1px solid #D1D5DB', marginBottom: '10px' }}
            />
            <button
              onClick={handleSendMessage}
              style={{ backgroundColor: '#71B34A', color: '#FFFFFF', padding: '10px', borderRadius: '0.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center', border: 'none' }}
            >
              <MdSend size={20} /> Send Message
            </button>
          </div>
        )}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '20px',
        }}
      >
        <div
          onClick={handleHomeClick}
          style={{
            backgroundColor: '#71B34A',
            color: '#FFFFFF',
            padding: '10px',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            border: 'none',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <MdHome size={20} /> Home
        </div>
        <div
          style={{
            backgroundColor: '#FFA500',
            color: '#FFFFFF',
            padding: '10px',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            border: 'none',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <MdMessage size={20} /> Messages
        </div>
      </div>
    </div>
  );
};

export default MessageHolder;
