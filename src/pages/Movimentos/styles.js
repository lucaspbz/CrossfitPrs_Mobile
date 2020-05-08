import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    alignItems: "center",
    backgroundColor: "#A70AB5",
    height: 90,
  },
  titulo: {
    color: "#ffffff",
    fontSize: 18,
    fontFamily: "Roboto",
    lineHeight: 21,
    fontWeight: "bold",
    flexWrap: "wrap",
  },
  containerItems: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#A70AB5",
    height: 80,
    borderRadius: 15,
  },
  lista: { padding: 10 },
  textItems: {
    color: "#ffffff",
    padding: 30,
    fontSize: 18,
    fontWeight: "bold",
  },
});
