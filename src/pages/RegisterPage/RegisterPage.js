import { SafeAreaView, View, Text, TextInput } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'
import { globalStyle } from "../../shared/styles/GlobalStyle";
import { useState } from "react";
import { colorScheme } from "../../shared/styles/GlobalStyle";

import User from "../../shared/models/User";
import style from "./Style";

const RegisterPage = () => {

    const [user, setUser] = useState(User());
    const [isEmail, setIsEmail] = useState(true);


    return (
        <SafeAreaView style={globalStyle.page}>
            <View style={style.topPage}>
                <Text style={style.titulo}>
                    Cadastre-se para começar a interagir!
                </Text>
                <View style={style.avatarContainer}>
                    <View style={style.avatar}>
                        <MaterialIcons
                            style={style.avatarIcon}
                            name="photo-camera" 
                            size={50} 
                            backgroundColor='transparent'
                        />
                    </View>
                </View>
            </View>
            <View style={style.form}>
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
            </View>
        </SafeAreaView>
    );
}

export default RegisterPage;