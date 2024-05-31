const Get = async (url) => {
  return await globalThis.fetch(url).then((response) => response.json());
};

const Post = async (url, bodyConfig) => {
  const response = await globalThis.fetch(url, bodyConfig);
  return response.json();
};

const Delete = async (url) => {
  const response = await globalThis.fetch(url, {
    method: "DELETE",
  });
  return response.json();
};

const Update = async (url, updatedNote) => {
  const response = await globalThis.fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedNote),
  });
  return response.json();
};

export const http = {
  Get,
  Post,
  Delete,
  Update,
};
