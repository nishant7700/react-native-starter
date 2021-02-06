import AsyncStorage from "@react-native-async-storage/async-storage";

import api from "./api";

const setAuthToken = async (token) => {
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
    try {
      await AsyncStorage.setItem("@token", token);
    } catch (e) {
      // saving error
      console.log(e);
    }

    // localStorage.setItem("token", token);
  } else {
    delete api.defaults.headers.Authorization;

    try {
      await AsyncStorage.removeItem("@token");
    } catch (e) {
      // remove error
    }
    // localStorage.removeItem("token");
  }
};

export default setAuthToken;
