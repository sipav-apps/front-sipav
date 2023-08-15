import api from "./Api";
import PathRoutes from "../routes/PathRoutes";

class Auth {
  async signIn(email, password, navigate) {
    try {
      const { data } = await api.post("login/", {
        email,
        password,
      });

      const { token } = data;

      localStorage.setItem("@sipavAccessToken", token);
      api.defaults.headers.authorization = `Token ${token}`;

      navigate(PathRoutes.HOME, {
        replace: true,
      });
    } catch (error) {
      console.log('entrou')
      throw error;
    }
  }

  async register(
    data,
    navigate, 
  ) {
    try {
      await api.post("user/", {
        ...data,
        phoneNumber: '',
        telegram: '',
        isResponsible: false,
      });

      const { token } = data;

      
      localStorage.setItem("@sipavAccessToken", token);
      api.defaults.headers.authorization = `Token ${token}`;
      
      navigate(PathRoutes.HOME, {
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

const authInstance = new Auth(); // Criar uma instância da classe Auth

export default authInstance;
