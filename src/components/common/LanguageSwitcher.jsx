// src/components/common/LanguageSwitcher.jsx

import React from 'react';

const LanguageSwitcher = () => {
  return (
    <div className="flex space-x-2">
      <button className="bg-white border border-green-500 text-green-500 py-1 px-3 rounded-lg font-bold hover:bg-gray-100">EN</button>
      <button className="bg-white border border-green-500 text-green-500 py-1 px-3 rounded-lg font-bold hover:bg-gray-100">FR</button>
      <button className="bg-white border border-green-500 text-green-500 py-1 px-3 rounded-lg font-bold hover:bg-gray-100">TWI</button>
      {/* Add more language buttons as needed */}
    </div>
  );
};

export default LanguageSwitcher;
