import { PrintNotes } from "../../helpers";
import { handleDeleteNote, handleEditNote } from "../../helpers/handlers";

import "./showNotes.css";

export const ShowNotes = ({
  notes,
  handleSetNotes,
  handleSetNewNote,
  setIsEditing,
}) => {
  return (
    <div className="container-notes">
      <h2>NOTES:</h2>
      <div className="container-note">
        <PrintNotes
          notes={notes}
          handleEditNote={(id) =>
            handleEditNote(id, notes, handleSetNewNote, setIsEditing)
          }
          handleDeleteNote={(id) => handleDeleteNote(id, handleSetNotes)}
        />
      </div>
    </div>
  );
};
