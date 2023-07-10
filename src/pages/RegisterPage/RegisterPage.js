import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { globalStyle } from "../../shared/styles/GlobalStyle";
import { useEffect, useState } from "react";
import { colorScheme } from "../../shared/styles/GlobalStyle";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

import User from "../../shared/models/User";
import style from "./Style";
import useAuth from "../../hooks/useAuth";
import {
  sanitizeTelephone,
  telephoneFormatter,
} from "../../shared/utils/FormaterHelper";
import { ErrorMessage } from "../../shared/models/ErrorMessage";
import { Avatar } from "react-native-paper";

const RegisterPage = () => {
  const navigation = useNavigation();

  //States
  const [user, setUser] = useState(User());
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [telephoneDisplay, setTelephoneDisplay] = useState("");

  const { signup, signupError } = useAuth();

  const [image, setImage] = useState();
  const [canSubmit, setCanSubmit] = useState(false);

  useEffect(() => {}, []);

  const handleSignUp = () => {
    let invalidedFields = validateUser();

    if (!canSubmit) {
      Alert.alert("Registro inválido!", "Erros \n\n" + invalidedFields);
      return;
    }

    signup(user).then(() => {
      Alert.alert("Login efetuado com sucesso!");
    });
  };

  const validateUser = () => {
    let invalidFields = "";

    if (!user.telefone) {
      let text = "* " + ErrorMessage.TELEPHONE_FIELD_INVALID + "\n";
      invalidFields += text;
      setCanSubmit(false);
    }

    if (!user.nome) {
      let text = "* " + ErrorMessage.NAME_FIELD_INVALID + "\n";
      invalidFields += text;
      setCanSubmit(false);
    }

    if (!user.apelido) {
      let text = "* " + ErrorMessage.NICKNAME_FIELD_INVALID + "\n";
      invalidFields += text;
      setCanSubmit(false);
    }

    if (!user.senha) {
      let text = "* " + ErrorMessage.PASSWORD_FIELD_INVALID + "\n";
      invalidFields += text;
      setCanSubmit(false);
    }

    if (user.senha !== passwordConfirm) {
      let text = "* " + ErrorMessage.PASSWORDS_DONT_MATCH + "\n";
      invalidFields += text;
      setCanSubmit(false);
    }

    if (invalidFields === "") {
      setCanSubmit(true);
    }

    return invalidFields;
  };

  const onChangeTelephone = (telephone) => {
    const onlyNumber = sanitizeTelephone(telephone);

    setTelephoneDisplay(telephoneFormatter(onlyNumber));
    setUser({ ...user, telefone: onlyNumber });
  };

  const onChangeName = (name) => {
    if (!name) {
      setCanSubmit(false);
    }

    setUser({ ...user, nome: name });
  };

  const onChangeNickname = (nick) => {
    if (!nick) {
      setCanSubmit(false);
    }

    setUser({ ...user, apelido: nick });
  };

  const onChangePassword = (password) => {
    if (!password) {
      setCanSubmit(false);
    }

    setUser({
      ...user,
      senha: password,
    });
  };

  const onChangeConfirmPassword = (text) => {
    setPasswordConfirm(text);

    if (text === user.senha) {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }
  };

  const openGallery = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Você não deu permissão para abrir suas fotos!");
      return;
    }

    const response = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      allowsEditing: true,
      quality: 0.5,
    });

    if (!response.canceled) {
      var imageStringToStorage = `data:image/png;base64,${response.assets[0].base64}`;
      setUser({ ...user, avatar: imageStringToStorage });
    }
  };

  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Você não deu permissão para acessar sua câmera!");
      return;
    }

    const response = await ImagePicker.launchCameraAsync({
      base64: true,
      allowsEditing: true,
      quality: 0.5,
    });

    if (!response.canceled) {
      var imageStringToStorage = `data:image/png;base64,${response.assets[0].base64}`;
      setUser({ ...user, avatar: imageStringToStorage });
    }
  };

  const removeImage = () => {
    if (user.avatar) {
      setUser({ ...user, avatar: "" });
    }
  };

  const photoChange = () => {
    Alert.alert(
      "Escolha sua foto",
      "Qual meio deseja abrir?",
      [
        {
          text: "Galeria",
          style: "default",
          onPress: () => {
            openGallery();
          },
        },
        {
          text: "Câmera",
          style: "default",
          onPress: () => {
            openCamera();
          },
        },
        {
          text: "Excluir",
          style: "default",
          onPress: () => {
            removeImage();
          },
        },
      ],
      {
        cancelable: true,
        onDismiss: () => Alert.alert("Seleção de imagem cancelada."),
      }
    );
  };

  return (
    <SafeAreaView style={globalStyle.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.topPage}>
          <Text style={style.titulo}>
            Cadastre-se para começar a interagir!
          </Text>
          <TouchableOpacity
            style={style.avatarContainer}
            onPress={() => photoChange()}
          >
            {user.avatar ? (
              <Avatar.Image
                style={style.avatar}
                source={{
                  uri: user.avatar,
                }}
                size={120}
              />
            ) : (
              <Avatar.Icon style={style.avatar} icon="camera-plus" size={120} />
            )}
          </TouchableOpacity>
        </View>
        <View style={style.form}>
          <View style={style.rowForm}>
            <View style={style.inputLabelContainer}>
              <Text style={style.labelInput}>Telefone</Text>
              <View style={[style.inputContainer]}>
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
            </View>
          </View>
          <View style={style.rowForm}>
            <View style={style.inputLabelContainer}>
              <Text style={style.labelInput}>Nome</Text>
              <View style={style.inputContainer}>
                <TextInput
                  style={style.input}
                  value={user.nome}
                  cursorColor={colorScheme.accentColor}
                  placeholder="Seu nome"
                  placeholderTextColor={colorScheme.infoTextColor}
                  keyboardType="default"
                  onChangeText={(name) => onChangeName(name)}
                />
              </View>
            </View>
          </View>
          <View style={style.rowForm}>
            <View style={style.inputLabelContainer}>
              <Text style={style.labelInput}>Apelido</Text>
              <View style={style.inputContainer}>
                <TextInput
                  style={style.input}
                  value={user.apelido}
                  cursorColor={colorScheme.accentColor}
                  placeholder="Seu apelido"
                  placeholderTextColor={colorScheme.infoTextColor}
                  keyboardType="default"
                  onChangeText={(nick) => onChangeNickname(nick)}
                />
              </View>
            </View>
          </View>
          <View style={style.rowForm}>
            <View style={style.inputLabelContainer}>
              <Text style={style.labelInput}>Senha</Text>
              <View style={style.inputContainer}>
                <TextInput
                  style={[style.input, style.passwordInput]}
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
            </View>
          </View>
          <View style={style.rowForm}>
            <View style={style.inputLabelContainer}>
              <Text style={style.labelInput}>Confirmar senha</Text>
              <View style={style.inputContainer}>
                <TextInput
                  style={[style.input, style.passwordInput]}
                  secureTextEntry={hideConfirmPassword}
                  value={passwordConfirm}
                  placeholderTextColor={colorScheme.infoTextColor}
                  placeholder="Confirme sua senha"
                  onChangeText={(password) => onChangeConfirmPassword(password)}
                />
                {hideConfirmPassword ? (
                  <MaterialIcons
                    style={style.visibilityButton}
                    name="visibility"
                    size={30}
                    color={colorScheme.accentColor}
                    backgroundColor="transparent"
                    onPress={() => setHideConfirmPassword(!hideConfirmPassword)}
                  />
                ) : (
                  <MaterialIcons
                    style={style.visibilityButton}
                    name="visibility-off"
                    size={30}
                    color={colorScheme.accentColor}
                    backgroundColor="transparent"
                    onPress={() => setHideConfirmPassword(!hideConfirmPassword)}
                  />
                )}
              </View>
            </View>
          </View>
          <View style={style.actionContainer}>
            <TouchableOpacity
              onPress={handleSignUp}
              style={[style.actionButton, style.singInButton]}
            >
              <Text style={[style.titleActionButton]}>Finalizar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={[style.actionButton, style.registerButton]}
            >
              <Text style={[style.titleActionButton, style.registerTittle]}>
                Voltar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterPage;
