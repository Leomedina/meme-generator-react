const INITIAL_STATE = { memes: '' }

function rootReducer(state = INITIAL_STATE, action) {
  switch(action.type){
    case 'ADD':
      return {...state, memes: state.memes + 1 }
    default:
      return state;
  };
};

export default rootReducer