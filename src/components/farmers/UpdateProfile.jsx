import React, { useState } from 'react';
import axios from 'axios';

const UpdateFarmerProfile = () => {
  const [formData, setFormData] = useState({
    farmName: '',
    farmAddress: '',
    products: '',
    farmType: '',
    bankAccountDetails: '',
    about: '',
    farmPhotos: [],
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'farmPhotos') {
      setFormData((prev) => ({
        ...prev,
        [name]: Array.from(files),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formDataToSend = new FormData();
    for (const key in formData) {
      if (Array.isArray(formData[key])) {
        formData[key].forEach((file) => formDataToSend.append(key, file));
      } else {
        formDataToSend.append(key, formData[key]);
      }
    }

    try {
      const response = await axios.put('/api/farmer/profile', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.message);
      setError('');
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || 'Failed to update profile.');
      } else {
        setError('An error occurred.');
      }
      setMessage('');
    } finally {
      setLoading(false);
    }
  };

  const formContainerStyle = {
    padding: '30px',
    backgroundColor: '#f9f9f9',
    maxWidth: '700px',
    margin: 'auto',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const formGroupStyle = {
    marginBottom: '20px',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.9em',
    marginBottom: '5px',
    fontWeight: '600',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1em',
    boxSizing: 'border-box',
  };

  const textareaStyle = {
    width: '100%',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1em',
    boxSizing: 'border-box',
    height: '100px',
  };

  const submitButtonStyle = {
    padding: '12px 25px',
    backgroundColor: '#4CAF50', // Green background for submit button
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1em',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const submitButtonHoverStyle = {
    backgroundColor: '#45a049', // Darker green on hover
  };

  const successMessageStyle = {
    color: '#4CAF50',
    marginTop: '10px',
    fontSize: '1em',
  };

  const errorMessageStyle = {
    color: '#f44336',
    marginTop: '10px',
    fontSize: '1em',
  };

  return (
    <div style={formContainerStyle}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Update Farmer Profile</h2>
      <form onSubmit={handleSubmit}>
        <div style={formGroupStyle}>
          <label htmlFor="farmName" style={labelStyle}>Farm Name</label>
          <input
            type="text"
            id="farmName"
            name="farmName"
            value={formData.farmName}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="farmAddress" style={labelStyle}>Farm Address</label>
          <input
            type="text"
            id="farmAddress"
            name="farmAddress"
            value={formData.farmAddress}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="products" style={labelStyle}>Products (comma separated IDs)</label>
          <input
            type="text"
            id="products"
            name="products"
            value={formData.products}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="farmType" style={labelStyle}>Farm Type</label>
          <input
            type="text"
            id="farmType"
            name="farmType"
            value={formData.farmType}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="bankAccountDetails" style={labelStyle}>Bank Account Details</label>
          <input
            type="text"
            id="bankAccountDetails"
            name="bankAccountDetails"
            value={formData.bankAccountDetails}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="about" style={labelStyle}>About</label>
          <textarea
            id="about"
            name="about"
            value={formData.about}
            onChange={handleChange}
            style={textareaStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="farmPhotos" style={labelStyle}>Farm Photos</label>
          <input
            type="file"
            id="farmPhotos"
            name="farmPhotos"
            accept="image/*"
            multiple
            onChange={handleChange}
            style={{ border: 'none', padding: '0', background: 'transparent' }}
          />
        </div>
        <button
          type="submit"
          style={submitButtonStyle}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = submitButtonHoverStyle.backgroundColor)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = submitButtonStyle.backgroundColor)}
          disabled={loading}
        >
          {loading ? 'Updating...' : 'Update Profile'}
        </button>
        {message && <p style={successMessageStyle}>{message}</p>}
        {error && <p style={errorMessageStyle}>{error}</p>}
      </form>
    </div>
  );
};

export default UpdateFarmerProfile;
