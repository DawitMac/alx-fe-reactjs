import React from 'react'
import { Redirect } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
  const isAuthenticated = () => {
    // Replace with your authentication logic, for instance checking if a token exists in local storage
    return localStorage.getItem('authToken') !== null;
};

    
  return isAuthenticated ? children : <Redirect to="/login" />;
}

export default ProtectedRoute