import { StyleSheet } from "react-native";
import { colorScheme } from "../../shared/styles/GlobalStyle";

const style = StyleSheet.create({
    topPage: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginTop: 55
    }, 
    titulo: {
        color: colorScheme.accentColor,
        fontSize: 28,
        fontWeight: 500,
        width: '55%'
    },
    avatarContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '45%'

    },
    avatar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        height: 120,
        backgroundColor: colorScheme.accentColor,
        borderRadius: 100
    }, 
    avatarIcon: {
        color: 'white'
    },
    form: {
        display: 'flex',
        alignItems: 'flex-start', 
        width: '100%',
        marginTop: 50,
        borderColor: 'red',
        borderWidth: 1
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
        width: '65%',
        color: 'white'
    },
});

export default style;