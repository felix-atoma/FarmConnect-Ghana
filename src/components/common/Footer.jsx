import React from 'react';

const footerStyle = {
  backgroundColor: '#71B34A', // Green background
  color: '#FFFFFF', // White text color
  textAlign: 'center',
  padding: '20px',
  borderTop: '4px solid #F7931E', // Orange border
  position: 'relative',
  bottom: 0,
  width: '100%',
  boxSizing: 'border-box',
};

const copyrightStyle = {
  fontSize: '14px',
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={copyrightStyle}>
        <p>© {new Date().getFullYear()} FarmConnect Ghana. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
