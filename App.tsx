import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React, { useContext, useEffect } from "react";
import {
  NoteContext,
  NoteContextProvider,
} from "./context/NoteContextProvider";
import { Note } from "./components/Note";

const Drawer = createDrawerNavigator();

export default function App() {
  const { notes, setNotes } = useContext(NoteContext);

  useEffect(() => {
    const fetchNotes = async () => {
      const fetchedNotes = [
        { id: 1, title: "Note 1", content: "Content of Note 1" },
        { id: 2, title: "Note 2", content: "Content of Note 2" },
      ];
      setNotes(fetchedNotes);
    };

    fetchNotes();
  }, []);

  return (
    <NoteContextProvider>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Create new note" component={Note} />
          {notes.map((note) => (
            <Drawer.Screen
              key={note.id}
              name={note.title}
              component={Note}
              initialParams={{ note: note }}
            />
          ))}
        </Drawer.Navigator>
      </NavigationContainer>
    </NoteContextProvider>
  );
}
