import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import NoteTaker from "./components/NoteTaker";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to the note taking app!</Text>
      <NoteTaker />
    </View>
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
