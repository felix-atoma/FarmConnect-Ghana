// src/pages/CustomerDashboard.jsx
import React from 'react';
import ProductSearch from '../components/customers/ProductSearch';
import FarmerProfile from '../components/farmers/FarmerProfile';
import OrderManagement from '../components/farmers/OrderManagement';
import InquiryForm from '../components/customers/InquiryForm';
import DirectMessage from '../components/customers/DirectMessage';
import MapComponent from '../components/farmers/MapComponent';

const CustomerDashboard = () => {
  // Example data
  const exampleFarmer = {
    id: '1',
    name: 'John Doe',
    description: 'Experienced farmer with organic produce.',
    products: [{ id: '101', name: 'Tomatoes', price: 2.5 }]
  };
  const exampleOrders = [{ id: '5001', status: 'Shipped', total: 25.0 }];
  const farmerLocations = [
    { id: '1', lat: 7.1, lng: -0.2, name: 'John Doe', description: 'Tomatoes and more' }
    // Add more farmer locations as needed
  ];

  const handleSearch = (params) => {
    // Handle product search
    console.log('Search params:', params);
  };

  return (
    <div style={{ padding: '20px' }}>
      <ProductSearch onSearch={handleSearch} />
      <FarmerProfile farmer={exampleFarmer} />
      <OrderManagement orders={exampleOrders} />
      <InquiryForm farmerId={exampleFarmer.id} />
      <DirectMessage farmerId={exampleFarmer.id} />
      <MapComponent locations={farmerLocations} />
    </div>
  );
};

export default CustomerDashboard;
