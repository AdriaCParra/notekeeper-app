import { useEffect } from "react";
import { useState } from "react";
import { serviceNote } from "../services";

export const useNotes = () => {
  const [notes, setNotes] = useState([]);

  const handleSetNotes = (newNotes) => {
    setNotes(newNotes);
  };

  useEffect(() => {
    serviceNote.getNotes().then(({ notes }) => {
      handleSetNotes(notes);
    });
  }, []);

  return { notes, handleSetNotes };
};
