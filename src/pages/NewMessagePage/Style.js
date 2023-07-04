import { StyleSheet } from "react-native";
import { colorScheme } from "../../shared/styles/GlobalStyle";

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: 60,
    borderColor: "red",
    borderWidth: 1,
    margin: 50,
  },
  avatarContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "45%",
  },
  avatar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    height: 120,
    backgroundColor: colorScheme.accentColor,
    borderRadius: 100,
  },
  avatarIcon: {
    color: "white",
  },
});

export default styles;
