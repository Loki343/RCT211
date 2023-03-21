import React from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../components/PrivateRoute";
import { Admin } from "./Admin";
import EditProduct from "./EditProduct";
import {Homepage} from "./Homepage";
import { Login } from "./Login";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/edit/:id"
        element={
          <PrivateRoute>
            <EditProduct />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <Admin />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
};

export default MainRoutes;
