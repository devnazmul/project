import React from "react";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./AuthProvider";



export default function AllContextProvider({ children }) {
    

    return (
        <AuthProvider>
            <Toaster position="top-center" />
            {children}
        </AuthProvider>
    );
}
