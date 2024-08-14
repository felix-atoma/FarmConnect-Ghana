import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'; // Adjust path if necessary

const PrivateRoute = ({ children, requiredRole }) => {
  const { isAuthenticated, userRole } = useContext(AuthContext);

  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" />;
  }

  if (requiredRole && userRole !== requiredRole) {
    // Redirect based on role if the user role does not match the required role
    return <Navigate to="/" />;
  }

  // Render the children if authenticated and role is correct
  return children;
};

export default PrivateRoute;
