import { getAuth, signInWithPhoneNumber } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { apiTokenValidation } from "../apis/auth";
import { auth } from "../firebase.config";




// creating auth context 
const AUTH_CONTEXT = createContext();


export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState("");
  const [userDetails, setUserDetails] = useState({});

  //existing user login 
  const userSignin = (phoneNumber, appVerifier) => {
    signInWithPhoneNumber(auth, phoneNumber, appVerifier);
  }



  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     !isLogin && localStorage.removeItem('data')

  //     apiTokenValidation()
  //       .then((res) => {
  //         console.log({ auth: res });
  //       })
  //       .catch((err) => {
  //         console.log({ err });

  //         setIsLogin(false);
  //         localStorage.removeItem("data");
  //       });
  //   }, 5000);
  //   return () => clearInterval(intervalId);
  // }, []);

  // auth information 
  const authInfo = {
    userSignin,
    isLogin,
    setIsLogin,
    token,
    setToken,
    userDetails,
    setUserDetails,
  };

  return (
    <AUTH_CONTEXT.Provider value={authInfo}>
      {children}
    </AUTH_CONTEXT.Provider>
  );
};

export const useAuth = () => {
  return useContext(AUTH_CONTEXT);
};
