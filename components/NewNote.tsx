import { Button, StyleSheet, Text, View } from "react-native";
import { useId } from "react";
import { Note } from "../App";

interface NewNoteProps {
  navigation: any;
}

const NewNote = ({ navigation }: NewNoteProps) => {
  const newId = useId();

  const handleNewNote = () => {
    const newNote: Note = {
      id: newId,
      name: "Note" + newId,
      content: "Content of the new note",
    };

    navigation.navigate("DisplayNote", {
      note: newNote,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to the note taking app!</Text>
      <Button title="Create new note" onPress={handleNewNote} />
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

export default NewNote;
