import { Routes, Route } from "react-router-dom";
import PathRoutes from "./PathRoutes";
import Login from "../pages/Login";
import List from "../pages/user/create";
import Create from "../pages/user/create";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route exect path={PathRoutes.LOGIN} element={<Login />} />
    </Routes>
  )
}

export default RoutesComponent