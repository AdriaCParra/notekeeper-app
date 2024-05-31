import { useState } from "react";
import { FormNotes } from "./components";
import { ShowNotes } from "./components";
import { useNewNote, useNotes } from "./hooks";

import "./App.css";

function App() {
  const { notes, handleSetNotes } = useNotes();
  const { newNote, handleSetNewNote } = useNewNote();
  const [isEditing, setIsEditing] = useState(false);

  return (
    <main className="sections-container">
      <ShowNotes
        notes={notes}
        handleSetNotes={handleSetNotes}
        handleSetNewNote={handleSetNewNote}
        setIsEditing={setIsEditing}
      />
      <FormNotes
        newNote={newNote}
        handleSetNewNote={handleSetNewNote}
        handleSetNotes={handleSetNotes}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />
    </main>
  );
}

export default App;
