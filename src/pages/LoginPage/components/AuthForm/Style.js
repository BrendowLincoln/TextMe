import { StyleSheet } from "react-native";
import { colorScheme } from "../../../../shared/styles/GlobalStyle";

const style = StyleSheet.create({
    container: {
        
        
        flexDirection: 'column',
        gap: 25,
        width: '100%',
        height: 220
    },
    tabContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: 40,
        marginBottom: 10
    },
    tab: {
      width: '50%'
    },
    tabLabel: {
        color: 'white',
        textAlign: 'center'
    },
    tabSelected: {
        borderBottomColor: colorScheme.accentColor,
        borderBottomWidth: 1
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: colorScheme.accentColor,
        height: 60,
        borderRadius: 6,
        color: colorScheme.accentColor,
        paddingHorizontal: 10
        
    },
    input: {
        height: 60,
        width: '90%',
        color: 'white'
    },
    visibilityButton: {
        
    },
    actionContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 15
        
    },
    actionButton: {
        display: 'flex',
        justifyContent: 'center',
        height: 55,
        borderRadius: 6
    },
    titleActionButton: {
        fontSize: 16,
        fontWeight: 500,
        textTransform: 'uppercase',
        textAlign: "center"
    },
    singInButton: {
        color: colorScheme.primaryColor,
        backgroundColor: colorScheme.accentColor        
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