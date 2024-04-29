import React, { createContext, SetStateAction, useState } from "react";
import { INote } from "../types/INote";

interface NoteContextProps {
  notes: INote[];
  setNotes: React.Dispatch<SetStateAction<INote[]>>;
}

export const NoteContext = createContext<NoteContextProps>({
  notes: [],
  setNotes: () => {},
});

interface NoteContextProviderProps {
  children: React.ReactNode;
}

export const NoteContextProvider = ({ children }: NoteContextProviderProps) => {
  const [notes, setNotes] = useState<INote[]>([]);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {children}
    </NoteContext.Provider>
  );
};
