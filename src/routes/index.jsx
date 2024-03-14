import { Routes, Route } from "react-router-dom";
import PathRoutes from "./PathRoutes";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import { Flex } from "@chakra-ui/react";

const RoutesComponent = () => {
  return (
    <Flex
      backgroundColor="primary.500"
      alignItems="center"
      justifyContent="center"
      h={"100vh"}
      w={"100vw"}
    >
      <Routes>
          <Route exect path={PathRoutes.REGISTER} element={<Register />} />
          <Route exect path={PathRoutes.LOGIN} element={<Login />} />
          <Route exect path={PathRoutes.HOME} element={<Home />} />
          <Route exect path={PathRoutes.PROFILE} element={<Profile />} />
      </Routes>
    </Flex>
  )
}

export default RoutesComponent