import React, { useState } from 'react';

const CancelOrder = () => {
  const [orderId, setOrderId] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCancelOrder = async () => {
    setMessage('');
    setErrorMessage('');

    try {
      const response = await fetch(`http://localhost:5179/api/customer/orders/${orderId}/cancel`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming JWT is stored in local storage
        },
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message);
      } else {
        const errorData = await response.json();
        switch (response.status) {
          case 401:
            setErrorMessage('Unauthorized access. Please login.');
            break;
          case 404:
            setErrorMessage('Order not found.');
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
      <h2>Cancel Order</h2>
      <input
        type="text"
        placeholder="Enter Order ID"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
      />
      <button onClick={handleCancelOrder}>Cancel Order</button>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default CancelOrder;
