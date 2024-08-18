import React, { useState, useEffect } from 'react';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Fetch order history when the component mounts
    fetchOrderHistory();
  }, []);

  const fetchOrderHistory = async () => {
    setErrorMessage('');

    try {
      const response = await fetch('http://localhost:5179/api/customer/orders', {
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
    <div>
      <h2>Order History</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {orders.length > 0 ? (
        <ul>
          {orders.map(order => (
            <li key={order._id}>
              <h3>Order ID: {order._id}</h3>
              <p>Total Amount: ${order.totalAmount.toFixed(2)}</p>
              <p>Delivery Address:</p>
              <p>{order.deliveryAddress.addressLine1}, {order.deliveryAddress.addressLine2}</p>
              <p>{order.deliveryAddress.city}, {order.deliveryAddress.state}</p>
              <p>{order.deliveryAddress.country}, {order.deliveryAddress.postalCode}</p>
              <p>Sub Orders: {order.subOrders.join(', ')}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default OrderHistory;
