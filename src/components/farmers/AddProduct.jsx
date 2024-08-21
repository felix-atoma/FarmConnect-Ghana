import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'; // For API calls

const AddProductForm = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!name || !type || !price || !quantity || !description) {
      setError('All fields are required.');
      return;
    }

    try {
      // Create FormData object to handle file upload
      const formData = new FormData();
      formData.append('name', name);
      formData.append('type', type);
      formData.append('price', price);
      formData.append('quantity', quantity);
      formData.append('description', description);
      if (image) {
        formData.append('image', image);
      }

      // Mock API URL for testing
      const mockApiUrl = 'https://mockapi.example.com/products'; // Replace with your mock API URL

      await axios.post(mockApiUrl, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setSuccess('Product added successfully!');
      // Clear form fields
      setName('');
      setType('');
      setPrice('');
      setQuantity('');
      setDescription('');
      setImage(null);
    } catch (error) {
      console.error('Error adding product:', error);
      setError('Failed to add product.');
    }
  };

  return (
    <FormContainer>
      <h2>Add New Product</h2>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <SuccessMessage>{success}</SuccessMessage>}
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Product Name</Label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter product name"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="type">Type</Label>
          <Input
            type="text"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            placeholder="Enter product type"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="price">Price (GHS)</Label>
          <Input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter price"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="quantity">Quantity</Label>
          <Input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Enter quantity"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter product description"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="image">Product Image</Label>
          <Input
            type="file"
            id="image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </FormGroup>
        <SubmitButton type="submit">Add Product</SubmitButton>
      </Form>
    </FormContainer>
  );
};

// Styled components
const FormContainer = styled.div`
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Label = styled.label`
  font-size: 0.9em;
  font-weight: bold;
  color: #333;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.9em;
  transition: border-color 0.3s;

  &:focus {
    border-color: #71b34a;
    outline: none;
  }
`;

const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.9em;
  min-height: 100px;
  resize: vertical;
  transition: border-color 0.3s;

  &:focus {
    border-color: #71b34a;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #f7931e; /* Orange background for submit button */
  color: #ffffff;
  font-size: 1em;
  cursor: pointer;
  border-radius: 6px;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #e67e22; /* Darker orange on hover */
    transform: scale(1.02);
  }

  &:active {
    background-color: #d35400; /* Even darker orange on click */
  }
`;

const ErrorMessage = styled.p`
  color: #e74c3c; /* Red color for error messages */
  font-size: 0.9em;
`;

const SuccessMessage = styled.p`
  color: #2ecc71; /* Green color for success messages */
  font-size: 0.9em;
`;

export default AddProductForm;
