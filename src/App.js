import React from 'react';
import MemeFormHandler from './components/MemeFormHandler';
import Memes from './components/Memes';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>Meme Generator</h1>
      <MemeFormHandler />
      <Memes />
    </div>
  );
}

export default App;
