import { Routes, Route } from "react-router-dom";
import PathRoutes from "./PathRoutes";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route exect path={PathRoutes.LOGIN} element={<Login />} />

      <Route exect path={PathRoutes.REGISTER} element={<Register />} />
      <Route exect path={PathRoutes.HOME} element={<Home />} />
    </Routes>
  )
}

export default RoutesComponent