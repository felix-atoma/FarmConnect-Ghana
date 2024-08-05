import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { AuthContext } from '../../context/AuthContext'; // Import AuthContext

const navbarStyle = {
  backgroundColor: '#71B34A', // Green background
  padding: '10px 20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const logoStyle = {
  height: '40px', // Adjust as needed
};

const linksStyle = {
  listStyle: 'none',
  display: 'flex',
  gap: '20px',
  margin: 0,
  padding: 0,
};

const linkStyle = {
  color: '#FFFFFF', // White text color
  textDecoration: 'none',
  fontSize: '16px',
};

const langButtonStyle = {
  backgroundColor: '#FFFFFF', // White background
  color: '#71B34A', // Green text color
  border: 'none',
  padding: '10px 15px',
  cursor: 'pointer',
};

const langDropdownStyle = {
  backgroundColor: '#FFFFFF', // White background
  color: '#000000', // Black text color
  position: 'absolute',
  right: '0',
  marginTop: '10px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  borderRadius: '4px',
  padding: '10px',
};

const Navbar = () => {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { isAuthenticated, userRole } = useContext(AuthContext); // Use AuthContext

  const toggleLangMenu = () => {
    setIsLangMenuOpen(!isLangMenuOpen);
  };

  return (
    <nav style={navbarStyle}>
      <div className="navbar-logo">
        <img src="/path-to-your-logo.png" alt="FarmConnect Ghana" style={logoStyle} />
      </div>
      <ul style={linksStyle}>
        <li><Link to="/" style={linkStyle}>Home</Link></li>
        {!isAuthenticated ? (
          <>
            <li><Link to="/login" style={linkStyle}>Login</Link></li>
            <li><Link to="/register" style={linkStyle}>Register</Link></li>
          </>
        ) : (
          <>
            {userRole === 'farmer' && <li><Link to="/farmer/dashboard" style={linkStyle}>Farmer Dashboard</Link></li>}
            {userRole === 'customer' && <li><Link to="/customer/dashboard" style={linkStyle}>Customer Dashboard</Link></li>}
          </>
        )}
      </ul>
      <div className="navbar-lang-switcher" style={{ position: 'relative' }}>
        <button onClick={toggleLangMenu} style={langButtonStyle}>
          Language
        </button>
        {isLangMenuOpen && (
          <div style={langDropdownStyle}>
            <LanguageSwitcher />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
