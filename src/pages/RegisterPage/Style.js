import { StyleSheet } from "react-native";
import { colorScheme } from "../../shared/styles/GlobalStyle";

const style = StyleSheet.create({
  topPage: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: 55,
  },
  titulo: {
    color: colorScheme.accentColor,
    fontSize: 28,
    fontWeight: 500,
    width: "55%",
  },
  avatarContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "45%",
  },
  avatar: {
    backgroundColor: colorScheme.accentColor,
  },
  avatarIcon: {
    color: "white",
  },
  form: {
    display: "flex",
    alignItems: "flex-start",
    width: "100%",
    height: "100%",
    marginTop: 20,
    gap: 10,
  },
  rowForm: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputLabelContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
    width: "100%",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 3,
    borderColor: colorScheme.accentColor,
    height: 60,
    borderRadius: 6,
    color: colorScheme.accentColor,
    paddingHorizontal: 10,
    width: "100%",
  },
  input: {
    height: 60,
    width: "100%",
    color: "white",
  },
  passwordInput: {
    width: "90%",
  },
  labelInput: {
    fontSize: 14,
    fontWeight: 500,
    color: colorScheme.accentColor,
  },
  userInputRow: {
    flexDirection: "row",
  },
  userInput: {
    width: "55%",
  },
  visibilityButton: {},
  selectContainer: {
    width: "40%",
    borderWidth: 3,
    borderColor: colorScheme.accentColor,
    height: 60,
    borderRadius: 6,
    color: colorScheme.accentColor,
  },
  select: {
    color: colorScheme.accentColor,
  },
  selectItem: {
    fontSize: 15,
  },
  actionContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
    width: "100%",
  },
  actionButton: {
    display: "flex",
    justifyContent: "center",
    height: 55,
    borderRadius: 6,
  },
  titleActionButton: {
    fontSize: 16,
    fontWeight: 500,
    textTransform: "uppercase",
    textAlign: "center",
  },
  singInButton: {
    color: colorScheme.primaryColor,
    backgroundColor: colorScheme.accentColor,
  },
  singInTitle: {
    color: colorScheme.primaryColor,
  },
  registerButton: {
    borderColor: colorScheme.secondAccentColor,
    borderWidth: 2,
  },
  registerTittle: {
    color: colorScheme.secondAccentColor,
  },
});

export default style;
