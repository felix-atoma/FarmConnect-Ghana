import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt, FaStore } from 'react-icons/fa'; // Icons for customer and farmer

const initialScreenStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: '#ffffff', // White background
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
};

const titleStyle = {
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '20px',
  color: '#333333', // Dark text color for contrast
};

const cardContainerStyle = {
  display: 'flex',
  gap: '20px',
};

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '200px',
  height: '200px',
  borderRadius: '10px',
  textAlign: 'center',
  textDecoration: 'none',
  color: '#ffffff',
  padding: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
};

const iconStyle = {
  fontSize: '3rem',
  marginBottom: '10px',
};

const titleTextStyle = {
  fontSize: '1.2rem',
  fontWeight: 'bold',
};

const customerCardStyle = {
  ...cardStyle,
  backgroundColor: '#71B34A', // Green for customer
};

const farmerCardStyle = {
  ...cardStyle,
  backgroundColor: '#F7931E', // Orange for farmer
};

const InitialScreen = () => {
  return (
    <div style={initialScreenStyle}>
      <h1 style={titleStyle}>Welcome to FarmConnect Ghana</h1>
      <div style={cardContainerStyle}>
        <Link to="/register?role=customer" style={customerCardStyle}>
          <FaUserAlt style={iconStyle} />
          <h2 style={titleTextStyle}>Register as Customer</h2>
        </Link>
        <Link to="/register?role=farmer" style={farmerCardStyle}>
          <FaStore style={iconStyle} />
          <h2 style={titleTextStyle}>Register as Farmer</h2>
        </Link>
      </div>
    </div>
  );
};

export default InitialScreen;
