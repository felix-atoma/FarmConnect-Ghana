import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo-no-background (1).png'; // Path to your logo

const navbarStyle = {
  backgroundColor: '#71B34A', // Green background
  padding: '10px 20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Optional shadow for better visibility
};

const logoStyle = {
  height: '40px', // Adjust as needed
  filter: 'brightness(0) invert(1)', // Makes the logo white
};

const logoutButtonStyle = {
  backgroundColor: '#ff4d4d', // Red background for logout button
  color: '#FFFFFF', // White text color
  border: 'none',
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  borderRadius: '5px',
};

const FarmerDashboardNavbar = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  // Function to handle logout logic
  const handleLogout = () => {
    // Logic for logging out (e.g., clearing tokens, redirecting)
    console.log('Logging out...');
    // Clear authentication tokens or state here if needed
    navigate('/'); // Redirect to home page
  };

  return (
    <nav style={navbarStyle}>
      <div className="navbar-logo">
        <img src={Logo} alt="FarmConnect Ghana" style={logoStyle} />
      </div>
      <button style={logoutButtonStyle} onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
};

export default FarmerDashboardNavbar;
