import React from "react";
import { AuthProvider } from "./AuthProvider";



export default function AllContextProvider({ children }) {
    return <AuthProvider>
        
        {children}
        </AuthProvider>;
}
