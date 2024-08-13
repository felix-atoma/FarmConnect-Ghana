import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    // Check authentication status (e.g., from local storage or API)
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setIsAuthenticated(true);
      setUserRole(user.role); // Adjust based on your user object structure
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
