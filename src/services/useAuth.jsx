import { useState, useEffect, useContext } from 'react';
import api from './Api';
import PathRoutes from '../routes/PathRoutes';
import UserContext from '../context/userContext';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { user, setUser } = useContext(UserContext)

  useEffect(() => {
    // Verificar se o usuário está autenticado ao carregar o componente
    setIsAuthenticated(localStorage.getItem('@sipavAccessToken') !== null);
  }, []);

  const signIn = async (email, password, navigate) => {
    try {
      const { data } = await api.post('login/', {
        email,
        password,
      });

      const { token } = data;

      localStorage.setItem('@sipavAccessToken', token);
      localStorage.setItem('@sipavUser', data.userExists.name);

      api.defaults.headers.authorization = `Token ${token}`;

      const userLogged = {
        email: data.userExists.email,
        name: data.userExists.name,
        cpf: data.userExists.cpf,
        birthdate: data.userExists.birthdate,
        telegram: data.userExists.telegram,
        phoneNumber: data.userExists.phoneNumber,
      }

      console.log(userLogged)
      setUser(userLogged)

      navigate(PathRoutes.HOME, {
        replace: true,
      });

      setIsAuthenticated(true);
    } catch (error) {
      throw error;
    }
  };

  const register = async (data, navigate) => {
    try {
      await api.post('user/', {
        ...data,
        isResponsible: true,
      });

      const { token } = data;

      localStorage.setItem('@sipavAccessToken', token);
      localStorage.setItem('@sipavUser', data.name);
      api.defaults.headers.authorization = `Token ${token}`;

      navigate(PathRoutes.HOME, {
        replace: true,
      });

      setIsAuthenticated(true);
    } catch (error) {
      throw error;
    }
  };

  const signOut = () => {
    api.defaults.headers.authorization = '';
    localStorage.removeItem('@sipavAccessToken');
    localStorage.removeItem('@sipavUser');
    setIsAuthenticated(false);
    window.location.href = PathRoutes.LOGIN;
  };

  return {
    isAuthenticated,
    signIn,
    register,
    signOut,
  };
};

export default useAuth;