import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const isAuth = useSelector((store) => store.authReducer.isAuth);
  return !isAuth ? <Navigate to={"/login"} /> : children;
};
