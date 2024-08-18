import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
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

const ErrorMessage = styled.p`
  color: #e60000; /* Red color for error messages */
  text-align: center;
  font-weight: bold;
`;

const CartList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const CartItem = styled.li`
  background-color: #f9f9f9; /* Light gray background for each item */
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-bottom: 10px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ItemDetail = styled.p`
  margin: 5px 0;
`;

const EmptyMessage = styled.p`
  text-align: center;
  color: #4a4a4a; /* Dark gray color for the empty cart message */
`;

const CartItems = () => {
  const [cartItems, setCartItems] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchCartItems = async () => {
      setErrorMessage('');

      try {
        const response = await fetch('http://localhost:5179/api/customer/cart', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming JWT is stored in local storage
          }
        });

        if (response.ok) {
          const data = await response.json();
          setCartItems(data);
        } else {
          const errorData = await response.json();
          switch (response.status) {
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

    fetchCartItems();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <Container>
      <Heading>Your Cart</Heading>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <CartList>
        {cartItems.length > 0 ? (
          cartItems.map(item => (
            <CartItem key={item._id}>
              <ItemDetail><strong>Product ID:</strong> {item.product}</ItemDetail>
              <ItemDetail><strong>Quantity:</strong> {item.quantity}</ItemDetail>
              <ItemDetail><strong>Added on:</strong> {new Date(item.createdAt).toLocaleDateString()}</ItemDetail>
            </CartItem>
          ))
        ) : (
          <EmptyMessage>Your cart is empty.</EmptyMessage>
        )}
      </CartList>
    </Container>
  );
};

export default CartItems;
