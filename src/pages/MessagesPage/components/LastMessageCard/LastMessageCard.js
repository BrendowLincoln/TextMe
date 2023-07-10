import { Text, TouchableOpacity, View } from "react-native";
import styles from "./Style";
import { Avatar } from "react-native-paper";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";

const LastMessageCard = ({ lastMessageContact, wasUser }) => {

  const navigation = useNavigation();

  useEffect(() => {
  }, []);

  return (
    lastMessageContact && (
      <TouchableOpacity
        onPress={() => navigation.navigate("Chat", { "contact": lastMessageContact.contact })}
      >
        <View style={styles.container}>
          <Avatar.Image
            style={styles.avatar}
            source={{ uri: lastMessageContact.contact.avatar }}
            size={65}
          />
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{lastMessageContact.contact.nome}</Text>
            <View style={styles.mesageContainer}>
              {wasUser ? 
                <Text style={styles.message}>Você: </Text>
                :
                <Text></Text>
              }
              <Text numberOfLines={1} style={styles.message}>
                {lastMessageContact.lastMessage.mensagem}
              </Text>
            </View>
          </View>
          <View style={styles.hourContainer}>
            <Text style={styles.hour}>{moment(lastMessageContact.lastMessage.dataHora).format("HH:mm")}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  );
};

export default LastMessageCard;
