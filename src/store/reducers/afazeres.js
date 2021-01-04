const INITIAL_STATE = [];

export default function afazeres(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_AFAZER":
      if (action.payload.textButton === "Adicionar") {
        return [
          ...state,
          {
            id: Math.random(),
            description: action.payload.newDescription,
          },
        ];
      } else {
        document.getElementById("addOuEdit").innerHTML = "Adicionar";

        document.getElementById("addOuEdit").value = "";

        // let i = 0;
        // state.map((aux) =>
        //   aux.id === id
        //     ? (state[i] = {
        //         id: aux.id,
        //         description: action.payload.newDescription,
        //       })
        //     : i++
        // );

        state.map((aux, indice) =>
          aux.id === action.payload.id
            ? state.splice(indice, 1, {
                id: action.payload.id,
                description: action.payload.newDescription,
              })
            : null
        );

        return [...state];
      }

    case "REMOVE_AFAZER":
      return state.filter((afazer) => afazer.id !== action.payload.id);

    default:
      return state;
  }
}
