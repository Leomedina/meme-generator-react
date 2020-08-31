import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/Memes.css';

function Memes() {
  const memes = useSelector(store => store.memes);
  const dispatch = useDispatch();


  const deleteMeme = (id) => {
    dispatch({ type: "REMOVE", payload: id })
  };

  return (
    <div className="Memes" >
      {memes.map(meme => {
        return (
          <div
            className="Wrapper"
            style={{ backgroundImage: `url("${meme.imageUrl}")` }}
            onClick={() => deleteMeme(meme.id)}
            id={meme.id}
          >
            <p className="topTxt">{meme.topText}</p>
            <p className="botTxt">{meme.botText}</p>
          </div>
        )
      })}
    </div>
  )
};

export default Memes;