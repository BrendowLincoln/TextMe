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
  },
  avatar: {},
  avatarIcon: {
    color: "white",
  },
  actionContainer: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  newChatButtonContainer: {
    height: 45,
    width: 45,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  newChatButton: {
    color: colorScheme.accentColor,
  },
  pageTitleContainer: {
    width: "100%",
    marginTop: 20,
  },
  pageTitle: {
    fontSize: 32,
    fontWeight: 500,
    color: colorScheme.accentColor,
  },
  messageListContainer: {
    width: "100%",
    maxHeight: 590,
    marginTop: 20,
  },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 20,
  },
});

export default styles;
