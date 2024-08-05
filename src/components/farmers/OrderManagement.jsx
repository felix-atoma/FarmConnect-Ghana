// src/components/OrderManagement.jsx
import React, { useState, useEffect } from 'react';
import AuthService from '../../services/Auth'// Adjust path as necessary

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders data from API
    const fetchOrders = async () => {
      const data = await AuthService.getOrders(); // Replace with actual API call
      setOrders(data);
    };

    fetchOrders();
  }, []);

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Order Management</h1>
      <ul style={ordersListStyle}>
        {orders.map(order => (
          <li key={order.id} style={orderItemStyle}>
            <p><strong>Order ID:</strong> {order.id}</p>
            <p><strong>Customer:</strong> {order.customerName}</p>
            <p><strong>Product:</strong> {order.productName}</p>
            <p><strong>Quantity:</strong> {order.quantity}</p>
            <p><strong>Status:</strong> {order.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Inline CSS styles
const containerStyle = { padding: '20px' };
const headingStyle = { fontSize: '24px', marginBottom: '20px' };
const ordersListStyle = { listStyleType: 'none', padding: '0' };
const orderItemStyle = { padding: '10px', borderBottom: '1px solid #ddd' };

export default OrderManagement;
