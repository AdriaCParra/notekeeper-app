import { useState } from "react";
import { serviceNote } from "../services";
import { validateNote } from "../helpers/validation";

export const useNewNote = () => {
  const [newNote, setNewNote] = useState({
    name: "",
    description: "",
    status: "pending",
    important: false,
    due_date: "",
  });

  const handleSetNewNote = (newNote) => {
    setNewNote(newNote);
  };

  return { newNote, handleSetNewNote };
};
