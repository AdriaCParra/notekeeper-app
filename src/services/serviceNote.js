import { http } from "./https";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const getNotes = async () => {
  return await http.Get(BASE_URL);
};

const createNote = async (newNote) => {
  const bodyConfig = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newNote),
  };

  return await http.Post(BASE_URL, bodyConfig);
};

const deleteNote = async (id) => {
  const response = await http.Delete(`${BASE_URL}/${id}`);
  return response.data;
};

const updateNote = async (id, updatedNote) => {
  const response = await http.Update(`${BASE_URL}/${id}`, updatedNote);
  return response.data;
};

export const serviceNote = {
  getNotes,
  createNote,
  deleteNote,
  updateNote,
};
