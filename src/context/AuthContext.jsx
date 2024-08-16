import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));

      if (user && user.role) {
        setIsAuthenticated(true);
        setUserRole(user.role);
      } else {
        setIsAuthenticated(false);
        setUserRole(null);
      }
    } catch (error) {
      console.error('Error parsing user data from local storage:', error);
      setIsAuthenticated(false);
      setUserRole(null);
    }
  }, []);

  const login = (role) => {
    setIsAuthenticated(true);
    setUserRole(role);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserRole('');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
