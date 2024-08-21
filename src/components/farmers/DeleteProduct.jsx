import React, { useState } from 'react';
import styled from 'styled-components';
import { AiFillDelete } from 'react-icons/ai'; // Import the delete icon
import productData from '../../services/ProductData'; // Adjust the path according to your file structure

// Styled components
const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
`;

const ProductCard = styled.div`
  position: relative;
  background-color: #f4f4f4;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: calc(25% - 20px); /* 4 cards per row */
  text-align: center;
  overflow: hidden; /* Ensure content does not overflow */
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 150px; /* Reduced height */
  object-fit: cover;
  border-radius: 4px;
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
  padding: 15px;
  transition: opacity 0.3s;

  ${ProductCard}:hover & {
    opacity: 1;
  }
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #f56565;
  color: #fff;
  padding: 8px 12px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  font-size: 0.875rem;

  &:hover {
    background-color: #c53030;
  }
`;

const Popup = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

const DeleteProductComponent = () => {
  const [products, setProducts] = useState(productData); // Initialize with product data
  const [message, setMessage] = useState('');

  // Handle delete product
  const handleDelete = (productId) => {
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);
    setMessage('Product deleted successfully');
    setTimeout(() => setMessage(''), 3000); // Hide message after 3 seconds
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Manage Products</h2>

      {message && (
        <Popup>
          {message}
        </Popup>
      )}

      <ProductList>
        {products.map(product => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductInfo>
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-300 mb-1">Price: {product.price} GHS</p>
              <p className="text-gray-300 mb-2">Quantity: {product.quantity}</p>
              <p className="text-gray-200 mb-2">{product.description}</p>
              <p className="text-gray-400 mb-4">Date Added: {new Date(product.date).toLocaleDateString()}</p>
              <DeleteButton onClick={() => handleDelete(product.id)}>
                <AiFillDelete style={{ marginRight: '8px' }} />
                Delete
              </DeleteButton>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductList>
    </div>
  );
};

export default DeleteProductComponent;
