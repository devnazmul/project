import { createContext, useContext, useEffect, useState } from "react";
import { apiTokenValidation } from "../apis/auth";

const AUTH_CONTEXT = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState("");
  const [userDetails, setUserDetails] = useState({});
  useEffect(() => {
    isLogin &&
      apiTokenValidation().then((res) => {
        console.log({ res });
      });
  }, []);
  const value = {
    isLogin,
    setIsLogin,
    token,
    setToken,
    userDetails,
    setUserDetails,
  };
  return (
    <AUTH_CONTEXT.Provider value={value}>{children}</AUTH_CONTEXT.Provider>
  );
};

export const useAuth = () => {
  return useContext(AUTH_CONTEXT);
};
