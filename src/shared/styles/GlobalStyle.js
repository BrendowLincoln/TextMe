import { StyleSheet } from "react-native";

const colorScheme = {
  primaryColor: "#262626",
  accentColor: "#A6B1E9",
  secondAccentColor: "rgba(174, 174, 174, 1)",
  thirdColor: "#FFFFFF",
  infoTextColor: "rgba(166, 177, 233, 0.4)",
  fourthColor: "#333540",
  defaultGray: "#AEAEAE"
};

const globalStyle = StyleSheet.create({
  page: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colorScheme.primaryColor,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
    overflow: "hidden",
  },
});

export { colorScheme, globalStyle };
