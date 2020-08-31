import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/Memes.css';

function Memes() {
  const memes = useSelector(store => store.memes);
  const dispatch = useDispatch();


  const deleteMeme = (event) => {
    if (event.target.tagName === "IMG" || event.target.tagName === "P" || event.target.tagName === "Div") {
      event.target.parentElement.remove();
      dispatch({ type: "REMOVE", payload: parseInt(event.target.parentElement.id) })
      console.log(memes);
    };
  };

  return (
    <div className="Memes" >
      {memes.map(meme => {
        return (
          <div
            className="Wrapper"
            style={{ backgroundImage: `url("${meme.imageUrl}")` }}
            onClick={deleteMeme}
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