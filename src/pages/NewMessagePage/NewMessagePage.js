import { SafeAreaView, View, Text, FlatList } from "react-native";
import { colorScheme, globalStyle } from "../../shared/styles/GlobalStyle";
import styles from "../NewMessagePage/Style";
import { IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import ContactCard from "./ContactCard/ContactCard";
import { MaterialIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { getContacts } from "../../shared/apis/messagerApi";
import useAuth from "../../hooks/useAuth";

const NewMessagePage = () => {
  const { userData } = useAuth();
  const [contacts, setContacts] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    getContacts(userData.telefone).then((response) => {
      setContacts(response);
    });
  }, []);

  return (
    <SafeAreaView style={globalStyle.page}>
      <View style={styles.headerContainer}>
        <View style={styles.actionContainer}>
          <View style={styles.backButtonContainer}>
            <IconButton
              icon="chevron-left"
              iconColor={colorScheme.accentColor}
              backgroundColor="white"
              size={28}
              style={styles.logoutButton}
              onPress={() => navigation.navigate("Messages")}
            />
          </View>
        </View>
      </View>
      <View style={styles.pageTitleContainer}>
        <Text style={styles.pageTitle}>Nova conversa</Text>
      </View>
      <FlatList
        data={contacts}
        renderItem={({ item }) => <ContactCard contact={item} />}
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
              Nenhum contato encontrado
            </Text>
          </View>
        )}
        style={styles.messageList}
      />
    </SafeAreaView>
  );
};

export default NewMessagePage;
