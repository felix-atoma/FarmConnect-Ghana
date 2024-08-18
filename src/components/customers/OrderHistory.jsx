import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
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

const OrderList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const OrderItem = styled.li`
  padding: 15px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
  background-color: #f9f9f9; /* Light gray background for each order item */
  border-radius: 4px;
`;

const ErrorMessage = styled.p`
  color: #e60000; /* Red color for error messages */
  text-align: center;
`;

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchOrderHistory();
  }, []);

  const fetchOrderHistory = async () => {
    setErrorMessage('');

    try {
      const response = await fetch('https://farm-connect-api.onrender.com/api/customer/orders', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming JWT is stored in local storage
        },
      });

      if (response.ok) {
        const data = await response.json();
        setOrders(data);
      } else {
        const errorData = await response.json();
        switch (response.status) {
          case 401:
            setErrorMessage('Unauthorized access. Please login.');
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
      <Heading>Order History</Heading>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {orders.length > 0 ? (
        <OrderList>
          {orders.map(order => (
            <OrderItem key={order._id}>
              <h3>Order ID: {order._id}</h3>
              <p>Total Amount: ${order.totalAmount.toFixed(2)}</p>
              <p>Delivery Address:</p>
              <p>{order.deliveryAddress.addressLine1}, {order.deliveryAddress.addressLine2}</p>
              <p>{order.deliveryAddress.city}, {order.deliveryAddress.state}</p>
              <p>{order.deliveryAddress.country}, {order.deliveryAddress.postalCode}</p>
              <p>Sub Orders: {order.subOrders.join(', ')}</p>
            </OrderItem>
          ))}
        </OrderList>
      ) : (
        <p>No orders found.</p>
      )}
    </Container>
  );
};

export default OrderHistory;
