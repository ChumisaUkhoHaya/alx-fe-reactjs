// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
"useAuth"

// Simulate authentication status
const isAuthenticated = false; // Change to true to simulate logged-in state

function ProtectedRoute({ children }) {
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
