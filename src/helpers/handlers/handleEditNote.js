export const handleEditNote = (id, notes, handleSetNewNote, setIsEditing) => {
  const noteToEdit = notes.find((note) => note.id === id);
  handleSetNewNote(noteToEdit);
  setIsEditing(true);
};
