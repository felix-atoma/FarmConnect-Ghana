import React from 'react';
import { Link } from 'react-router-dom';

const footerStyle = {
  backgroundColor: '#71B34A', // Green background
  color: '#FFFFFF', // White text color
  textAlign: 'left',
  padding: '20px',
  borderTop: '4px solid #F7931E', // Orange border
  position: 'relative',
  bottom: 0,
  width: '100%',
};

const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
};

const sectionStyle = {
  flex: '1',
  minWidth: '200px',
  margin: '0 20px',
};

const cardContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px', // Space between cards
};

const cardStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#000000',
  color: '#FFFFFF',
  padding: '10px',
  borderRadius: '5px',
  transition: 'background-color 0.3s',
  textDecoration: 'none', // Remove underline from links
};

const cardImageStyle = {
  height: '30px',
  marginRight: '10px',
};

const linkStyle = {
  color: '#FFFFFF', // White link color
  textDecoration: 'none', // Remove underline
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={sectionStyle}>
          <h4>About Us</h4>
          <ul style={{ padding: 0, listStyleType: 'none' }}>
            <li><Link to="/about-farm-connect-ghana" style={linkStyle}>About FarmConnect Ghana</Link></li>
            <li><Link to="/we-are-hiring" style={linkStyle}>We Are Hiring</Link></li>
            <li><Link to="/terms-and-conditions" style={linkStyle}>Terms and Conditions</Link></li>
            <li><Link to="/privacy-policy" style={linkStyle}>Privacy Policy</Link></li>
            <li><Link to="/billing-policy" style={linkStyle}>Billing Policy</Link></li>
            <li><Link to="/copyright-infringement-policy" style={linkStyle}>Copyright Infringement Policy</Link></li>
          </ul>
        </div>
        <div style={sectionStyle}>
          <h4>Support</h4>
          <ul style={{ padding: 0, listStyleType: 'none' }}>
            <li><a href="mailto:support@farmconnectghana.com" style={linkStyle}>Support Email</a></li>
            <li><Link to="/safety-tips" style={linkStyle}>Safety Tips</Link></li>
            <li><Link to="/contact-us" style={linkStyle}>Contact Us</Link></li>
            <li><Link to="/faq" style={linkStyle}>FAQ</Link></li>
          </ul>
        </div>
        <div style={sectionStyle}>
          <h4>Our Apps</h4>
          <div style={cardContainerStyle}>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" style={cardStyle}>
              <img src="path/to/app-store-logo.png" alt="App Store" style={cardImageStyle} />
              <span>Download on the App Store</span>
            </a>
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" style={cardStyle}>
              <img src="path/to/google-play-logo.png" alt="Google Play" style={cardImageStyle} />
              <span>Get it on Google Play</span>
            </a>
          </div>
        </div>
        <div style={sectionStyle}>
          <h4>Our Resources</h4>
          <ul style={{ padding: 0, listStyleType: 'none' }}>
            <li><a href="https://facebook.com/farmconnectghana" target="_blank" rel="noopener noreferrer" style={linkStyle}>FarmConnect on Facebook</a></li>
            <li><a href="https://instagram.com/farmconnectghana" target="_blank" rel="noopener noreferrer" style={linkStyle}>Our Instagram</a></li>
            <li><a href="https://twitter.com/farmconnectghana" target="_blank" rel="noopener noreferrer" style={linkStyle}>Our Twitter</a></li>
            <li><a href="https://youtube.com/farmconnectghana" target="_blank" rel="noopener noreferrer" style={linkStyle}>Our YouTube</a></li>
          </ul>
        </div>
        <div style={sectionStyle}>
          <h4>Hot Links</h4>
          <ul style={{ padding: 0, listStyleType: 'none' }}>
            <li><a href="https://www.farmconnectghana.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>FarmConnect Ghana</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
