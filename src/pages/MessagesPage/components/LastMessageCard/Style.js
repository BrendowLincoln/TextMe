import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 90,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    borderBottomColor: "rgba(166, 177, 233, 0.40)",
    borderBottomWidth: 1,
    borderStyle: "solid",
    paddingVertical: 15,
  },

  infoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "baseline",
    gap: 10,
    height: "100%",
  },
  name: {
    color: "white",
    fontSize: 15,
    fontWeight: 700,
  },
  message: {
    color: "#BABABA",
    fontSize: 12,
    fontWeight: 500,
  },
  hourContainer: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    height: "100%",
  },
  hour: {
    color: "#BABABA",
    fontSize: 12,
    fontWeight: 500,
  },
});

export default styles;
