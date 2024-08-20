import React, { useState } from 'react';
import styled from 'styled-components';

const CreateProfile = () => {
  const [formData, setFormData] = useState({
    farmName: '',
    farmAddress: '',
    products: [],
    farmType: '',
    bankAccountDetails: '',
    about: '',
    farmPhotos: [],
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'farmPhotos') {
      setFormData((prevData) => ({
        ...prevData,
        farmPhotos: Array.from(files), // Convert FileList to Array
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simulate form submission
      console.log('Form submitted:', formData);
      // Simulate successful response
      setSuccessMessage('Profile created successfully!');
      setErrorMessage('');
      // Clear form data after successful submission
      setFormData({
        farmName: '',
        farmAddress: '',
        products: [],
        farmType: '',
        bankAccountDetails: '',
        about: '',
        farmPhotos: [],
      });
    } catch (error) {
      setErrorMessage('Failed to create profile. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <FormContainer>
      <h2>Create Your Farm Profile</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="farmName">Farm Name</Label>
          <Input
            type="text"
            id="farmName"
            name="farmName"
            value={formData.farmName}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="farmAddress">Farm Address</Label>
          <Input
            type="text"
            id="farmAddress"
            name="farmAddress"
            value={formData.farmAddress}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="products">Product IDs (comma-separated)</Label>
          <Input
            type="text"
            id="products"
            name="products"
            value={formData.products.join(', ')} // Convert array to string for display
            onChange={(e) => setFormData((prevData) => ({
              ...prevData,
              products: e.target.value.split(',').map(id => id.trim()), // Convert string to array
            }))}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="farmType">Farm Type</Label>
          <Input
            type="text"
            id="farmType"
            name="farmType"
            value={formData.farmType}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="bankAccountDetails">Bank Account Details</Label>
          <Input
            type="text"
            id="bankAccountDetails"
            name="bankAccountDetails"
            value={formData.bankAccountDetails}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="about">About the Farm</Label>
          <TextArea
            id="about"
            name="about"
            value={formData.about}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="farmPhotos">Upload Farm Photos (up to 6)</Label>
          <FileInput
            type="file"
            id="farmPhotos"
            name="farmPhotos"
            accept="image/*"
            multiple
            onChange={handleChange}
          />
        </FormGroup>

        <SubmitButton type="submit">Create Profile</SubmitButton>
      </Form>

      {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </FormContainer>
  );
};

// Styled components
const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background: linear-gradient(135deg, #e9f5f2 0%, #c1e6e6 100%);
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FormGroup = styled.div`
  padding: 15px;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
`;

const Label = styled.label`
  display: block;
  font-size: 1em;
  margin-bottom: 6px;
  color: #333;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.95em;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    border-color: #71b34a;
    box-shadow: 0 0 8px rgba(113, 179, 74, 0.4);
    outline: none;
  }
`;

const FileInput = styled(Input).attrs({ type: 'file' })`
  background: #f8f8f8;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.95em;
  min-height: 100px;
  resize: vertical;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    border-color: #71b34a;
    box-shadow: 0 0 8px rgba(113, 179, 74, 0.4);
    outline: none;
  }
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #f7931e;
  color: #ffffff;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #e07b12;
    transform: scale(1.02);
  }

  &:active {
    background-color: #d06b00;
  }
`;

const SuccessMessage = styled.p`
  color: #28a745; /* Green color for success */
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
`;

const ErrorMessage = styled.p`
  color: #dc3545; /* Red color for errors */
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
`;

export default CreateProfile;
