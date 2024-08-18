import React, { useState } from 'react';

const AddToCart = () => {
  const [cartDetails, setCartDetails] = useState({
    customer: '',
    product: '',
    quantity: ''
  });
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCartDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleAddToCart = async () => {
    setMessage('');
    setErrorMessage('');

    try {
      const response = await fetch('http://localhost:5179/api/customer/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming JWT is stored in local storage
        },
        body: JSON.stringify(cartDetails)
      });

      if (response.ok) {
        const data = await response.json();
        setMessage('Item added to cart successfully');
        // Optionally, you can clear form fields or update the cart display
        setCartDetails({
          customer: '',
          product: '',
          quantity: ''
        });
      } else {
        const errorData = await response.json();
        switch (response.status) {
          case 400:
            setErrorMessage('Invalid input. Please check your details.');
            break;
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

  return (
    <div>
      <h2>Add/Update Cart Item</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleAddToCart(); }}>
        <div>
          <label>Customer ID:</label>
          <input
            type="text"
            name="customer"
            value={cartDetails.customer}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Product ID:</label>
          <input
            type="text"
            name="product"
            value={cartDetails.product}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Quantity:</label>
          <input
            type="number"
            name="quantity"
            value={cartDetails.quantity}
            onChange={handleChange}
            min="1"
            required
          />
        </div>
        <button type="submit">Add to Cart</button>
      </form>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default AddToCart;
