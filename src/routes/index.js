import { Routes, Route } from "react-router-dom";
import PathRoutes from "./PathRoutes";
import Login from "../pages/Login";
import Register from "../pages/Register";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route exect path={PathRoutes.LOGIN} element={<Login />} />

      <Route exect path={PathRoutes.REGISTER} element={<Register />} />
    </Routes>
  )
}

export default RoutesComponent