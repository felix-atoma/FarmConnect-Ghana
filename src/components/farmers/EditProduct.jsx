import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const EditProduct = () => {
  const { productId } = useParams(); // Get the product ID from the URL
  const navigate = useNavigate(); // Hook for navigation

  const [product, setProduct] = useState({
    name: '',
    type: '',
    price: '',
    quantity: '',
    description: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        setError('Failed to fetch product details');
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/products/${productId}`, product);
      navigate('/farmer-dashboard/product-management/all'); // Redirect after successful update
    } catch (error) {
      setError('Failed to update product');
      console.error('Error updating product:', error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <ErrorMessage>{error}</ErrorMessage>;

  return (
    <FormContainer>
      <h2>Edit Product</h2>
      <Form onSubmit={handleSubmit}>
        <Label>
          Product Name:
          <Input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
          />
        </Label>
        <Label>
          Type:
          <Input
            type="text"
            name="type"
            value={product.type}
            onChange={handleChange}
            required
          />
        </Label>
        <Label>
          Price:
          <Input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </Label>
        <Label>
          Quantity:
          <Input
            type="number"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
            required
          />
        </Label>
        <Label>
          Description:
          <Textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            required
          />
        </Label>
        <Button type="submit">Update Product</Button>
      </Form>
    </FormContainer>
  );
};

// Styled components
const FormContainer = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 15px;
  font-size: 1em;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-top: 5px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-top: 5px;
  height: 100px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #71b34a; /* Green background */
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #5a9c41; /* Darker green on hover */
  }
`;

const ErrorMessage = styled.p`
  color: #ff4d4d; /* Red color for error messages */
`;

export default EditProduct;
