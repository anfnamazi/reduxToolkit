import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { set as setToken } from "../../features/token";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const token = useAppSelector((state) => state.token);

  if (token) {
    toast.info("token valid redirect to primary")
    return <Navigate to="/primary" />;
  }

  const handleLogin = () => {
    dispatch(setToken("token"));
    localStorage.setItem("token", "token");
    navigate("/primary");
    toast.success("token valid redirect to primary!");
  };

  return (
    <div>
      Login
      <div>
        <button onClick={handleLogin}>login</button>
      </div>
    </div>
  );
};

export default Login;
