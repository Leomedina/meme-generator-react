import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/Memes.css';

function Memes() {
  const memes = useSelector(store => store.memes);
  console.log(memes);

  return (
    <div className="Memes">
      {memes.map(meme => {
        return (
          <div className="Wrapper" style={{backgroundImage: `url("${meme.imageUrl}")`}}>
            <p className="topTxt">{meme.topText}</p>
            <p className="botTxt">{meme.botText}</p>
          </div>
        )
      })}
    </div>
  )
};

export default Memes;