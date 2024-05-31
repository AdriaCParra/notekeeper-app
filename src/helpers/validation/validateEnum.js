import { STATUS } from "../../data";

export const validateEnum = (note) => {
  const noteStatus = note.status;

  if (
    noteStatus !== STATUS.PENDING &&
    noteStatus !== STATUS.IN_PROGRESS &&
    noteStatus !== STATUS.DONE
  )
    return false;

  return true;
};
