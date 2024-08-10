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
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F9FAFB', padding: '20px' }}>
      <h1 style={{ color: '#71B34A', marginBottom: '20px' }}>Messages</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#FFFFFF',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          width: '100%',
          maxWidth: '600px',
          overflowY: 'auto',
          marginBottom: '20px'
        }}
      >
        {messages.map((message) => (
          <div key={message.id} style={{ marginBottom: '10px', padding: '15px', backgroundColor: '#F9FAFB', borderRadius: '8px', position: 'relative', border: '1px solid #D1D5DB' }}>
            <p style={{ margin: 0 }}>{message.text}</p>
            <div style={{ position: 'absolute', top: '10px', right: '10px', display: 'flex', gap: '8px' }}>
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
      <div style={{ width: '100%', maxWidth: '600px' }}>
        {editingMessageId !== null ? (
          <div>
            <textarea
              value={editingMessageText}
              onChange={(e) => setEditingMessageText(e.target.value)}
              rows="3"
              style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #D1D5DB', marginBottom: '10px' }}
            />
            <button
              onClick={handleUpdateMessage}
              style={{ backgroundColor: '#71B34A', color: '#FFFFFF', padding: '10px', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', border: 'none', width: '100%', maxWidth: '150px', margin: '0 auto' }}
            >
              <MdSend size={20} style={{ marginRight: '5px' }} /> Update Message
            </button>
          </div>
        ) : (
          <div>
            <textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              rows="3"
              style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #D1D5DB', marginBottom: '10px' }}
            />
            <button
              onClick={handleSendMessage}
              style={{ backgroundColor: '#71B34A', color: '#FFFFFF', padding: '10px', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', border: 'none', width: '100%', maxWidth: '150px', margin: '0 auto' }}
            >
              <MdSend size={20} style={{ marginRight: '5px' }} /> Send Message
            </button>
          </div>
        )}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '600px',
          marginTop: '20px',
        }}
      >
        <div
          onClick={handleHomeClick}
          style={{
            backgroundColor: '#71B34A',
            color: '#FFFFFF',
            padding: '10px',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            border: 'none',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            width: '100%',
            maxWidth: '150px',
            textAlign: 'center'
          }}
        >
          <MdHome size={20} style={{ marginRight: '5px' }} /> Home
        </div>
        <div
          style={{
            backgroundColor: '#FFA500',
            color: '#FFFFFF',
            padding: '10px',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            border: 'none',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            width: '100%',
            maxWidth: '150px',
            textAlign: 'center'
          }}
        >
          <MdMessage size={20} style={{ marginRight: '5px' }} /> Messages
        </div>
      </div>
    </div>
  );
};

export default MessageHolder;
