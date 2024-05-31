export const handleInputChange = (e, handleSetNewNote) => {
  const { name, value, type, checked } = e.target;

  const newValue = type === "checkbox" ? checked : value;

  handleSetNewNote((prevNote) => ({
    ...prevNote,
    [name]: newValue,
  }));
};
