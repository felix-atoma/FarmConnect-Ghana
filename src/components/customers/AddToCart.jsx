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

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #4a4a4a; /* Dark gray color for the labels */
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 6px;
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

const AddToCart = () => {
  const [cartDetails, setCartDetails] = useState({
    customer: '',
    product: '',
    quantity: ''
  });
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCartDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleAddToCart = async () => {
    setMessage('');
    setErrorMessage('');

    try {
      const response = await fetch('https://farm-connect-api.onrender.com/api/customer/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming JWT is stored in local storage
        },
        body: JSON.stringify(cartDetails)
      });

      if (response.ok) {
        const data = await response.json();
        setMessage('Item added to cart successfully');
        // Optionally, you can clear form fields or update the cart display
        setCartDetails({
          customer: '',
          product: '',
          quantity: ''
        });
      } else {
        const errorData = await response.json();
        switch (response.status) {
          case 400:
            setErrorMessage('Invalid input. Please check your details.');
            break;
          case 401:
            setErrorMessage('Unauthorized access. Please login.');
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
      <Heading>Add/Update Cart Item</Heading>
      <form onSubmit={(e) => { e.preventDefault(); handleAddToCart(); }}>
        <FormGroup>
          <Label>Customer ID:</Label>
          <Input
            type="text"
            name="customer"
            value={cartDetails.customer}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Product ID:</Label>
          <Input
            type="text"
            name="product"
            value={cartDetails.product}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Quantity:</Label>
          <Input
            type="number"
            name="quantity"
            value={cartDetails.quantity}
            onChange={handleChange}
            min="1"
            required
          />
        </FormGroup>
        <Button type="submit">Add to Cart</Button>
      </form>
      {message && <Message success>{message}</Message>}
      {errorMessage && <Message>{errorMessage}</Message>}
    </Container>
  );
};

export default AddToCart;
