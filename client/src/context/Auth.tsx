import React, { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { Navigate } from "react-router-dom";
const Auth = ({ children } : any) => {
  const { user } : any = useContext(UserContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default Auth;