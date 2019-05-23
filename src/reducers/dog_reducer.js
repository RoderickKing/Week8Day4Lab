const dogReducer = (state = { dogs: [] }, action) => {
  switch (action.type) {
    case "ADD_DOG":
      return { ...state, dogs: [...state.dogs, action.dogData] };
    case "SET_FLAG":
      return { ...state, breedFound: action.breedFound };
    default:
      return state;
  }
};

export default dogReducer;
