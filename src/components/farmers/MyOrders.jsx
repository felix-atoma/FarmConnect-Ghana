import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const fetchOrders = async () => {
  try {
    const response = await axios.get('/api/orders'); // API call to fetch orders
    return response.data; // Assuming the API returns an array of orders
  } catch (error) {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          throw new Error('Unauthorized: Please log in to continue.');
        case 403:
          throw new Error('Forbidden: Insufficient permissions.');
        case 500:
          throw new Error('Internal server error: An error occurred while retrieving the orders.');
        default:
          throw new Error('An error occurred: Please try again later.');
      }
    } else {
      throw new Error('Network error: Please check your connection.');
    }
  }
};

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const ordersData = await fetchOrders();
        setOrders(ordersData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadOrders();
  }, []);

  if (loading) return <p>Loading orders...</p>;
  if (error) return <p>{error}</p>;

  return (
    <OrdersContainer>
      <h2>My Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <OrdersTable>
          <thead>
            <tr>
              <TableHeader>ID</TableHeader>
              <TableHeader>Customer</TableHeader>
              <TableHeader>Total Amount</TableHeader>
              <TableHeader>Delivery Address</TableHeader>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <TableRow key={order._id}>
                <TableCell>{order._id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.totalAmount}</TableCell>
                <TableCell>
                  {order.deliveryAddress.addressLine1}, {order.deliveryAddress.addressLine2}, {order.deliveryAddress.city}, {order.deliveryAddress.state}, {order.deliveryAddress.country}, {order.deliveryAddress.postalCode}
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </OrdersTable>
      )}
    </OrdersContainer>
  );
};

// Styled components
const OrdersContainer = styled.div`
  padding: 20px;
  background-color: #ffffff;
`;

const OrdersTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  background-color: #71b34a; /* Green header background */
  color: #ffffff; /* White text */
  padding: 10px;
  border: 1px solid #ddd;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f4f4f4; /* Light gray for even rows */
  }
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

export default MyOrders;
