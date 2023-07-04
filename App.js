import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackPage from "./src/pages/StackPage/StackPage";
import { AuthProvider } from "./src/context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <StackPage />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// ********************* -> tenta dnv !! <- **************
// Tive uma ideia foda
// Vou botar o meu ip e rodar na minha maquina
// Dps q vc testar ai

// Funcionou? * expressão de ansiedade *
// * ficando corado *r
