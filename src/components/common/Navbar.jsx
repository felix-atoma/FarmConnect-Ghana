import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaGlobe } from 'react-icons/fa'; // Import world map icon
import LanguageSwitcher from './LanguageSwitcher';
import { AuthContext } from '../../context/AuthContext'; 

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
  position: 'relative',
};

const linkHoverStyle = {
  color: '#F7931E', // Orange color
  textDecoration: 'underline',
};

const langButtonStyle = {
  backgroundColor: 'transparent', // No background for icon button
  border: 'none',
  cursor: 'pointer',
  fontSize: '20px', // Adjust icon size
  color: '#FFFFFF', // White color for the icon
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
  const langMenuRef = useRef(null);

  const toggleLangMenu = () => {
    setIsLangMenuOpen(!isLangMenuOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
        setIsLangMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav style={navbarStyle}>
      <div className="navbar-logo">
        <img src="/path-to-your-logo.png" alt="FarmConnect Ghana" style={logoStyle} />
      </div>
      <ul style={linksStyle}>
        <li>
          <Link to="/" style={linkStyle} onMouseOver={(e) => Object.assign(e.target.style, linkHoverStyle)} onMouseOut={(e) => Object.assign(e.target.style, linkStyle)}>
            Home
          </Link>
        </li>
        {!isAuthenticated ? (
          <>
            <li>
              <Link to="/login" style={linkStyle} onMouseOver={(e) => Object.assign(e.target.style, linkHoverStyle)} onMouseOut={(e) => Object.assign(e.target.style, linkStyle)}>
                Login
              </Link>
            </li>
            <li>
              <Link to="/initial-screen" style={linkStyle} onMouseOver={(e) => Object.assign(e.target.style, linkHoverStyle)} onMouseOut={(e) => Object.assign(e.target.style, linkStyle)}>
                Register
              </Link>
            </li>
          </>
        ) : (
          <>
            {userRole === 'farmer' && (
              <li>
                <Link to="/farmer/dashboard" style={linkStyle} onMouseOver={(e) => Object.assign(e.target.style, linkHoverStyle)} onMouseOut={(e) => Object.assign(e.target.style, linkStyle)}>
                  Farmer Dashboard
                </Link>
              </li>
            )}
            {userRole === 'customer' && (
              <li>
                <Link to="/customer/dashboard" style={linkStyle} onMouseOver={(e) => Object.assign(e.target.style, linkHoverStyle)} onMouseOut={(e) => Object.assign(e.target.style, linkStyle)}>
                  Customer Dashboard
                </Link>
              </li>
            )}
          </>
        )}
      </ul>
      <div className="navbar-lang-switcher" style={{ position: 'relative' }} ref={langMenuRef}>
        <button onClick={toggleLangMenu} style={langButtonStyle}>
          <FaGlobe />
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
