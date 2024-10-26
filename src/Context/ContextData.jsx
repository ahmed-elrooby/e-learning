"use client";
import React, { createContext, useState, useEffect } from "react";

export const ContextValue = createContext();

const ContextData = ({ children }) => {
  const [token, setToken] = useState(null);
  const [refToken, setRefToken] = useState(null);
  console.log("token" + token)
  console.log("refreshToken" + refToken)
    useEffect(() => {
    const storedToken =   document.cookie = `token=${token}; path=/;`;
    const storedRefreshToken =   document.cookie = `refreshToken=${refToken}; path=/;`;
  

    storedRefreshToken
    if (storedToken) {
      setToken(storedToken);
    }
    if (storedRefreshToken) {
      setRefToken(storedRefreshToken);
    }
  }, []);

  useEffect(() => {
    if (token) {
      document.cookie = `token=${token}; path=/;`;
    } else {
      document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";


    }
  }, [token]);
  useEffect(() => {
    if (refToken) {
      document.cookie = `refreshToken=${refToken}; path=/;`;
    } else {
      document.cookie = "refreshToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    }
  }, [refToken]);



  return (
    <ContextValue.Provider value={{ token, setToken,refToken,setRefToken }}>
      {children}
    </ContextValue.Provider>
  );
};

export default ContextData;
