import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "../components/PrivateRoutes";
import Todos from "../components/Todos";
import Homepage from "./Homepage";
import Login from "./Login";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/todo"
        element={
          <PrivateRoutes>
            <Todos />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
};

export default MainRoutes;
