import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// Mock function to simulate API call
const fetchOrders = async () => {
  // Replace this with your API call
  return [
    { id: 1, product: 'Tomatoes', quantity: 50, status: 'Pending' },
    { id: 2, product: 'Cucumbers', quantity: 30, status: 'Processing' },
    { id: 3, product: 'Potatoes', quantity: 100, status: 'Completed' }
  ];
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
        setError('Failed to load orders.');
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
              <TableHeader>Product</TableHeader>
              <TableHeader>Quantity</TableHeader>
              <TableHeader>Status</TableHeader>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.product}</TableCell>
                <TableCell>{order.quantity}</TableCell>
                <TableCell>{order.status}</TableCell>
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
