import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const UpdateFarmerProfile = () => {
  const [formData, setFormData] = useState({
    farmName: '',
    farmAddress: '',
    products: [],
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

  return (
    <ProfileFormContainer>
      <h2>Update Farmer Profile</h2>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="farmName">Farm Name</label>
          <input
            type="text"
            id="farmName"
            name="farmName"
            value={formData.farmName}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="farmAddress">Farm Address</label>
          <input
            type="text"
            id="farmAddress"
            name="farmAddress"
            value={formData.farmAddress}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="products">Products (comma separated IDs)</label>
          <input
            type="text"
            id="products"
            name="products"
            value={formData.products}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="farmType">Farm Type</label>
          <input
            type="text"
            id="farmType"
            name="farmType"
            value={formData.farmType}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="bankAccountDetails">Bank Account Details</label>
          <input
            type="text"
            id="bankAccountDetails"
            name="bankAccountDetails"
            value={formData.bankAccountDetails}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="about">About</label>
          <textarea
            id="about"
            name="about"
            value={formData.about}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="farmPhotos">Farm Photos</label>
          <input
            type="file"
            id="farmPhotos"
            name="farmPhotos"
            accept="image/*"
            multiple
            onChange={handleChange}
          />
        </FormGroup>
        <SubmitButton type="submit" disabled={loading}>
          {loading ? 'Updating...' : 'Update Profile'}
        </SubmitButton>
        {message && <SuccessMessage>{message}</SuccessMessage>}
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </form>
    </ProfileFormContainer>
  );
};

// Styled components
const ProfileFormContainer = styled.div`
  padding: 20px;
  background-color: #ffffff;
  max-width: 600px;
  margin: auto;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #71b34a; /* Green background for submit button */
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #5a9a36; /* Darker green on hover */
  }
`;

const SuccessMessage = styled.p`
  color: #4caf50; /* Green text for success message */
`;

const ErrorMessage = styled.p`
  color: #f44336; /* Red text for error message */
`;

export default UpdateFarmerProfile;
