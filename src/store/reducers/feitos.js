const INITIAL_STATE = [];

export default function feitos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "FINISH_AFAZER":
      localStorage.setItem("@todolist", state);
      return [
        ...state,
        {
          id: Math.random(),
          description: action.payload.text,
        },
      ];

    case "REMOVE_AFAZER":
      return state.filter((feito) => feito.id !== action.payload.id);

    case "EDIT_AFAZER":
      document.getElementById("addOuEdit").innerHTML = "Adicionar";

      document.getElementById("addOuEdit").value = "";

      state.map((aux, indice) =>
        aux.id === action.payload.id
          ? state.splice(indice, 1, {
              id: action.payload.id,
              description: action.payload.text,
            })
          : null
      );

      return [...state];

    default:
      return state;
  }
}
