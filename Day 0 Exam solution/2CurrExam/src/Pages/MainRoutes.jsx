import { Route, Routes } from "react-router-dom";
import { Homepage } from "./Homepage";
import { Login } from "./Login";
import { CartPage } from "./CartPage";
import { PrivateRoute } from "../Components/PrivateRoute";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <CartPage />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </Routes>
  );
};
