import React, { useState } from 'react';
import styled from 'styled-components';

const CreateProfile = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    produce: '',
    experience: '',
    passportPicture: null,
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      ...(name === 'passportPicture' ? { passportPicture: files[0] } : {}),
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you can add the logic to send the data to the server or API
  };

  return (
    <FormContainer>
      <h2>Create Your Profile</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="passportPicture">Upload Passport Picture</Label>
          <FileInput
            type="file"
            id="passportPicture"
            name="passportPicture"
            accept="image/*"
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Email Address</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="address">Address</Label>
          <Input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="produce">Nature of Food Crops or Livestock Produce</Label>
          <Input
            type="text"
            id="produce"
            name="produce"
            value={formData.produce}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="experience">Records or Experience</Label>
          <TextArea
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <SubmitButton type="submit">Create Profile</SubmitButton>
      </Form>
    </FormContainer>
  );
};

// Styled components
const FormContainer = styled.div`
  max-width: 600px; /* Reduced max-width */
  margin: 0 auto;
  padding: 20px; /* Reduced padding */
  background: linear-gradient(135deg, #e9f5f2 0%, #c1e6e6 100%); /* Light teal gradient background */
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px; /* Reduced gap between form elements */
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
  margin-bottom: 6px; /* Reduced margin */
  color: #333;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px; /* Reduced padding */
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.95em; /* Slightly smaller font size */
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
  padding: 10px; /* Reduced padding */
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.95em; /* Slightly smaller font size */
  min-height: 100px; /* Reduced minimum height */
  resize: vertical;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    border-color: #71b34a;
    box-shadow: 0 0 8px rgba(113, 179, 74, 0.4);
    outline: none;
  }
`;

const SubmitButton = styled.button`
  padding: 10px 20px; /* Reduced padding */
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

export default CreateProfile;
