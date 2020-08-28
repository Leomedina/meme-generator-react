import React from 'react';
import { useDispatch } from 'react-redux';
import MemeForm from './MemeForm';


function MemeFormHandler() {
  const INITIAL_FORM_VALUE = { imageUrl: '', topText: '', botText: '' };
  const dispatch = useDispatch();

  const addMeme = () => {
    dispatch({ type: "ADD", payload: "Meme2"});
  };

  return (
    <MemeForm initialFormData={INITIAL_FORM_VALUE} addMeme={addMeme} />
  )
}

export default MemeFormHandler;