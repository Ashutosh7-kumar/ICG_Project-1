import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ requiredRole }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const userRole = localStorage.getItem("userRole"); // "user" or "admin"

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  // Allow both "user" and "admin" to access user pages
  if (requiredRole === "user" && (userRole === "user" || userRole === "admin")) {
    return <Outlet />;
  }

  // Allow only admin access
  if (requiredRole === "admin" && userRole === "admin") {
    return <Outlet />;
  }

  return <Navigate to="/" replace />; // Redirect unauthorized users
};

export default ProtectedRoute;
