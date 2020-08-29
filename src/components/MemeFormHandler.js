import React from 'react';
import { useDispatch } from 'react-redux';
import MemeForm from './MemeForm';


function MemeFormHandler({ addMeme }) {
  const INITIAL_FORM_VALUE = { imageUrl: '', topText: '', botText: '' };

  return (
    <MemeForm initialFormData={INITIAL_FORM_VALUE} addMeme={addMeme} />
  )
}

export default MemeFormHandler;