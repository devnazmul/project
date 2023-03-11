import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

export const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const { user, isLoading } = useAuth();
  console.log(user);

  if (isLoading) {
    return <h1>Loading...</h1>
  };

  if (user && user.uid) {
    return children;
  }

  return <Navigate to={"/login"} state={{ from: location }} replace />;
};
