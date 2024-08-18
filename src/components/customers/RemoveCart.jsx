import React, { useState } from 'react';

const RemoveCartItem = ({ itemId, onRemoveSuccess }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRemoveItem = async () => {
    setErrorMessage('');
    setLoading(true);

    try {
      const response = await fetch(`http://localhost:5179/api/customer/cart/${itemId}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming JWT is stored in local storage
        }
      });

      if (response.ok) {
        const data = await response.json();
        if (data.message === 'Item removed from cart successfully') {
          // Notify the parent component of success
          onRemoveSuccess();
        }
      } else {
        const errorData = await response.json();
        switch (response.status) {
          case 401:
            setErrorMessage('Unauthorized access. Please login.');
            break;
          case 404:
            setErrorMessage('Cart item not found.');
            break;
          default:
            setErrorMessage('An unexpected error occurred.');
        }
      }
    } catch (error) {
      setErrorMessage('Network error. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleRemoveItem} disabled={loading}>
        {loading ? 'Removing...' : 'Remove Item'}
      </button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default RemoveCartItem;
