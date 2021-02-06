import React from "react";
import {
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Text, Block, Button, NavBar, Icon } from "galio-framework";

const { width, height } = Dimensions.get("screen");
import theme from "../theme";

const Login = ({ navigation, route }) => {
  console.log(navigation);
  React.useLayoutEffect(() => {
    navigation.setOptions({});
  }, [navigation, route]);
  return (
    <Block safe flex>
      <NavBar
        title="Login"
        titleStyle={styles.titleStyle}
        style={styles.navigation}
        right={
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="md-checkmark-circle" size={32} color="green" />
          </TouchableOpacity>
        }
        // style={
        //   Platform.OS === "android" ? { marginTop: theme.SIZES.BASE } : null
        // }
      />
    </Block>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
  },
  titleStyle: {
    fontSize: theme.SIZES.BASE * 1.2,
    color: "#000",
    alignItems: "flex-start",
    fontFamily: "Roboto-N",
  },
  navigation: {
    marginTop: 30,
    backgroundColor: "#fff",
    borderBottomWidth: 2,
    borderBottomColor: "#f1f1f1",
  },
  CategoryBlock: {},
  container: {
    padding: 0,
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
  button: {
    marginBottom: 20,
  },
  cards: {
    flex: 1,
    backgroundColor: theme.COLORS.WHITE,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  card: {
    borderWidth: 0,
    backgroundColor: theme.COLORS.WHITE,
    width: width - theme.SIZES.BASE * 2,
    marginVertical: theme.SIZES.BASE * 0.875,
  },
  cardFooter: {
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: theme.SIZES.BASE / 2,
    paddingHorizontal: theme.SIZES.BASE,
    paddingVertical: theme.SIZES.BASE / 2,
    backgroundColor: theme.COLORS.TRANSPARENT,
  },
  cardNoRadius: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  cardAvatar: {
    width: theme.SIZES.BASE * 2.5,
    height: theme.SIZES.BASE * 2.5,
    borderRadius: theme.SIZES.BASE * 1.25,
  },
  cardTitle: {
    justifyContent: "center",
    paddingLeft: theme.SIZES.BASE / 2,
  },
  cardImageContainer: {
    borderWidth: 0,
    overflow: "hidden",
  },
  cardImageRadius: {
    borderRadius: theme.SIZES.BASE * 0.1875,
  },
  cardImage: {
    width: "auto",
    height: theme.SIZES.BASE * 12.5,
  },
  cardRounded: {
    borderRadius: theme.SIZES.BASE * 0.5,
  },
  footer: {
    marginTop: 20,
    marginBottom: 80,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  loadMoreBtn: {
    padding: 10,
    backgroundColor: "#800000",
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
  },
  cardFull: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
  },
  cardGradient: {
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    position: "absolute",
    overflow: "hidden",
    borderBottomRightRadius: theme.SIZES.BASE * 0.5,
    borderBottomLeftRadius: theme.SIZES.BASE * 0.5,
  },
});

export default Login;
