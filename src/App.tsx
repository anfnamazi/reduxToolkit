import { Route, Routes } from "react-router-dom";
import Home from "./pages/public/Home";
import Primary from "./pages/private/Primary";
import Secondary from "./pages/private/Secondary";
import ProtectedRoute from "./common/ProtectedRoute";
import Login from "./pages/public/Login";
import { useAppDispatch } from "./app/hook";
import { set as setToken } from "./features/token";

function App() {
  const dispatch = useAppDispatch();

  const token = localStorage.getItem("token");
  dispatch(setToken(token));

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path="primary" element={<Primary />} />
        <Route path="secondary" element={<Secondary />} />
      </Route>
    </Routes>
  );
}

export default App;
