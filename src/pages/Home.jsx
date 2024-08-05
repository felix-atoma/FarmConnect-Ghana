// src/pages/Home.js
import React from 'react';
import MapContainer from '../components/common/MapContainer';

const Home = () => {
  const locations = [
    { lat: 5.6037, lng: -0.1870 }, // Example coordinates
    { lat: 5.6038, lng: -0.1871 }
  ];
  const center = { lat: 5.6037, lng: -0.1870 };

  return (
    <div>
      <h1>Welcome to FarmConnect Ghana</h1>
      <MapContainer locations={locations} center={center} />
    </div>
  );
};

export default Home;
