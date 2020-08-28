const INITIAL_STATE = { memes: ["meme"] }

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        memes: [...state.memes, action.payload]
      };
    default:
      return state;
  };
}

export default rootReducer