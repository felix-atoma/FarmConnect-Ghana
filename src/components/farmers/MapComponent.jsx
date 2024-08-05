// src/components/MapComponent.jsx
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Define the map container style
const containerStyle = {
  width: '100%',
  height: '400px'
};

// Define the center coordinates of the map
const center = {
  lat: 37.7749, // Example latitude
  lng: -122.4194 // Example longitude
};

const MapComponent = ({ location }) => {
  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY"> {/* Replace with your API key */}
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location || center}
        zoom={10}
      >
        <Marker position={location || center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
