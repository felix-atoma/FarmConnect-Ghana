import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios'; // For API calls

const UpdateProfile = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    produce: '',
    experience: '',
  });

  useEffect(() => {
    // Fetch current profile data when the component mounts
    const fetchProfile = async () => {
      try {
        // Replace with your API endpoint to fetch profile data
        const response = await axios.get('/api/farmer/profile');
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfile();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your API endpoint to update profile data
      await axios.put('/api/farmer/profile', formData);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile. Please try again.');
    }
  };

  return (
    <FormContainer>
      <h2>Update Your Profile</h2>
      <Form onSubmit={handleSubmit}>
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

        <SubmitButton type="submit">Update Profile</SubmitButton>
      </Form>
    </FormContainer>
  );
};

// Styled components
const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-size: 1em;
  margin-bottom: 5px;
  display: block;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
  min-height: 100px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #71b34a; /* Green background */
  color: #ffffff;
  font-size: 1em;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #4a8a2c; /* Darker green on hover */
  }
`;

export default UpdateProfile;
