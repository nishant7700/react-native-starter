import api from "../utils/api";
import { setAlert } from "./alert";
import {
  REGISTER_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./types";

// Load User
export const loadUser = () => async (dispatch) => {
  try {
    const res = await api.get("/users/me");

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register User
export const register = (formData) => async (dispatch) => {
  try {
    const res = await api.post("/auth/local/register", formData);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    if (err.response && err.response.data) {
      const errors = err.response.data.message;
      if (errors && errors.length > 0) {
        const mainError = errors[0];
        if (mainError.messages) {
          mainError.messages.forEach((error) =>
            dispatch(setAlert(error.message, "danger"))
          );
        }
      }
    }
  }
};

// Login User
export const login = (formData) => async (dispatch) => {
  try {
    const res = await api.post("/auth/local", formData);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    if (err.response && err.response.data) {
      const errors = err.response.data.message;
      if (errors && errors.length > 0) {
        const mainError = errors[0];
        if (mainError.messages) {
          mainError.messages.forEach((error) =>
            dispatch(setAlert(error.message, "danger"))
          );
        }
      }
    }
  }
};

// Logout
export const logout = () => ({ type: LOGOUT });
