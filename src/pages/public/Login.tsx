import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { set as setToken } from "../../features/token";
import { Navigate, redirect, useNavigate } from "react-router-dom";

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const token = useAppSelector(state => state.token)

  if(token) {
    return <Navigate to="/primary" />
  }

  const handleLogin = () => {
    dispatch(setToken("token"));
    localStorage.setItem("token", "token");
    navigate("/primary");
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
