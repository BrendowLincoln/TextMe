import { View, Text } from "react-native";
import styles from "./Style";
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";
const ChatPage = () => {
  const { userData } = useAuth();

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>AAAAAAAAAAAAAAAAAAAAA</Text>
    </View>
  );
};

export default ChatPage;
