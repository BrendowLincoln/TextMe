import { View, Text, SafeAreaView, FlatList } from "react-native";
import { Avatar, IconButton, TextInput } from "react-native-paper";
import styles from "./Style";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { colorScheme } from "../../shared/styles/GlobalStyle";
import User from "../../shared/models/User";
import { getMessages, getUser, sendMessage } from "../../shared/apis/messagerApi";
import { MaterialIcons } from "@expo/vector-icons";
import MessageComponent from "../components/MessageComponent";


const ChatPage = ({ route }) => {
  const { userData } = useAuth();
  const navigation = useNavigation();
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState();

  const [contact, setContact] = useState(User());

  let fetchTimer = null;

  useEffect(() => {
    if (route.params) {
      setContact(route.params.contact);
    }

  }, []);

  useEffect(( ) => {
    fetchTimer = initilzeTimeout();
  }, [contact]);

  const fetchMessages = (userId, contactId) => {
    getMessages(userId, contactId).then((response) => {
      if(response) {
        const foundedMessages = response.sort((a, b) => b.id - a.id);
        setMessages(foundedMessages);
      }
      
    });
  }

  const send = (message) => {
    if(message) {
      clearTimeout(fetchTimer);
      fetchTimer = initilzeTimeout();
      setMessage("");
      sendMessage(userData.id, contact.id, message);
    }
  }

  const initilzeTimeout = () => setTimeout(() => fetchMessages(userData.id, contact.id), 500);

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.headerPage}>
        <IconButton
          icon="chevron-left"
          iconColor={colorScheme.accentColor}
          background="transparent"
          size={35}
          onPress={() => navigation.goBack()}
        />
        {contact.avatar ? 
        <Avatar.Image
          style={styles.avatar}
          source={{ uri: contact.avatar }}
          size={50}
        /> :
        <Avatar.Icon
          style={styles.avatar}
          icon="account"
          size={50}
          color={colorScheme.thirdColor}
        /> 
        }
        <View style={styles.contactNameContainer}>
          <Text style={styles.name}>{contact.nome}</Text>
        </View>
      </View>
      <View style={styles.messagesContainer}>
        <FlatList 
          data={messages}
          inverted={true}
          renderItem={({ item }) => <MessageComponent 
            message={item}
            isUser={userData.id === item.from.id}
          />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={styles.messageInputContainer}>
        <TextInput
          value={message}
          onChangeText={(text) => setMessage(text)}
          mode="outlined"
          placeholder="Escreva sua mensagem"
          right={
            <TextInput.Icon 
              icon="send"
              iconColor={colorScheme.accentColor}
              onPress={() => send(message)}
            />
          }
          style={styles.textMessageInput}
          placeholderTextColor={colorScheme.infoTextColor}
          textColor={colorScheme.thirdColor}
          outlineStyle={styles.textMessageInput}
          outlineColor="transparent"
          activeOutlineColor="transparent"

        />
      </View>
    </SafeAreaView>
  );
};

export default ChatPage;
