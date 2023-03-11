import {
  onAuthStateChanged,
  signInWithPhoneNumber,
  signOut
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { apiTokenValidation } from "../apis/auth";
import { auth } from "../firebase.config";




// creating auth context 
const AUTH_CONTEXT = createContext();


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  // create new user 
  const createUser = (number, appVerifier) => {
    setIsLoading(true);
    return signInWithPhoneNumber(auth, number, appVerifier);
  }

  //existing user login 
  const userSignin = (phoneNumber, appVerifier) => {
    setIsLoading(true);
    return signInWithPhoneNumber(auth, phoneNumber, appVerifier);
  }

  //user logOut

  const userLogOut = () => {
    return signOut(auth);
  }


  // useEffect(() => {
  //   console.log({ isLogin });
  //   const intervalId = setInterval(async () => {
  //     // console.log({ isLogin });
  //     // isLogin === false && localStorage.removeItem('data')
  //     // console.log({ isLogin });

  //     await apiTokenValidation()
  //       .then((res) => {
  //         console.log({ auth: res });
  //       })
  //       .catch((err) => {
  //         console.log(err);

  //         setIsLogin(false);
  //         localStorage.removeItem("data");
  //       });
  //   }, 5000);

  //   return () => clearInterval(intervalId);

  // }, []);


  // components will unmount
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("inside auth state change", currentUser);
      setUser(currentUser);
      setIsLoading(false);
    })
    return () => {
      unsubscribe();
    };
  }, []);



  // auth information 
  const authInfo = {
    user,
    isLoading,
    createUser,
    userSignin,
    userLogOut
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
