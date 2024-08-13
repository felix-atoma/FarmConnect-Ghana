import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'; // Adjust path if necessary

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, userRole } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (isAuthenticated && userRole === 'farmer') {
    return <Navigate to="/farmer-dashboard" />;
  }

  if (isAuthenticated && userRole === 'customer') {
    return <Navigate to="/customer-dashboard" />;
  }

  // Fallback if role is not recognized
  return <Navigate to="/" />;
};

export default PrivateRoute;
