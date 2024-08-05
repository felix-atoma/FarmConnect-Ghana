// src/components/common/PrivateRoute.jsx

import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import useAuth from '../../hooks/UseAuth'; // Ensure this path is correct

const PrivateRoute = ({ element: Component, ...rest }) => {
  const { user } = useAuth(); // Use the hook here

  return (
    <Route
      {...rest}
      element={user ? Component : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;
