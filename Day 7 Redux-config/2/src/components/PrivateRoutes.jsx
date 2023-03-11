import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const auth = useSelector((store) => store.auth.auth);
  console.log(auth);
  //   return !auth ? <Navigate to={"/login"} /> : children;
  if (!auth) {
    return <Navigate to="/login" />;
  }
  return children;
};
export default PrivateRoutes;
