import { validateType } from "./validateType.js";
import { validateEnum } from "./validateEnum.js";
import { validateNonEmpty } from "./validateNonEmpty.js";

export const validateNote = (note) => {
  const isValidNoteType =
    validateType(note.name, "string") &&
    validateType(note.description, "string") &&
    validateType(note.important, "boolean") &&
    validateType(note.status, "string") &&
    validateType(note.due_date, "string");

  const isValid =
    isValidNoteType && validateEnum(note) && validateNonEmpty(note);

  return isValid;
};
