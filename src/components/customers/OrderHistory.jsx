// src/components/OrderHistory.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';

function OrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await axios.get('https://farm-connect-api.onrender.com/orders');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    }

    fetchOrders();
  }, []);

  return (
    <div>
      {orders.map(order => (
        <div key={order.id}>
          <h3>Order ID: {order.id}</h3>
          <p>Status: {order.status}</p>
        </div>
      ))}
    </div>
  );
}

export default OrderHistory;
