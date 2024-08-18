import React, { useEffect, useState } from 'react';

const CartItems = () => {
  const [cartItems, setCartItems] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchCartItems = async () => {
      setErrorMessage('');

      try {
        const response = await fetch('http://localhost:5179/api/customer/cart', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming JWT is stored in local storage
          }
        });

        if (response.ok) {
          const data = await response.json();
          setCartItems(data);
        } else {
          const errorData = await response.json();
          switch (response.status) {
            case 401:
              setErrorMessage('Unauthorized access. Please login.');
              break;
            default:
              setErrorMessage('An unexpected error occurred.');
          }
        }
      } catch (error) {
        setErrorMessage('Network error. Please check your connection.');
      }
    };

    fetchCartItems();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      <h2>Your Cart</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <ul>
        {cartItems.length > 0 ? (
          cartItems.map(item => (
            <li key={item._id}>
              <p>Product ID: {item.product}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Added on: {new Date(item.createdAt).toLocaleDateString()}</p>
            </li>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </ul>
    </div>
  );
};

export default CartItems;
