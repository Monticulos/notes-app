import React, { useId, useState } from "react";
import { TextInput, View } from "react-native";
import type { INote } from "../types/INote";

interface NoteProps {
  route: any;
}

export const Note = ({ route }: NoteProps) => {
  let { note } = route.params || {};

  if (!note) {
    const noteId = useId();
    note = {
      id: noteId,
      title: "New note",
      content: "Write your note here",
    };
  }

  const [noteTitle, setNoteTitle] = useState(note.title);
  const [noteContent, setNoteContent] = useState(note.content);

  return (
    <View>
      <TextInput onChangeText={setNoteTitle} defaultValue={noteTitle} />
      <TextInput onChangeText={setNoteContent} defaultValue={noteContent} />
    </View>
  );
};
