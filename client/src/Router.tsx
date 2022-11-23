import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./context/Auth";
import Layout from "./Layout";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";

function Router() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Auth><Home /></Auth>} />
          </Route>
          <Route path="/create" element={<Layout />}>
            <Route index element={<Auth><Create /></Auth>} />
          </Route>
          <Route path="/edit/:id" element={<Layout />}>
            <Route index element={<Auth><Edit /></Auth>} />
          </Route>

          {/* 
            Non protected routes
         */}

          <Route path="/login" element={<Layout />}>
            <Route index element={<Login />} />
          </Route>
          <Route path="/register" element={<Layout />}>
            <Route index element={<Register />} />
          </Route>
          <Route path="*" element={<Layout />}>
            <Route index element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    
  );
}

export default Router;
