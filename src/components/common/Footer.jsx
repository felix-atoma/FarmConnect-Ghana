import React from 'react';

const footerStyle = {
  backgroundColor: '#71B34A', // Green background
  color: '#FFFFFF', // White text color
  textAlign: 'center',
  padding: '20px',
  borderTop: '4px solid #F7931E', // Orange border
};

const paragraphStyle = {
  margin: 0,
  fontSize: '14px', // Adjust font size if needed
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p style={paragraphStyle}>&copy; 2024 FarmConnect Ghana</p>
    </footer>
  );
};

export default Footer;
