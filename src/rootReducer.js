const INITIAL_STATE = {
  memes: [{
    id: 123,
    imageUrl: "http://quicklol.com/wp-content/uploads/2013/02/shutup-and-take-my-money-meme-template.jpg",
    topText: "Meme Generator",
    botText: "Shut up and take my money"
  },
  {
    id: 1223,
    imageUrl: "http://quicklol.com/wp-content/uploads/2013/02/shutup-and-take-my-money-meme-template.jpg",
    topText: "Meme Generator",
    botText: "Shut up and take my money"
  }]
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        memes: [...state.memes, action.payload]
      };
    case 'REMOVE':
      return {
        ...state,
        memes: state.memes.filter(meme => meme.id !== action.payload)
      };
    default:
      return state;
  };
}

export default rootReducer