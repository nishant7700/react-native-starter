import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  REGISTER_SUCCESS,
  //REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../actions/types";

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@token");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

const initialState = {
  //   token: localStorage.getItem("token"),
  token: getData(),
  isAuthenticated: null,
  loading: true,
  error: null,
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        ...payload,
        token: payload.jwt,
        isAuthenticated: true,
        loading: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...payload,
        token: payload.jwt,
        isAuthenticated: true,
        loading: false,
      };
    case AUTH_ERROR:
    case LOGOUT:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    default:
      return state;
  }
}
