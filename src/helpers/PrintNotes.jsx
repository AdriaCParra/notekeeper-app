export const PrintNotes = ({ notes, handleEditNote, handleDeleteNote }) => {
  return notes.map((note) => (
    <div key={note.id} className="note">
      <p>Name: {note.name}</p>
      <p>Description: {note.description}</p>
      <p>Status: {note.status}</p>
      <p>Due date: {note.due_date}</p>
      <p>Is it important → {note.important ? "✅" : "❌"}</p>
      <div className="button-container">
        <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
        <button onClick={() => handleEditNote(note.id)}>Edit</button>
      </div>
    </div>
  ));
};
