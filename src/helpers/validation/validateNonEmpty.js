export const validateNonEmpty = (note) => {
  const values = Object.values(note).filter(
    (value) => typeof value === "string",
  );

  const isFilled = values.every((value) => value !== "");

  return isFilled;
};
