import React, { useEffect, useState } from 'react';
import { fetchOrders } from '../../services/Order';

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const ordersData = await fetchOrders();
        setOrders(ordersData);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    getOrders();
  }, []);

  return (
    <div>
      <h1>Order Management</h1>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>{order.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default OrderManagement;
