import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import useAdmin from "../../hooks/useAdmin";

export default function SuperAdminProtectedRoute({ children }) {
  const { user } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin(email);

  if (isAdminLoading) {
    return <h1>Loading..</h1>
  }

  if (isAdmin) {
    return children
  }
  return <Navigate to={'/login'} replace />
}
