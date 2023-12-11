import { FC } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAppSelector } from "../app/hook";

interface ProtectedRouteProps {}

const ProtectedRoute: FC<ProtectedRouteProps> = () => {
  const token = useAppSelector((state) => state.token);

  if (!token) {
    console.log("redirect login");
    return <Navigate to="/login" />;
  }

  return (
    <div>
      protect
      <Outlet />
    </div>
  );
};

export default ProtectedRoute;
