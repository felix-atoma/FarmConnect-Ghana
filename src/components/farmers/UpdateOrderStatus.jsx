import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Mock function to simulate API calls
const fetchOrderById = async (orderId) => {
  // Replace this with your API call to fetch order details by ID
  return { id: orderId, product: 'Tomatoes', quantity: 50, status: 'Pending' };
};

const updateOrder = async (order) => {
  // Replace this with your API call to update the order
  console.log('Order updated:', order);
  return true;
};

const UpdateOrder = () => {
  const [orderId, setOrderId] = useState('');
  const [order, setOrder] = useState(null);
  const [status, setStatus] = useState('Pending');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (orderId) {
      const loadOrder = async () => {
        setLoading(true);
        try {
          const orderData = await fetchOrderById(orderId);
          setOrder(orderData);
          setStatus(orderData.status);
        } catch (err) {
          setError('Failed to load order details.');
        } finally {
          setLoading(false);
        }
      };

      loadOrder();
    }
  }, [orderId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const updatedOrder = { ...order, status };
      await updateOrder(updatedOrder);
      alert('Order updated successfully.');
    } catch (err) {
      setError('Failed to update order.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <UpdateOrderContainer>
      <h2>Update Order</h2>
      <form onSubmit={handleSubmit}>
        <Label>
          Order ID:
          <Input
            type="text"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            placeholder="Enter order ID"
            required
          />
        </Label>
        {loading && <p>Loading order details...</p>}
        {error && <p>{error}</p>}
        {order && (
          <>
            <Label>
              Product:
              <Input type="text" value={order.product} readOnly />
            </Label>
            <Label>
              Quantity:
              <Input type="number" value={order.quantity} readOnly />
            </Label>
            <Label>
              Status:
              <Select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="Pending">Pending</option>
                <option value="Processing">Processing</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
              </Select>
            </Label>
            <Button type="submit">Update Order</Button>
          </>
        )}
      </form>
    </UpdateOrderContainer>
  );
};

// Styled components
const UpdateOrderContainer = styled.div`
  padding: 20px;
  background-color: #ffffff;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #71b34a; /* Green background for button */
  color: #ffffff; /* White text */
  font-size: 1em;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;

  &:hover {
    background-color: #4a9d31; /* Darker green on hover */
  }
`;

export default UpdateOrder;
