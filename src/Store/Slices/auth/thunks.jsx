import { setUser, startLoading } from "./AuthSlice";
import axios from "axios";

export const register = (name, email, password) => {
  return async (dispatch, getState) => {
    dispatch(startLoading());

    const response = await axios.post(`https://backend-4ffu.onrender.com/api/auth/new`, {
      name,
      email,
      password,
    });
    console.log(response.data.usuario);
    dispatch(setUser(response.data.usuario));
  };
};
export const loginIn = (email, password) => {
  return async (dispatch, getState) => {
    dispatch(startLoading());

    const response = await axios.post(`https://backend-4ffu.onrender.com/api/auth/`, {
      email,
      password,
    });
    console.log(response.data.usuario);
    dispatch(setUser(response.data.usuario));
  };
};

export const logout = () => {
  return async (dispatch, getState) => {
    dispatch(setUser(null));
  };
};
