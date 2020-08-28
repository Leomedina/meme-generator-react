import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/Memes.css';

function Memes() {
  const memes = useSelector(store => store.memes);
  console.log(memes);

  return (
    <div className="Memes">
      <p>{memes}</p>
    </div>
  )
};

export default Memes;