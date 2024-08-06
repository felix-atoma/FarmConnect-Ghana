// src/components/FarmerDashboard.jsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import MapContainer from '../components/farmers/MapComponent'

const FarmerDashboard = () => {
  const farmLocation = { lat: 37.7749, lng: -122.4194 }; // Example location

  return (
    <div style={dashboardContainerStyle}>
      <nav style={navStyle}>
        <ul style={navListStyle}>
          <li><Link to="profile" style={navLinkStyle}>Profile</Link></li>
          <li><Link to="products" style={navLinkStyle}>Manage Products</Link></li>
          <li><Link to="inquiries" style={navLinkStyle}>Purchase Inquiries</Link></li>
          <li><Link to="orders" style={navLinkStyle}>Order Management</Link></li>
          <li><Link to="communication" style={navLinkStyle}>Customer Communication</Link></li>
        </ul>
      </nav>
      <main style={mainStyle}>
        <MapContainer location={farmLocation} /> {/* Embed the map component */}
        <Outlet /> {/* This is where the specific component will be rendered */}
      </main>
    </div>
  );
};

// Inline CSS styles
const dashboardContainerStyle = { display: 'flex' };
const navStyle = { width: '200px', backgroundColor: '#f4f4f4', padding: '20px' };
const navListStyle = { listStyleType: 'none', padding: '0' };
const navLinkStyle = { textDecoration: 'none', color: '#333', display: 'block', padding: '10px 0' };
const mainStyle = { flex: 1, padding: '20px' };

export default FarmerDashboard;
