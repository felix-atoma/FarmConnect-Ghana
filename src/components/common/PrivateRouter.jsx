import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

function PrivateRoute({ element, ...rest }) {
  const { isAuthenticated, userRole } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Redirect based on userRole
  if (userRole === 'farmer') {
    return <Navigate to="/farmer-dashboard" replace />;
  } else if (userRole === 'customer') {
    return <Navigate to="/customer-dashboard" replace />;
  }

  return element;
}

export default PrivateRoute;
