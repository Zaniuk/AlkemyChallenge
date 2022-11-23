import React, { createContext, useEffect, useState } from "react";
import httpService from "../services/httpService";
export const UserContext = createContext(null);
interface RegisterValues  {
  userName: String,
  email: String,
  password: String,
}
interface LoginValues {
  email: String,
  password: String,
}
const UserProvider = ({ children } : any) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    getData();
  }, []);

  const logout = () => {
    sessionStorage.clear();
    setUser(null);
  };
  const register = async (values: RegisterValues, actions : any) => {
    try {
      const req = await httpService.post("/auth/register", {
        userName: values.userName,
        email: values.email,
        password: values.password,
      });
      setUser(req.data.user);
    } catch (e : any) {
      if (e.response.data === "User already exist") {
        actions.setErrors({ email: "This email is already registered" });
      }
      console.error(e.response.data, "error");
    }
  };
  const login = async (values : LoginValues) => {
    try {
      const req = await httpService.post("/users/login", values);
      sessionStorage.setItem("token", req.data.token);
      setUser(req.data.user);
      if(req.data.token){

      }
    } catch (e : any) {
      console.log(e.response.data);
    }
  };
  const getData = async () => {
    try {
      const { data } = await httpService.get("/auth/me");
      setUser(data.user);
      // console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <UserContext.Provider
    // @ts-ignore
      value={{
        user,
        setUser,
        logout,
        login,
        register,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;