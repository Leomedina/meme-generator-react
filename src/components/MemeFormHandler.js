import React from 'react';
import { useDispatch } from 'react-redux';
import MemeForm from './MemeForm';


function MemeFormHandler() {
  const INITIAL_FORM_VALUE = { imageUrl: '', topText: '', botText: '' };
  const dispatch = useDispatch();

  //not a good way to generate new ids but I'm too lazy to import UUID right now.
  const addMeme = (imageUrl, topText, botText) => {
    const newId = Math.floor(Math.floor(Math.random() * 201));
    dispatch({ type: "ADD", payload: { id: newId, imageUrl, topText, botText } });
  };

  return (
    <MemeForm initialFormData={INITIAL_FORM_VALUE} addMeme={addMeme} />
  )
}

export default MemeFormHandler;