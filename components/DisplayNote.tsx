import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

interface DisplayNoteProps {
  route: any;
}

const DisplayNote = ({ route }: DisplayNoteProps) => {
  const { note } = route.params;

  const [inputText, setInputText] = useState(note.content || "");
  const [displayText, setDisplayText] = useState(note.content || "");
  const placeholder = note.content || "Write your note here!";

  return (
    <View style={{ padding: 10 }}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={(newText) => setInputText(newText)}
        defaultValue={inputText}
      />
      <Button
        onPress={() => {
          setDisplayText(inputText);
        }}
        title="Submit"
      />
      <Text style={styles.textOutput}>{displayText}</Text>
    </View>
  );
};

const styles = {
  input: {
    height: 40,
  },
  textOutput: {
    padding: 10,
    fontSize: 42,
  },
};

export default DisplayNote;
