import { FC } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { clear as clearToken } from "../features/token";
import { toast } from "react-toastify";

interface ProtectedRouteProps {}

const ProtectedRoute: FC<ProtectedRouteProps> = () => {
  const token = useAppSelector((state) => state.token);
  const dispatch = useAppDispatch();

  if (!token) {
    toast.error("token invalid redirect to login!");
    return <Navigate to="/login" />;
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(clearToken());
  };

  return (
    <div>
      protect
      <Outlet />
      <button onClick={handleLogout}>logout</button>
    </div>
  );
};

export default ProtectedRoute;
