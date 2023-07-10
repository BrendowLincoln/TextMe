import { StyleSheet } from "react-native";
import { colorScheme } from "../../../shared/styles/GlobalStyle";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 15,
    paddingVertical: 10,
    width: "100%",
    minWidth: 200,
    minHeight: 60,
  },
  name: {
    fontSize: 16,
    fontWeight: 700,
    color: colorScheme.thirdColor,
    width: "70%",
  },
});

export default styles;
