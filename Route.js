import React from "react";
import { connect } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Text, Block, Button, NavBar, Icon } from "galio-framework";
import Login from "./src/Screens/Login";
import Register from "./src/Screens/Register";
import Home from "./src/Screens/Home";
import Common from "./src/Screens/Common";

const commonScreens = {
  Help: Common,
};

const authScreens = {
  SignIn: Login,
  SignUp: Register,
};

const userScreens = {
  Home: Home,
};

const Stack = createStackNavigator();

const Route = ({ auth: { loading, isAuthenticated } }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {Object.entries({
          // Use the screens normally
          ...(isAuthenticated ? userScreens : authScreens),
          ...commonScreens,
          // Use some screens conditionally based on some condition
        }).map(([name, component]) => (
          <Stack.Screen
            key={name}
            name={name}
            component={component}
            options={{ headerShown: false }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => ({ auth: state.auth });

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Route);
