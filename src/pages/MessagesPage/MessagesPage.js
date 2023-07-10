import { SafeAreaView, View, FlatList, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colorScheme, globalStyle } from "../../shared/styles/GlobalStyle";
import styles from "./Style";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { IconButton, FAB, MD3Colors } from "react-native-paper";
import { Avatar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import LastMessageCard from "./components/LastMessageCard/LastMessageCard";
import { getMessages, getUsersWithMessages } from "../../shared/apis/messagerApi";
import moment from "moment";

const MessagesPage = () => {
  const navigation = useNavigation();
  const { userData, logout } = useAuth();
  const [messages, setMessages] = useState([]);

  let fetchTimer = null;

  useEffect(() => {
    if(userData) {
      fetchTimer =  setTimeout(() => fetchLastMessages(), 1000);
    }
  }, [])

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log("voltou");
      console.log("fetch: ", fetchTimer);
      console.log("userData: ", userData);
      if(userData) {
        fetchTimer =  setTimeout(() => fetchLastMessages(), 1000);
      }
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    if(userData) {
      fetchTimer = setTimeout(() => fetchLastMessages(), 1000);
    }
  }, [userData]);

  const fetchLastMessages = () => {
    let handledLastUsersMessages = [];
    getUsersWithMessages(userData.id)
    .then((response) => {
      const lastUsers = response.filter((r) => r.id !== userData.id);
      lastUsers.forEach((lu) => {
        getMessages(userData.id, lu.id).then((r) => {
          if(r) {
            const lastMessage = _getLasMessage(r);

            const LastMessageWithUser = {
              "id": lu.id,
              "contact": lu,
              "lastMessage": lastMessage
            }

            handledLastUsersMessages.push(LastMessageWithUser);
          }

          handledLastUsersMessages = handledLastUsersMessages.sort((a, b) => {
            const dataA = moment(a.lastMessage.dataHora);
            const dataB = moment(b.lastMessage.dataHora);
          
            return dataB - dataA;
          })
          setMessages(handledLastUsersMessages);
        })
      })

    });
  }

  const _getLasMessage = (messages) => {
    const orderedMessages = messages.sort((a, b) => {
      const dataA = moment(a.dataHora);
      const dataB = moment(b.dataHora);
    
      return dataB - dataA;
    })

    return orderedMessages[0];
  }

  return (
    userData && (
      <SafeAreaView style={globalStyle.page}>
        <View style={styles.headerContainer}>
          <View style={styles.avatarContainer}>
            <Avatar.Image
              style={styles.avatar}
              source={{
                uri: userData.avatar,
              }}
              size={90}
            />
            <View style={styles.presentationContainer}>
              <Text style={styles.presentationText}>Bem vindo, </Text>
              <Text numberOfLines={1} style={styles.presentationTextName}>
                {userData.nome}
              </Text>
            </View>
          </View>
          <View style={styles.actionContainer}>
            <View style={styles.logoutButtonContainer}>
              <IconButton
                icon="logout-variant"
                iconColor={colorScheme.accentColor}
                mode="contained"
                backgroundColor={colorScheme.thirdColor}
                style={styles.logoutButton}
                onPress={() => logout()}
              />
            </View>
          </View>
        </View>
        <View style={styles.pageTitleContainer}>
          <Text style={styles.pageTitle}>Mensagens</Text>
        </View>
        <FlatList
          data={messages}
          renderItem={({ item }) => <LastMessageCard 
            lastMessageContact={item} 
            wasUser={userData.id === item.lastMessage.from.id}
          />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.noMessagesFoundContainer}>
              <MaterialIcons
                name="search-off"
                size={40}
                style={styles.noMessagesFoundIcon}
              />
              <Text style={styles.noMessagesFoundText}>
                Nenhuma mensagem encontrada
              </Text>
            </View>
          )}
          style={styles.messageList}
        />
        <FAB
          icon="message-plus"
          mode="elevated"
          color={colorScheme.accentColor}
          backgroundColor={colorScheme.thirdColor}
          customSize={55}
          style={styles.fab}
          onPress={() => navigation.navigate("NewMessage")}
        />
      </SafeAreaView>
    )
  );
};

export default MessagesPage;
