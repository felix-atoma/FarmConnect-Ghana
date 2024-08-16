import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaCartPlus, FaHeart } from 'react-icons/fa'; // Import cart and heart icons
import { AuthContext } from '../../context/AuthContext'; 
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

const iconStyle = {
  color: '#FFFFFF', // White color for icons
  fontSize: '20px', // Adjust icon size
  marginLeft: '10px',
  cursor: 'pointer',
};

const Navbar = () => {
  const { isAuthenticated, userRole } = useContext(AuthContext); // Use AuthContext
  const [activeIcon, setActiveIcon] = useState(null);

  const handleIconClick = (iconType) => {
    setActiveIcon(iconType);
    // Add navigation logic or other actions here if needed
  };

  return (
    <nav style={navbarStyle}>
      <div className="navbar-logo">
        <img src={Logo} alt="FarmConnect Ghana" style={logoStyle} />
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
      <div className="navbar-icons" style={{ display: 'flex', alignItems: 'center' }}>
        <FaCartPlus 
          onClick={() => handleIconClick('cart')} 
          style={iconStyle} 
        />
        <FaHeart 
          onClick={() => handleIconClick('heart')} 
          style={iconStyle} 
        />
      </div>
    </nav>
  );
};

export default Navbar;
