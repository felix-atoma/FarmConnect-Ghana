// src/hooks/UseAuth.jsx

import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext'; // Adjust the path if necessary

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth; // Ensure this is the correct export if using default export
