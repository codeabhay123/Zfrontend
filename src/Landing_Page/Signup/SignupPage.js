import { Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Signup />} />        {/* /signup */}
      <Route path="login" element={<Login />} />    {/* /signup/login */}
    </Routes>
  );
};

export default AuthRoutes;
