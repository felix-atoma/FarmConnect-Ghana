// VerticalCarousel.jsx
import React from 'react';
import ProductCard from './ProductCard';

const VerticalCarousel = ({ products }) => {
  return (
    <div className="vertical-carousel">
      {products.map((product, index) => (
        <ProductCard 
          key={index}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default VerticalCarousel;
