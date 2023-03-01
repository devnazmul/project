import React, { useEffect } from "react";
import { useAuth } from "../../context/AuthProvider";

export default function FormDiv({ children, custom_class }) {
  const {isLogin} = useAuth();

  useEffect(()=>{
    console.log(isLogin);
  },[isLogin])
  return (
    <form
      className={`heroFormGlassDiv px-5 py-2 md:px-10 md:py-3 ${custom_class}`}
    >
      {children}
    </form>
  );
}
