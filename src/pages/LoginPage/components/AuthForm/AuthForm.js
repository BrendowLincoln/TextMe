import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

import style from "./Style";
import { colorScheme } from "../../../../shared/styles/GlobalStyle";
import { useState } from "react";
import User from "../../../../shared/models/User";

const AuthForm = (props) => {
    const {} = props;
    const navigation = useNavigation();

    const [isEmail, setIsEmail] = useState(true);
    const [user, setUser] = useState(User());
    const [hidePassword, setHidePassword] = useState(true);

    const onChangeEmail = (text) => {
        setUser({
            ...user,
            email: text
        })
    } 

    const onChangeTelephone = (text) => {
        setUser({
            ...user,
            telefone: text
        })
    } 

    const onChangePassword = (text) => {
        setUser({
            ...user,
            senha: text
        })
    } 

    return (
        <View style={style.container}>
            <View style={style.tabContainer}>
                <TouchableOpacity 
                    onPress={() => setIsEmail(true)}
                    style={[
                        style.tab,
                        isEmail && style.tabSelected
                    ]}
                >
                    <Text style={style.tabLabel}>Email</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => setIsEmail(false)}
                    style={[
                        style.tab,
                        !isEmail && style.tabSelected
                    ]}
                 >
                    <Text style={style.tabLabel}>Telefone</Text>
                </TouchableOpacity>
            </View>
            <View style={style.inputContainer}>
                {isEmail ?
                    <TextInput
                        style={style.input}
                        value={user.email}
                        cursorColor={colorScheme.accentColor}
                        placeholder="you@email.com"
                        placeholderTextColor={colorScheme.infoTextColor}
                        keyboardType="email-address"
                        onChange={(email) => onChangeEmail(email)}
                    /> 
                    :
                    <TextInput
                        style={style.input}
                        value={user.telefone}
                        cursorColor={colorScheme.accentColor}
                        placeholder="(99) 99999-9999"
                        placeholderTextColor={colorScheme.infoTextColor}
                        keyboardType="phone-pad"
                        onChange={(telephone) => onChangeTelephone(telephone)}
                    />
                }
            </View>
            <View
                style={[
                    style.inputContainer
                ]} 
            >
                <TextInput
                    style={style.input}
                    secureTextEntry={hidePassword}
                    value={user.senha}
                    placeholderTextColor={colorScheme.infoTextColor}
                    placeholder="Sua senha"
                    onChange={(password) => onChangePassword(password)}
                />
                {hidePassword ?
                    <MaterialIcons
                        style={style.visibilityButton}
                        name="visibility" 
                        size={30} 
                        color={colorScheme.accentColor}
                        backgroundColor='transparent'
                        onPress={() => setHidePassword(!hidePassword)}
                    />
                    :
                    <MaterialIcons
                        style={style.visibilityButton}
                        name="visibility-off"
                        size={30} 
                        color={colorScheme.accentColor}
                        backgroundColor='transparent'
                        onPress={() => setHidePassword(!hidePassword)}
                    />
                }
            </View>
            <View style={style.actionContainer}>
                <TouchableOpacity
                    onPress={() => console.log("User", user.email)}
                    style={[
                        style.actionButton,
                        style.singInButton
                    ]}  
                >
                    <Text 
                        style={[
                            style.titleActionButton
                        ]}
                    >
                        Entrar
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Register")}
                    style={[
                        style.actionButton,
                        style.registerButton
                    ]}  
                >
                    <Text 
                        style={[
                            style.titleActionButton,
                            style.registerTittle
                        ]}
                    >
                        Registre-se
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default AuthForm;