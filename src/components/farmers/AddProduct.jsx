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

      // Replace with your API endpoint to add a product
      await axios.post('/api/farmer/products', formData, {
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
          <Label htmlFor="name">Product Name:</Label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="type">Type:</Label>
          <Input
            type="text"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="price">Price:</Label>
          <Input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="quantity">Quantity:</Label>
          <Input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="description">Description:</Label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="image">Product Image:</Label>
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
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: vertical;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #71b34a; /* Green background for submit button */
  color: white;
  font-size: 1em;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #5a9a3e; /* Darker green on hover */
  }
`;

const ErrorMessage = styled.p`
  color: #ff4d4d; /* Red color for error messages */
`;

const SuccessMessage = styled.p`
  color: #4caf50; /* Green color for success messages */
`;

export default AddProductForm;
