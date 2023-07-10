import { StyleSheet } from "react-native";
import { colorScheme } from "../../shared/styles/GlobalStyle";

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    marginTop: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  backButtonContainer: {
    height: 45,
    width: 45,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  logoutButton: {
    borderRadius: 10,
    fontSize: 32,
    color: colorScheme.accentColor,
  },
  pageTitleContainer: {
    width: "100%",
    marginVertical: 20,
  },
  pageTitle: {
    fontSize: 20,
    fontWeight: 700,
    color: colorScheme.accentColor,
  },
  messageList: {
    height: "100%",
    width: "100%",
  },
  noMessagesFoundContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: 10,
    marginTop: 20,
  },
  noMessagesFoundText: {
    color: "#BABABA",
    fontSize: 14,
    fontWeight: 500,
  },
  noMessagesFoundIcon: {
    color: "#BABABA",
  },
});

export default styles;
