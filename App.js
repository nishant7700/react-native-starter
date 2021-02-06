import "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { StyleSheet, Text, View, Image } from "react-native";
import * as Font from "expo-font";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import Route from "./Route";
let customFonts = {
  "Roboto-R": require("./assets/Roboto-Light.ttf"),
  "Roboto-B": require("./assets/Roboto-Bold.ttf"),
  "Roboto-N": require("./assets/Roboto-Regular.ttf"),
};
export default function App() {
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@token");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };
  const [fontLoaded, setFontLoaded] = useState(false);
  const _loadFontsAsync = async () => {
    try {
      await Font.loadAsync(customFonts);
      setFontLoaded(true);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    (async () => {
      _loadFontsAsync();
      const token = await getData();
      setAuthToken(token);
      store.dispatch(loadUser());
    })();
  }, []);

  if (fontLoaded) {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <StatusBar hidden={false} backgroundColor="#fff" animated />
          <Route />
        </View>
      </Provider>
    );
  } else {
    return (
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Image
          style={{
            alignSelf: "center",
            width: 180,
            height: 120,
          }}
          source={require("./assets/logo.png")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
