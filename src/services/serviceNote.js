import { http } from "./https";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const EXT_URL = `notes`;

const URL = `${BASE_URL}/${EXT_URL}`;

const getNotes = async () => {
  return await http.Get(URL);
};

const createNote = async (newNote) => {
  const bodyConfig = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newNote),
  };

  return await http.Post(URL, bodyConfig);
};

const deleteNote = async (id) => {
  const response = await http.Delete(`${URL}/${id}`);
  return response.data;
};

const updateNote = async (id, updatedNote) => {
  const response = await http.Update(`${URL}/${id}`, updatedNote);
  return response.data;
};

export const serviceNote = {
  getNotes,
  createNote,
  deleteNote,
  updateNote,
};
