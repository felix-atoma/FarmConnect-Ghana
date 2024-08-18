import React, { useState } from 'react';

const CreateOrder = () => {
  const [orderDetails, setOrderDetails] = useState({
    customer: '',
    subOrders: [],
    totalAmount: '',
    deliveryAddress: {
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      country: '',
      postalCode: ''
    }
  });
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails(prevDetails => ({
      ...prevDetails,
      deliveryAddress: {
        ...prevDetails.deliveryAddress,
        [name]: value
      }
    }));
  };

  const handleCreateOrder = async () => {
    setMessage('');
    setErrorMessage('');

    try {
      const response = await fetch('http://localhost:5179/api/customer/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming JWT is stored in local storage
        },
        body: JSON.stringify(orderDetails)
      });

      if (response.ok) {
        const data = await response.json();
        setMessage('Order successfully created');
        // Optionally, you can clear form fields or redirect the user
        setOrderDetails({
          customer: '',
          subOrders: [],
          totalAmount: '',
          deliveryAddress: {
            addressLine1: '',
            addressLine2: '',
            city: '',
            state: '',
            country: '',
            postalCode: ''
          }
        });
      } else {
        const errorData = await response.json();
        switch (response.status) {
          case 400:
            setErrorMessage('Invalid order details. Please check your input.');
            break;
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
      <h2>Create New Order</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleCreateOrder(); }}>
        <div>
          <label>Customer ID:</label>
          <input
            type="text"
            name="customer"
            value={orderDetails.customer}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Sub Orders (Comma separated IDs):</label>
          <input
            type="text"
            name="subOrders"
            value={orderDetails.subOrders.join(',')}
            onChange={(e) => setOrderDetails(prevDetails => ({
              ...prevDetails,
              subOrders: e.target.value.split(',').map(id => id.trim())
            }))}
          />
        </div>
        <div>
          <label>Total Amount:</label>
          <input
            type="number"
            name="totalAmount"
            value={orderDetails.totalAmount}
            onChange={handleChange}
          />
        </div>
        <div>
          <h3>Delivery Address</h3>
          <label>Address Line 1:</label>
          <input
            type="text"
            name="addressLine1"
            value={orderDetails.deliveryAddress.addressLine1}
            onChange={handleAddressChange}
          />
          <label>Address Line 2:</label>
          <input
            type="text"
            name="addressLine2"
            value={orderDetails.deliveryAddress.addressLine2}
            onChange={handleAddressChange}
          />
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={orderDetails.deliveryAddress.city}
            onChange={handleAddressChange}
          />
          <label>State:</label>
          <input
            type="text"
            name="state"
            value={orderDetails.deliveryAddress.state}
            onChange={handleAddressChange}
          />
          <label>Country:</label>
          <input
            type="text"
            name="country"
            value={orderDetails.deliveryAddress.country}
            onChange={handleAddressChange}
          />
          <label>Postal Code:</label>
          <input
            type="text"
            name="postalCode"
            value={orderDetails.deliveryAddress.postalCode}
            onChange={handleAddressChange}
          />
        </div>
        <button type="submit">Create Order</button>
      </form>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default CreateOrder;
