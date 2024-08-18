import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff; /* White background for the container */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h2`
  color: #4a4a4a; /* Dark gray color for the heading */
  margin-bottom: 20px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Label = styled.label`
  font-size: 1em;
  color: #333; /* Dark gray for the label text */
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1em;
  color: #333;
  &:focus {
    border-color: #71b34a; /* Green border on focus */
    outline: none;
  }
`;

const Button = styled.button`
  padding: 15px;
  border: none;
  background-color: #71b34a; /* Green background */
  color: #fff;
  font-size: 1em;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  
  &:hover {
    background-color: #5c9a2e; /* Darker green on hover */
    transform: scale(1.05); /* Slightly enlarge on hover */
  }
`;

const Message = styled.p`
  text-align: center;
  font-size: 1em;
  margin-top: 20px;
  color: ${({ type }) => (type === 'error' ? '#e60000' : '#71b34a')}; /* Red for errors, green for success */
`;

const UpdateCustomerProfile = () => {
  const [profileData, setProfileData] = useState({
    preferredPaymentMethod: '',
    orderHistory: [],
    cart: []
  });
  const [responseMessage, setResponseMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Fetch current profile data if needed
    // Example: fetchProfileData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage('');
    setErrorMessage('');

    try {
      const response = await fetch('https://farm-connect-api.onrender.com/api/customer/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming you store JWT in local storage
        },
        body: JSON.stringify(profileData),
      });

      if (response.ok) {
        const data = await response.json();
        setResponseMessage(data.message);
        // Handle the data.customerProfile if needed
      } else {
        const errorData = await response.json();
        switch (response.status) {
          case 400:
            setErrorMessage(`Validation error: ${errorData.message}`);
            break;
          case 401:
            setErrorMessage('Unauthorized access. Please login.');
            break;
          case 403:
            setErrorMessage('Forbidden: You do not have access to this resource.');
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
      <Heading>Update Customer Profile</Heading>
      <Form onSubmit={handleSubmit}>
        <Label>
          Preferred Payment Method:
          <Input
            type="text"
            value={profileData.preferredPaymentMethod}
            onChange={(e) => setProfileData({ ...profileData, preferredPaymentMethod: e.target.value })}
            required
          />
        </Label>
        <Label>
          Order History (Comma-separated IDs):
          <Input
            type="text"
            value={profileData.orderHistory.join(', ')}
            onChange={(e) => setProfileData({ ...profileData, orderHistory: e.target.value.split(',').map(id => id.trim()) })}
            required
          />
        </Label>
        <Label>
          Cart (Comma-separated IDs):
          <Input
            type="text"
            value={profileData.cart.join(', ')}
            onChange={(e) => setProfileData({ ...profileData, cart: e.target.value.split(',').map(id => id.trim()) })}
            required
          />
        </Label>
        <Button type="submit">Update Profile</Button>
      </Form>
      {responseMessage && <Message>{responseMessage}</Message>}
      {errorMessage && <Message type="error">{errorMessage}</Message>}
    </Container>
  );
};

export default UpdateCustomerProfile;
