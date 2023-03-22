import { Route, Routes } from "react-router-dom";
import { Homepage } from "./Homepage";
import { StudentDetail } from "./StudentDetail";
import { PrivateRoute } from "./../Components/PrivateRoute";
import { Login } from './Login';

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/students/:id"
        element={
          <PrivateRoute>
            <StudentDetail />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
