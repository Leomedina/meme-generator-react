import React from 'react';
import './styles/App.css';
import MemeFormHandler from './components/MemeFormHandler';
import Memes from './components/Memes';

function App() {
  const dispatch = useDispatch();

  const addMeme = (imageUrl, topText, botText) => {
    dispatch({ type: "ADD", payload: { imageUrl, topText, botText } });
  };

  return (
    <div className="App">
      <h1>Meme Generator</h1>
      <MemeFormHandler addMeme={addMeme} />
      <Memes />
    </div>
  );
}

export default App;
