const player = name => (state = { rounds: [] }, action) => {
  switch (action.type) {
    case name + "_SET_NAME":
      return {
        ...state,
        name: action.name
      };
    case name + "_ADD_ROUND":
      return {
        ...state,
        rounds: [...state.rounds, {...action.round, round: state.rounds.length+1}]
      };
    case "RESET":
      return {
        ...state,
        rounds: []
      };
    default:
      return state;
  }
};

export default player;
