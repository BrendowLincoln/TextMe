import { SafeAreaView, View, FlatList, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colorScheme, globalStyle } from "../../shared/styles/GlobalStyle";
import styles from "./Style";
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";
import { FAB } from "react-native-paper";
import { Avatar } from "react-native-paper";
import LastMessage from "./components/LastMessageCard/LastMessage";

const MessagesPage = () => {
  const { userData, logout } = useAuth();

  const messages = [
    {
      id: 1,
      nome: "Brendow",
      message: "Olá!",
      hora: "21:01",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 2,
      nome: "Brendow",
      message: "Olá!",
      hora: "21:01",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 3,
      nome: "Brendow",
      message: "Olá!",
      hora: "21:01",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 4,
      nome: "Brendow",
      message: "Olá!",
      hora: "21:01",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 5,
      nome: "Brendow",
      message: "Olá!",
      hora: "21:01",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 6,
      nome: "Brendow",
      message: "Olá!",
      hora: "21:01",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 7,
      nome: "Brendow",
      message: "Olá!",
      hora: "21:01",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 8,
      nome: "Brendow",
      message: "Olá!",
      hora: "21:01",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 9,
      nome: "Brendow",
      message: "Olá!",
      hora: "21:01",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 10,
      nome: "Brendow",
      message: "Olá!",
      hora: "21:01",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 11,
      nome: "Brendow",
      message: "Olá!",
      hora: "21:01",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 12,
      nome: "Brendow",
      message: "Olá!",
      hora: "21:01",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 13,
      nome: "Brendow",
      message: "Olá!",
      hora: "21:01",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 14,
      nome: "Brendow",
      message: "Olá!",
      hora: "21:01",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 15,
      nome: "Brendow",
      message: "Olá!",
      hora: "21:01",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 16,
      nome: "Brendow",
      message: "Olá!",
      hora: "21:01",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 17,
      nome: "Brendow",
      message: "Olá!",
      hora: "21:01",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 18,
      nome: "Brendow",
      message: "Olá!",
      hora: "21:01",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 19,
      nome: "Brendow",
      message: "Olá!",
      hora: "21:01",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 20,
      nome: "Brendow",
      message: "Olá!",
      hora: "21:01",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 21,
      nome: "Brendow",
      message: "Olá!",
      hora: "21:01",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 22,
      nome: "Brendow",
      message: "Olá!",
      hora: "21:01",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
  ];

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <SafeAreaView style={globalStyle.page}>
      <View style={styles.headerContainer}>
        <Avatar.Image
          style={styles.avatar}
          source={{
            uri: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
          }}
          size={100}
        />
        <View style={styles.actionContainer}>
          <View style={styles.newChatButtonContainer}>
            <MaterialIcons
              style={styles.newChatButton}
              name="logout"
              size={30}
              onPress={() => logout()}
            />
          </View>
        </View>
      </View>
      <View style={styles.pageTitleContainer}>
        <Text style={styles.pageTitle}>Messages</Text>
      </View>
      <FlatList
        data={messages}
        renderItem={({ item }) => <LastMessage lastMessage={item} />}
        keyExtractor={(item) => item.id}
        style={styles.messageListContainer}
      />

      <FAB
        icon="plus"
        mode="elevated"
        variant="secondary"
        color="white"
        backgroundColor={colorScheme.accentColor}
        style={styles.fab}
        onPress={() => console.log("Clicou no FAB!")}
      />
    </SafeAreaView>
  );
};

export default MessagesPage;
