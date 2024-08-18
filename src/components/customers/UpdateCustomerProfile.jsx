import React, { useState, useEffect } from 'react';

const UpdateCustomerProfile = () => {
  const [profileData, setProfileData] = useState({
    preferredPaymentMethod: '',
    orderHistory: [],
    cart: []
  });
  const [responseMessage, setResponseMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Fetch current profile data if needed
    // Example: fetchProfileData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage('');
    setErrorMessage('');

    try {
      const response = await fetch('http://localhost:5179/api/customer/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming you store JWT in local storage
        },
        body: JSON.stringify(profileData),
      });

      if (response.ok) {
        const data = await response.json();
        setResponseMessage(data.message);
        // Handle the data.customerProfile if needed
      } else {
        const errorData = await response.json();
        switch (response.status) {
          case 400:
            setErrorMessage(`Validation error: ${errorData.message}`);
            break;
          case 401:
            setErrorMessage('Unauthorized access. Please login.');
            break;
          case 403:
            setErrorMessage('Forbidden: You do not have access to this resource.');
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
      <h2>Update Customer Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Preferred Payment Method:
          <input
            type="text"
            value={profileData.preferredPaymentMethod}
            onChange={(e) => setProfileData({ ...profileData, preferredPaymentMethod: e.target.value })}
            required
          />
        </label>
        <label>
          Order History (Comma-separated IDs):
          <input
            type="text"
            value={profileData.orderHistory.join(', ')}
            onChange={(e) => setProfileData({ ...profileData, orderHistory: e.target.value.split(',').map(id => id.trim()) })}
            required
          />
        </label>
        <label>
          Cart (Comma-separated IDs):
          <input
            type="text"
            value={profileData.cart.join(', ')}
            onChange={(e) => setProfileData({ ...profileData, cart: e.target.value.split(',').map(id => id.trim()) })}
            required
          />
        </label>
        <button type="submit">Update Profile</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default UpdateCustomerProfile;
