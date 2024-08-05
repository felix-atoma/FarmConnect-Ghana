// src/contexts/AuthContext.jsx

import React, { createContext, useState, useEffect } from 'react';
import { checkTokenValidity } from '../services/Auth'; // Adjust the path if necessary

// Example of context setup
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        const isValid = await checkTokenValidity(token);
        setIsAuthenticated(isValid);
      }
    };
    verifyToken();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
