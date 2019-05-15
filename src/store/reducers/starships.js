const starships = (state = [], action) => {
  switch (action.type) {
    case "SET_STARSHIPS":
      return action.starships;
    default:
      return state;
  }
};

export default starships;
