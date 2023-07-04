import { View, Text, SafeAreaView, Image } from "react-native";
import style from "./Style";
import { colorScheme, globalStyle } from "../../shared/styles/GlobalStyle";
import AuthForm from "./components/AuthForm/AuthForm";
import { ActivityIndicator } from "react-native-paper";
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";

const LoginPage = () => {
  const { loading } = useAuth();

  useEffect(() => {}, [loading]);

  return loading ? (
    <SafeAreaView style={[globalStyle.page, style.customAligment]}>
      <ActivityIndicator
        animating={true}
        color={colorScheme.accentColor}
        size={120}
      />
    </SafeAreaView>
  ) : (
    <SafeAreaView style={globalStyle.page}>
      <Image
        source={require("../../../assets/app-logo.png")}
        style={style.logo}
      />

      <AuthForm />
    </SafeAreaView>
  );
};

/// ISso aqui ta feito??
// Essa tela eu digo manda print dela

export default LoginPage;
