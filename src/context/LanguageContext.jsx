// src/components/common/LanguageSwitcher.jsx

import React from 'react';
import './LanguageSwitcher.css'; // Import the CSS file for styling

const LanguageSwitcher = () => {
  return (
    <div className="language-switcher">
      <button className="lang-btn">EN</button>
      <button className="lang-btn">FR</button>
      <button className="lang-btn">TWI</button>
      {/* Add more language buttons as needed */}
    </div>
  );
};

export default LanguageSwitcher;
