import { createContext, useContext, useEffect, useState } from "react";
import { apiTokenValidation } from "../apis/auth";

const AUTH_CONTEXT = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState("");
  const [userDetails, setUserDetails] = useState({});

  const [jwtCheckTrigger, setJwtCheckTrigger] = useState(Math.random());

  useEffect(() => {
    setTimeout(() => {
      isLogin &&
        apiTokenValidation().then((res) => {
          console.log({ res });
        });
      setJwtCheckTrigger(Math.random());
    }, 10000);
  }, [jwtCheckTrigger]);

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
