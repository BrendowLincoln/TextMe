import { View, Text, SafeAreaView, Image } from "react-native";
import style from "./Style";
import { globalStyle } from "../../shared/styles/GlobalStyle";
import AuthForm from "./components/AuthForm/AuthForm";

const LoginPage = () => {
    return (
        <SafeAreaView
            style={globalStyle.page}
        >
            <Image 
                source={require('../../../assets/app-logo.png')}
                style={style.logo}
            />
            
            <AuthForm />
        </SafeAreaView>
        
    );
}

export default LoginPage;
