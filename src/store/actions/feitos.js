export const finalizaAfazer = (text) => ({
  type: "FINISH_AFAZER",
  payload: { text },
});

export const removeFeito = (id) => ({
  type: "REMOVE_AFAZER",
  payload: { id },
});

export const editaFeito = (id, text) => ({
  type: "EDIT_AFAZER",
  payload: { id, text },
});
