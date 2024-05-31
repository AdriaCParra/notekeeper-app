import { handleInputChange, handleSubmitNote } from "../../helpers/handlers";
import { STATUS } from "../../data";

import "./FormNotes.css";
export const FormNotes = ({
  newNote,
  handleSetNewNote,
  handleSetNotes,
  isEditing,
  setIsEditing,
}) => {
  return (
    <div className="notesForm-container">
      <h2>NOTES FORM:</h2>
      <form
        onSubmit={(e) =>
          handleSubmitNote(
            e,
            handleSetNotes,
            setIsEditing,
            handleSetNewNote,
            newNote,
            isEditing,
            STATUS,
          )
        }
      >
        <input
          name="name"
          onChange={(e) => handleInputChange(e, handleSetNewNote)}
          type="text"
          placeholder="Enter name"
          value={newNote.name}
        />
        <input
          name="description"
          onChange={(e) => handleInputChange(e, handleSetNewNote)}
          type="text"
          placeholder="Enter description"
          value={newNote.description}
        />
        <br />
        <label htmlFor="due_date">Due date:</label>
        <input
          name="due_date"
          onChange={(e) => handleInputChange(e, handleSetNewNote)}
          id="due_date"
          type="date"
          value={newNote.due_date}
        />
        <div className="status-important">
          <select
            onChange={(e) => handleInputChange(e, handleSetNewNote)}
            name="status"
            id="status"
            value={newNote.status}
          >
            <option value={STATUS.PENDING}>pending</option>
            <option value={STATUS.IN_PROGRESS}>in progress</option>
            <option value={STATUS.DONE}>done</option>
          </select>
          <br />
          <br />
          <div className="important">
            <label htmlFor="important">Important:</label>
            <input
              name="important"
              onChange={(e) => handleInputChange(e, handleSetNewNote)}
              id="important"
              type="checkbox"
              checked={newNote.important}
            />
          </div>
        </div>
        <br />
        <br />
        <button type="submit">{isEditing ? "Update note" : "Add note"}</button>
      </form>
    </div>
  );
};
