import React from 'react';
import { useDispatch } from 'react-redux';
import MemeFormHandler from './components/MemeFormHandler';
import Memes from './components/Memes';
import './styles/App.css';

function App() {
  const dispatch = useDispatch();

  const addMeme = (imageUrl, topText, botText) => {
    console.log(imageUrl, topText, botText)
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
