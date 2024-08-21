import React, { useState, useEffect } from 'react';
import productsData from '../../services/ProductData';
import styled from 'styled-components';

const ShowcaseProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Use the local mock data instead of fetching from an API
        setProducts(productsData);
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
          <ProductImageWrapper>
            <ProductImage src={product.image} alt={product.name} />
            <ProductInfo>
              <h3>{product.name}</h3>
              <p>Type: {product.type}</p>
              <p>Price: ${product.price.toFixed(2)}</p>
              <p>Quantity: {product.quantity}</p>
              <p>{product.description}</p>
              <p>Date: {new Date(product.date).toLocaleDateString()}</p>
            </ProductInfo>
          </ProductImageWrapper>
        </ProductCard>
      ))}
    </ProductList>
  );
};

// Styled components
const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns with equal width */
  gap: 20px;
  padding: 20px;
`;

const ProductCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #f4f4f4;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProductImageWrapper = styled.div`
  position: relative;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  transition: opacity 0.3s;

  ${ProductCard}:hover & {
    opacity: 1;
  }

  h3 {
    margin: 0 0 10px 0;
    font-size: 1.2rem;
  }

  p {
    margin: 5px 0;
  }
`;

const ErrorMessage = styled.p`
  color: #ff4d4d;
  text-align: center;
  margin: 20px 0;
`;

export default ShowcaseProducts;
