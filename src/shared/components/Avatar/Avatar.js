import { useActionSheet } from "@expo/react-native-action-sheet";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { Image, TouchableOpacity, View } from "react-native";
import styles from "./Style";
import { colorScheme } from "../../styles/GlobalStyle";

const Avatar = ({ image, setImage }) => {f
  const { showActionSheetWithOptions } = useActionSheet();

  const handleOptions = () => {
    const options = ["Abrir Câmera", "Selecionar Arquivo", "Cancelar"];
    const optionsWithImage = ["Abrir Câmera", "Selecionar Arquivo", "Remover Foto", "Cancelar"];
    const cancelButtonIndex = image ? 3 : 2;

    const handlePickImageFromCamera = async () => {
      const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

      if (permissionResult.granted) {
        const result = await ImagePicker.launchCameraAsync({
          allowsEditing: true,
          quality: 1,
          base64: true,
        });

        if (!result.canceled) {
          setImage(result.assets[0]);
        }
      }
    };

    const handlePickImage = async () => {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (permissionResult.granted) {
        const result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          quality: 1,
          base64: true,
        });

        if (!result.canceled) {
          setImage(result.assets[0]);
        }
      }
    };

    const handleRemoveImage = () => {
      setImage(null);
    };

    showActionSheetWithOptions(
      {
        options: image ? optionsWithImage : options,
        cancelButtonIndex,
        cancelButtonTintColor: cancelIconColor,
        title: "Selecionar imagem",
        icons: image
          ? [
              <MaterialIcons name="camera" size={24} color={colorScheme.infoTextColor} />,
              <MaterialIcons name="image" size={24} color={colorScheme.infoTextColor} />,
              <MaterialIcons name="trash" size={24} color={colorScheme.infoTextColor} />,
              <MaterialIcons name="close" size={24} color={colorScheme.infoTextColor} />,
            ]
          : [
              <MaterialIcons name="camera" size={24} color={colorScheme.infoTextColor} />,
              <MaterialIcons name="image" size={24} color={colorScheme.infoTextColor} />,
              <MaterialIcons name="close" size={24} color={colorScheme.infoTextColor} />,
            ],
        containerStyle: styles.actionSheet,
        textStyle: styles.text,
        titleTextStyle: styles.text,
      },
      (selectedIndex) => {
        if (image) {
          switch (selectedIndex) {
            case 0:
              handlePickImageFromCamera();
              break;
            case 1:
              handlePickImage();
              break;
            case 2:
              handleRemoveImage();
              break;
          }
        } else {
          switch (selectedIndex) {
            case 0:
              handlePickImageFromCamera();
              break;
            case 1:
              handlePickImage();
              break;
          }
        }
      },
    );
  };

  return (
    <TouchableOpacity onPress={handleOptions}>
      <View style={styles.container}>
        {image ? (
          <Image source={{ uri: image.uri }} style={styles.image} />
        ) : (
          <MaterialIcons name="add" size={40} color={colorScheme.accentColor} />
        )}
      </View>
    </TouchableOpacity>
  );
};


export default Avatar;