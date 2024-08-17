import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeleteProduct from './DeleteProduct';
import styled from 'styled-components';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        setProducts(response.data);
      } catch (error) {
        setError('Failed to fetch products');
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleDeleteSuccess = () => {
    // Fetch the updated list of products
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        setProducts(response.data);
      } catch (error) {
        setError('Failed to fetch products');
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  };

  if (error) return <ErrorMessage>{error}</ErrorMessage>;

  return (
    <ProductListContainer>
      <h2>All Products</h2>
      <ProductList>
        {products.map(product => (
          <ProductItem key={product.id}>
            <ProductInfo>
              <h3>{product.name}</h3>
              <p>Type: {product.type}</p>
              <p>Price: ${product.price}</p>
              <p>Quantity: {product.quantity}</p>
              <p>Description: {product.description}</p>
            </ProductInfo>
            <DeleteProduct 
              productId={product.id} 
              onDeleteSuccess={handleDeleteSuccess} 
            />
          </ProductItem>
        ))}
      </ProductList>
    </ProductListContainer>
  );
};

// Styled components
const ProductListContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProductList = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const ProductInfo = styled.div`
  flex: 1;
`;

const ErrorMessage = styled.p`
  color: #ff4d4d; /* Red color for error messages */
`;

export default AllProducts;
