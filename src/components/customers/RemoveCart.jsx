import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const RemoveButton = styled.button`
  background-color: #e60000; /* Red color for the button */
  color: #ffffff; /* White text color */
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c70000; /* Darker red on hover */
  }

  &:disabled {
    background-color: #f0f0f0; /* Light gray for disabled state */
    color: #a0a0a0; /* Gray text for disabled state */
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.p`
  color: #e60000; /* Red color for error messages */
  margin: 0;
  font-weight: bold;
`;

const RemoveCartItem = ({ itemId, onRemoveSuccess }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRemoveItem = async () => {
    setErrorMessage('');
    setLoading(true);

    try {
      const response = await fetch(`http://localhost:5179/api/customer/cart/${itemId}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming JWT is stored in local storage
        }
      });

      if (response.ok) {
        const data = await response.json();
        if (data.message === 'Item removed from cart successfully') {
          // Notify the parent component of success
          onRemoveSuccess();
        }
      } else {
        const errorData = await response.json();
        switch (response.status) {
          case 401:
            setErrorMessage('Unauthorized access. Please login.');
            break;
          case 404:
            setErrorMessage('Cart item not found.');
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
    <Container>
      <RemoveButton onClick={handleRemoveItem} disabled={loading}>
        {loading ? 'Removing...' : 'Remove Item'}
      </RemoveButton>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
};

export default RemoveCartItem;
