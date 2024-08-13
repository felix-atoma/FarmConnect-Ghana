import React, { useEffect, useState } from 'react';
import { fetchOrders,updateOrder } from '../../services/Auth';

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const response = await fetchOrders(); // Call the fetchOrders function
        setOrders(response.data); // Adjust based on API response structure
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getOrders();
  }, []);

  const handleUpdateOrder = async (orderId, updateData) => {
    try {
      await updateOrder(orderId, updateData); // Call the updateOrder function
      // Optionally, refresh orders or handle success
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Order Management</h1>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            {order.description}
            <button onClick={() => handleUpdateOrder(order.id, { status: 'shipped' })}>
              Mark as Shipped
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderManagement;
