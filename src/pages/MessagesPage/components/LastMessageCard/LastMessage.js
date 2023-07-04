import { Text, View } from "react-native";
import styles from "./Style";
import { Avatar } from "react-native-paper";
import { useEffect } from "react";

const LastMessage = ({ lastMessage }) => {
  useEffect(() => {
    console.log(lastMessage);
  }, []);

  return (
    lastMessage && (
      <View style={styles.container}>
        <Avatar.Image
          style={styles.avatar}
          source={{ uri: lastMessage.avatar }}
          size={65}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{lastMessage.nome}</Text>
          <Text style={styles.message}>{lastMessage.message}</Text>
        </View>
        <View style={styles.hourContainer}>
          <Text style={styles.hour}>{lastMessage.hora}</Text>
        </View>
      </View>
    )
  );
};

export default LastMessage;
