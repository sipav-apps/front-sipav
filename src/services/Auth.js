import api from "./Api";
import PathRoutes from "../routes/PathRoutes";

class Auth {
  async signIn(email, password, navigate) {
    try {
      const { data } = await api.post("login/", {
        username: email,
        password,
      });

      const { token } = data;

      localStorage.setItem("@sipavAccessToken", token);
      api.defaults.headers.authorization = `Token ${token}`;

      navigate(PathRoutes.FORECASTS_PAGE, {
        replace: true,
      });
    } catch (error) {
      throw error;
    }
  }

  async signOut() {
    api.defaults.headers.authorization = "";
    localStorage.removeItem("@sipavAccessToken");
    localStorage.removeItem("@sipavRefreshToken");
    window.location.href = PathRoutes.LOGIN;
  }

  isAuth() {
    return localStorage.getItem("@sipavAccessToken") !== null;
  }
}

export default new Auth();
