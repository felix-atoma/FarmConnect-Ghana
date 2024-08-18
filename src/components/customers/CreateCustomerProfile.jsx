import React, { useState } from 'react';

const CreateCustomerProfile = () => {
  const [profileData, setProfileData] = useState({
    user: '',
    preferredPaymentMethod: '',
  });
  const [responseMessage, setResponseMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage('');
    setErrorMessage('');

    try {
      const response = await fetch('http://localhost:5179/api/customer/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
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
      <h2>Create Customer Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          User ID:
          <input
            type="text"
            value={profileData.user}
            onChange={(e) => setProfileData({ ...profileData, user: e.target.value })}
            required
          />
        </label>
        <label>
          Preferred Payment Method:
          <input
            type="text"
            value={profileData.preferredPaymentMethod}
            onChange={(e) => setProfileData({ ...profileData, preferredPaymentMethod: e.target.value })}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default CreateCustomerProfile;
