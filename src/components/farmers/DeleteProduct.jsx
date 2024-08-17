import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const DeleteProduct = ({ productId, onDeleteSuccess }) => {
  const navigate = useNavigate(); // Hook for navigation

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/products/${productId}`);
      // Notify parent component about the successful deletion
      onDeleteSuccess();
      // Redirect to the product list or another page
      navigate('/farmer-dashboard/product-management/all');
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Failed to delete product');
    }
  };

  return (
    <DeleteButton onClick={handleDelete}>
      Delete Product
    </DeleteButton>
  );
};

// Styled components
const DeleteButton = styled.button`
  padding: 10px 20px;
  background-color: #ff4d4d; /* Red background for delete button */
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e60000; /* Darker red on hover */
  }
`;

export default DeleteProduct;
