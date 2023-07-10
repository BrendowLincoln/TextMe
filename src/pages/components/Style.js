import { StyleSheet } from "react-native";
import { colorScheme } from "../../shared/styles/GlobalStyle";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        width: "100%",
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    userMessageRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        width: "100%"
    },
    contactMessageRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        width: "100%"
    },
    messageContainer: {
        display: "flex",
        flexDirection: "column",
        gap: 5
    },
    dateContainer: {
        display: "flex",
        flexDirection: "row",
    },
    message: {
      color: "white",
      fontSize: 14,
      fontWeight: 500,
      paddingVertical: 5,
      paddingHorizontal: 7,
      borderRadius: 5
    },
    hourMessage: {
        color: colorScheme.defaultGray,
        fontSize: 10
    },
    userMessageBackground: {
        backgroundColor: colorScheme.fourthColor
    },
    contactMessageBackground: {
        backgroundColor: colorScheme.accentColor,
    }
 
});

export default styles;
