import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

export const ProtectedRoute = ({ children }) => {
  const { isLogin } = useAuth();
  const location = useLocation();
  return (
    <>
      {!isLogin ? (
        <Navigate to={"/login"} state={{ from: location }} replace />
      ) : (
        children
      )}
    </>
  );
};
