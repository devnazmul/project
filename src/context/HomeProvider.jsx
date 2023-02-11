import React, { createContext, useContext, useEffect, useState } from "react";

const HOME_CONTEXT = createContext();
export default function HomeProvider({ children }) {
    const [heroData, setheroData] = useState({});
    
  useEffect(() => {}, []);
  const value = {};
  return (
    <HOME_CONTEXT.Provider value={value}>{children}</HOME_CONTEXT.Provider>
  );
}

export const useHome = () =>{
    return useContext(HOME_CONTEXT)
}