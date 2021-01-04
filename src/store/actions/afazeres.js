export const addAfazer = (newDescription, textButton, id) => ({
  type: "ADD_AFAZER",
  payload: { newDescription, textButton, id },
});

export const removeAfazer = (id) => ({
  type: "REMOVE_AFAZER",
  payload: { id },
});
