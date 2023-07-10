import { StatusBar, StyleSheet } from "react-native";
import { colorScheme } from "../../shared/styles/GlobalStyle";

const styles = StyleSheet.create({
  page: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: colorScheme.primaryColor,
    paddingTop: StatusBar.currentHeight
  },
  headerPage: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",  
    height: 68,
    backgroundColor: colorScheme.fourthColor,
    paddingLeft: 10
  },
  avatar: {
    backgroundColor: colorScheme.accentColor
  },
  contactNameContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    paddingLeft: 15
  },
  name: {
    color: colorScheme.thirdColor,
    fontSize: 18, 
    fontWeight: 500
  },
  messagesContainer: {
    flex: 1,
    width: "100%",
  },
  messageInputContainer: {
    display: "flex",
    justifyContent:"center",
    paddingHorizontal: 10,
    width: "100%",
    height: 80,
    backgroundColor: colorScheme.fourthColor
  },
  textMessageInput: {
    borderRadius: 30,
    backgroundColor: colorScheme.primaryColor,
    color: colorScheme.thirdColor
  }
});

export default styles;
