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

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  color: #4a4a4a;
  font-weight: bold;
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

const Textarea = styled.textarea`
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
  background-color: #71b34a; /* Green color for the button */
  color: #ffffff; /* White text color */
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5a9b3a; /* Darker green on hover */
  }
`;

const ErrorMessage = styled.p`
  color: #e60000; /* Red color for error messages */
  text-align: center;
  font-weight: bold;
`;

const SuccessMessage = styled.p`
  color: #4a4a4a; /* Dark gray color for success messages */
  text-align: center;
  font-weight: bold;
`;

const CreateOrder = () => {
  const [orderData, setOrderData] = useState({
    customer: '',
    subOrders: '',
    totalAmount: '',
    deliveryAddress: {
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      country: '',
      postalCode: '',
    }
  });
  const [responseMessage, setResponseMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setOrderData(prevData => ({
      ...prevData,
      deliveryAddress: {
        ...prevData.deliveryAddress,
        [name]: value
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage('');
    setErrorMessage('');

    try {
      const response = await fetch('https://farm-connect-api.onrender.com/api/customer/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming JWT is stored in local storage
        },
        body: JSON.stringify({
          ...orderData,
          subOrders: orderData.subOrders.split(',').map(id => id.trim()), // Converting comma-separated string to array
          totalAmount: parseFloat(orderData.totalAmount) // Ensuring totalAmount is a number
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setResponseMessage(`Order created successfully with ID: ${data._id}`);
      } else {
        const errorData = await response.json();
        switch (response.status) {
          case 400:
            setErrorMessage(`Bad request: ${errorData.message}`);
            break;
          case 401:
            setErrorMessage('Unauthorized: Please login.');
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
      <Heading>Create New Order</Heading>
      <form onSubmit={handleSubmit}>
        <Label>
          Customer ID:
          <Input
            type="text"
            name="customer"
            value={orderData.customer}
            onChange={handleChange}
            required
          />
        </Label>
        <Label>
          Sub Orders (Comma-separated IDs):
          <Input
            type="text"
            name="subOrders"
            value={orderData.subOrders}
            onChange={handleChange}
            required
          />
        </Label>
        <Label>
          Total Amount:
          <Input
            type="number"
            name="totalAmount"
            value={orderData.totalAmount}
            onChange={handleChange}
            required
          />
        </Label>
        <Label>
          Address Line 1:
          <Input
            type="text"
            name="addressLine1"
            value={orderData.deliveryAddress.addressLine1}
            onChange={handleAddressChange}
            required
          />
        </Label>
        <Label>
          Address Line 2:
          <Input
            type="text"
            name="addressLine2"
            value={orderData.deliveryAddress.addressLine2}
            onChange={handleAddressChange}
          />
        </Label>
        <Label>
          City:
          <Input
            type="text"
            name="city"
            value={orderData.deliveryAddress.city}
            onChange={handleAddressChange}
            required
          />
        </Label>
        <Label>
          State:
          <Input
            type="text"
            name="state"
            value={orderData.deliveryAddress.state}
            onChange={handleAddressChange}
            required
          />
        </Label>
        <Label>
          Country:
          <Input
            type="text"
            name="country"
            value={orderData.deliveryAddress.country}
            onChange={handleAddressChange}
            required
          />
        </Label>
        <Label>
          Postal Code:
          <Input
            type="text"
            name="postalCode"
            value={orderData.deliveryAddress.postalCode}
            onChange={handleAddressChange}
            required
          />
        </Label>
        <Button type="submit">Create Order</Button>
      </form>
      {responseMessage && <SuccessMessage>{responseMessage}</SuccessMessage>}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
};

export default CreateOrder;
