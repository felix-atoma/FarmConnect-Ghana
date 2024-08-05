// src/components/Customer/OrderManagement.jsx
import React from 'react';

const OrderManagement = ({ orders }) => {
  return (
    <div style={ordersStyle}>
      <h2>Your Orders</h2>
      <ul style={orderListStyle}>
        {orders.map(order => (
          <li key={order.id} style={orderItemStyle}>
            <h4>Order ID: {order.id}</h4>
            <p>Status: {order.status}</p>
            <p>Total: ${order.total}</p>
            <button style={buttonStyle} onClick={() => alert(`Track Order ${order.id}`)}>Track Order</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Inline CSS styles
const ordersStyle = { padding: '20px', border: '1px solid #ddd', borderRadius: '5px' };
const orderListStyle = { listStyleType: 'none', padding: '0' };
const orderItemStyle = { marginBottom: '10px' };
const buttonStyle = { padding: '10px', borderRadius: '5px', backgroundColor: '#71B34A', color: '#fff', border: 'none' };

export default OrderManagement;
