import { serviceNote } from "../../services";

export const handleDeleteNote = (id, handleSetNotes) => {
  serviceNote.deleteNote(id).then(() => {
    serviceNote.getNotes().then(({ notes }) => {
      handleSetNotes(notes);
    });
  });
};
