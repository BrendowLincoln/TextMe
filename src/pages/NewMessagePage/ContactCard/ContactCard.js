import { View, TouchableOpacity } from "react-native";
import styles from "./Style";
import { Avatar } from "react-native-paper";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ContactCard = ({ contact }) => {
  const navigation = useNavigation();

  return (
    contact && (
      <TouchableOpacity
        onPress={() => navigation.navigate("Chat", { "contact": contact })}
      >
        <View style={styles.container}>
          <Avatar.Image
            style={styles.avatar}
            source={{ uri: contact.avatar }}
            size={65}
          />
          <Text numberOfLines={1} style={styles.name}>
            {contact.nome}
          </Text>
        </View>
      </TouchableOpacity>
    )
  );
};

export default ContactCard;
