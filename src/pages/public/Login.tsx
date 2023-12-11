import { FC } from "react";
import { useAppDispatch } from "../../app/hook";
import { set as setToken } from "../../features/token";
import { redirect, useNavigate } from "react-router-dom";

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(setToken("token"));
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
