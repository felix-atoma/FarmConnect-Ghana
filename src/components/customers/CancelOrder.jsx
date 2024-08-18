import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #ffffff; /* White background for the container */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h2`
  color: #4a4a4a; /* Dark gray color for the heading */
  margin-bottom: 20px;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 6px;
  margin-bottom: 15px;
  font-size: 16px;

  &:focus {
    border-color: #71b34a; /* Green border on focus */
    outline: none;
  }
`;

const Button = styled.button`
  background-color: #f7931e; /* Orange color for the button */
  color: #ffffff; /* White text color */
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e67e22; /* Darker orange on hover */
  }
`;

const Message = styled.p`
  text-align: center;
  font-weight: bold;
  color: ${props => props.success ? '#4a4a4a' : '#e60000'}; /* Green for success, red for error */
`;

const CancelOrder = () => {
  const [orderId, setOrderId] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCancelOrder = async () => {
    setMessage('');
    setErrorMessage('');

    try {
      const response = await fetch(`https://farm-connect-api.onrender.com/api/customer/orders/${orderId}/cancel`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming JWT is stored in local storage
        },
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message);
      } else {
        const errorData = await response.json();
        switch (response.status) {
          case 401:
            setErrorMessage('Unauthorized access. Please login.');
            break;
          case 404:
            setErrorMessage('Order not found.');
            break;
          case 500:
            setErrorMessage('Internal server error. Please try again later.');
            break;
          default:
            setErrorMessage('An unexpected error occurred.');
        }
      }
    } catch (error) {
      setErrorMessage('Network error. Please check your connection.');
    }
  };

  return (
    <Container>
      <Heading>Cancel Order</Heading>
      <Input
        type="text"
        placeholder="Enter Order ID"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
      />
      <Button onClick={handleCancelOrder}>Cancel Order</Button>
      {message && <Message success>{message}</Message>}
      {errorMessage && <Message>{errorMessage}</Message>}
    </Container>
  );
};

export default CancelOrder;
