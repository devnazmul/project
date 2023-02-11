import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

export default function SuperAdminProtectedRoute({children}) {
   const {isLogin} = useAuth()
  return <>{!isLogin ? <Navigate to={'/login'} replace /> : children}</>;
}
