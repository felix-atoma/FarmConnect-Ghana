import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ShowcaseProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else {
          throw new Error('Data is not an array');
        }
      } catch (error) {
        setError('Failed to fetch products');
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <ErrorMessage>{error}</ErrorMessage>;

  return (
    <ProductList>
      {products.map((product) => (
        <ProductCard key={product.id}>
          <h3>{product.name}</h3>
          <p>Type: {product.type}</p>
          <p>Price: ${product.price}</p>
          <p>Quantity: {product.quantity}</p>
          <p>{product.description}</p>
        </ProductCard>
      ))}
    </ProductList>
  );
};

// Styled components
const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const ProductCard = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: calc(33% - 20px);
`;

const ErrorMessage = styled.p`
  color: #ff4d4d; /* Red color for error messages */
`;

export default ShowcaseProducts;
