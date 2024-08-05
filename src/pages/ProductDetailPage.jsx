// src/pages/ProductDetailPage.js
import React from 'react';
import MapContainer from '../components/common/MapContainer';

const ProductDetailPage = () => {
  const locations = [
    { lat: 5.6037, lng: -0.1870 } // Example coordinates for the product
  ];
  const center = { lat: 5.6037, lng: -0.1870 };

  return (
    <div>
      <h1>Product Detail</h1>
      <MapContainer locations={locations} center={center} />
    </div>
  );
};

export default ProductDetailPage;
