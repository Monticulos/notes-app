import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useEffect, useState } from "react";
import NewNote from "./components/NewNote";
import DisplayNote from "./components/DisplayNote";
import { Text } from "react-native";

const Drawer = createDrawerNavigator();

export interface Note {
  id: string | number;
  name: string;
  content: string;
}

export default function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const fetchedNotes = [
        { id: 1, name: "Note 1", content: "Content of Note 1" },
        { id: 2, name: "Note 2", content: "Content of Note 2" },
      ];
      setNotes(fetchedNotes);
    };

    fetchNotes();
  }, []);
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Create new note"
          component={NewNote}
          initialParams={{ notes: notes }}
        />
        <Drawer.Screen name="DisplayNote" component={DisplayNote} />
        {notes.map((note) => (
          <Drawer.Screen
            key={note.id}
            name={"Note " + note.id}
            component={DisplayNote}
            initialParams={{ note: note }}
          />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
