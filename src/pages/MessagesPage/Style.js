import { StyleSheet } from "react-native";
import { colorScheme, globalStyle } from "../../shared/styles/GlobalStyle";

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    marginTop: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  avatarContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  presentationContainer: {
    maxWidth: 200,
  },
  presentationText: {
    color: "#BABABA",
    fontSize: 18,
  },
  presentationTextName: {
    color: colorScheme.accentColor,
    fontWeight: 500,
    fontSize: 22,
  },
  actionContainer: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoutButtonContainer: {
    height: 45,
    width: 45,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  logoutButton: {
    borderRadius: 10,
    fontSize: 28,
    color: colorScheme.accentColor,
  },
  pageTitleContainer: {
    width: "100%",
    marginTop: 20,
  },
  pageTitle: {
    fontSize: 20,
    fontWeight: 700,
    color: colorScheme.accentColor,
  },
  listContainer: {
    width: "50%",
    maxHeight: 590,
    marginTop: 20,
    textAlign: "center",
    borderColor: "green",
    borderWidth: 1,
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
  fab: {
    position: "absolute",
    right: 20,
    bottom: 20,
  },
});

export default styles;
