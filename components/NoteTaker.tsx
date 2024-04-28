import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";

const NoteTaker = () => {
  const [text, setText] = useState("");
  const placeholder = "Write your note here!";

  return (
    <View style={{ padding: 10 }}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
      />
      <Text style={styles.textOutput}>{text}</Text>
    </View>
  );
};

const styles = {
  input: {
    height: 40
  },
  textOutput: {
    padding: 10,
    fontSize: 42
  }
};

export default NoteTaker;
