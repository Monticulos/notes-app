import { Button, StyleSheet, Text, View } from "react-native";

interface WelcomeHeadingProps {
  navigation: any;
}

const WelcomeHeading = ({ navigation }: WelcomeHeadingProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to the note taking app!</Text>
      <Button
        title="Take some notes!"
        onPress={() => navigation.navigate("NoteTaker")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  heading: {
    marginBottom: "10%",
  },
});

export default WelcomeHeading;
