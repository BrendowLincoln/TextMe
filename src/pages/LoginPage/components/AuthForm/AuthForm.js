import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import style from "./Style";
import { colorScheme } from "../../../../shared/styles/GlobalStyle";
import { useState } from "react";
import User from "../../../../shared/models/User";
import useAuth from "../../../../hooks/useAuth";
import {
  sanitizeTelephone,
  telephoneFormatter,
} from "../../../../shared/utils/FormaterHelper";

const AuthForm = (props) => {
  const {} = props;
  const navigation = useNavigation();

  const [user, setUser] = useState(User());
  const [hidePassword, setHidePassword] = useState(true);
  const [telephoneDisplay, setTelephoneDisplay] = useState("");

  const { login } = useAuth();

  const handleLogin = () => {
    console.log(`Telefone: ${user.telefone} - Senha: ${user.senha}`);
    login(user.telefone, user.senha);
  };

  const onChangeTelephone = (text) => {
    let onlyNumber = sanitizeTelephone(text);
    setTelephoneDisplay(telephoneFormatter(onlyNumber));

    setUser({
      ...user,
      telefone: onlyNumber,
    });
  };

  const onChangePassword = (text) => {
    setUser({
      ...user,
      senha: text,
    });
  };

  return (
    <View style={style.container}>
      <View style={style.inputContainer}>
        <TextInput
          style={style.input}
          value={telephoneDisplay}
          cursorColor={colorScheme.accentColor}
          placeholder="(99) 99999-9999"
          placeholderTextColor={colorScheme.infoTextColor}
          keyboardType="phone-pad"
          maxLength={15}
          onChangeText={(telephone) => onChangeTelephone(telephone)}
        />
      </View>
      <View style={[style.inputContainer]}>
        <TextInput
          style={style.input}
          secureTextEntry={hidePassword}
          value={user.senha}
          placeholderTextColor={colorScheme.infoTextColor}
          placeholder="Sua senha"
          onChangeText={(password) => onChangePassword(password)}
        />
        {hidePassword ? (
          <MaterialIcons
            style={style.visibilityButton}
            name="visibility"
            size={30}
            color={colorScheme.accentColor}
            backgroundColor="transparent"
            onPress={() => setHidePassword(!hidePassword)}
          />
        ) : (
          <MaterialIcons
            style={style.visibilityButton}
            name="visibility-off"
            size={30}
            color={colorScheme.accentColor}
            backgroundColor="transparent"
            onPress={() => setHidePassword(!hidePassword)}
          />
        )}
      </View>
      <View style={style.actionContainer}>
        <TouchableOpacity
          onPress={() => handleLogin()}
          style={[style.actionButton, style.singInButton]}
        >
          <Text style={[style.titleActionButton]}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
          style={[style.actionButton, style.registerButton]}
        >
          <Text style={[style.titleActionButton, style.registerTittle]}>
            Registre-se
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AuthForm;
