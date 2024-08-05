import React, { useState, useRef, useEffect } from 'react';

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleChangeLanguage = (lang) => {
    // Your language change logic here
    console.log(`Language changed to: ${lang}`);
    setIsOpen(false); // Close the dropdown after selection
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="bg-orange-500 text-white p-2 rounded hover:bg-orange-600"
      >
        Language
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded shadow-lg">
          <button
            onClick={() => handleChangeLanguage('en')}
            className="block px-4 py-2 text-orange-500 hover:bg-orange-100"
          >
            English
          </button>
          <button
            onClick={() => handleChangeLanguage('tw')}
            className="block px-4 py-2 text-orange-500 hover:bg-orange-100"
          >
            Twi
          </button>
          <button
            onClick={() => handleChangeLanguage('ga')}
            className="block px-4 py-2 text-orange-500 hover:bg-orange-100"
          >
            Ga
          </button>
          <button
            onClick={() => handleChangeLanguage('ee')}
            className="block px-4 py-2 text-orange-500 hover:bg-orange-100"
          >
            Ewe
          </button>
          <button
            onClick={() => handleChangeLanguage('ha')}
            className="block px-4 py-2 text-orange-500 hover:bg-orange-100"
          >
            Hausa
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
