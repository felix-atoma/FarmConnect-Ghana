import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const DeleteProduct = ({ productId, onDeleteSuccess }) => {
  const navigate = useNavigate(); // Hook for navigation

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`/api/products/${productId}`);
      if (response.status === 200) {
        // Notify parent component about the successful deletion
        onDeleteSuccess();
        // Redirect to the product list or another page
        navigate('/farmer-dashboard/product-management/all');
        alert('Product deleted successfully!');
      } else {
        // Handle unexpected responses
        alert('Unexpected response from server');
      }
    } catch (error) {
      if (error.response) {
        // Handle errors based on response status
        switch (error.response.status) {
          case 401:
            alert('Unauthorized: Please log in to continue.');
            break;
          case 403:
            alert('Forbidden: You do not have access to this resource.');
            break;
          case 404:
            alert('Product not found.');
            break;
          case 500:
            alert('Internal server error: An error occurred while deleting the product.');
            break;
          default:
            alert('An error occurred: Please try again later.');
            break;
        }
      } else {
        // Handle errors without response (e.g., network errors)
        alert('An error occurred: Please check your network connection.');
      }
      console.error('Error deleting product:', error);
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
