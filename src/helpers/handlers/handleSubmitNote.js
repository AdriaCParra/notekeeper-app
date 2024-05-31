import { serviceNote } from "../../services";
import { validateNote } from "../../helpers/validation";

const updateNote = (id, updatedNote, handleSetNotes) => {
  serviceNote.updateNote(id, updatedNote).then(() => {
    serviceNote.getNotes().then(({ notes }) => {
      handleSetNotes(notes);
    });
  });
};

const postNote = (newNote, handleSetNotes) => {
  serviceNote.createNote(newNote).then(() => {
    serviceNote.getNotes().then(({ notes }) => {
      handleSetNotes(notes);
    });
  });
};

export const handleSubmitNote = (
  e,
  handleSetNotes,
  setIsEditing,
  handleSetNewNote,
  newNote,
  isEditing,
  STATUS,
) => {
  e.preventDefault();

  if (!validateNote(newNote)) {
    alert("Invalid note");
    return;
  }

  if (isEditing) {
    updateNote(newNote.id, newNote, handleSetNotes);
    setIsEditing(false);
  } else postNote(newNote, handleSetNotes);

  handleSetNewNote({
    name: "",
    description: "",
    important: false,
    status: STATUS.PENDING,
    due_date: "",
  });
};
