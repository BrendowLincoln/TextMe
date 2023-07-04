import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import useAuth from "../../hooks/useAuth";
import ChatPage from "../ChatPage/ChatPage";
import NewMessagePage from "../../pages/NewMessagePage/NewMessagePage";
import MessagesPage from "../MessagesPage/MessagesPage";

const { Navigator, Screen } = createStackNavigator();

const StackPage = () => {
  const { authenticated } = useAuth();

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={authenticated ? "Messages" : "Login"}
      >
        {authenticated ? (
          <>
            <Screen name="Messages" component={MessagesPage} />
            <Screen name="NewMessage" component={NewMessagePage} />
            <Screen name="Chat" component={ChatPage} />
          </>
        ) : (
          <>
            <Screen name="Login" component={LoginPage} />
            <Screen name="Register" component={RegisterPage} />
          </>
        )}
      </Navigator>
    </NavigationContainer>
  );
};

// So isso
// Flw
// Beleza! Valeu mesmo, cara!! Vou te pagar um milk

export default StackPage;
