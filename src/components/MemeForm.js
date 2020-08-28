import React, { useState } from 'react';

function MemeForm() {
  const INITIAL_VALUE = { imageUrl: '', topText: '', botText: '' };
  const [formData, setFormData] = useState(INITIAL_VALUE);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData(data => ({
      ...data,
      [name]: value
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted");
    setFormData(INITIAL_VALUE);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="url"
        name="imageUrl"
        placeholder="Image URl"
        value={formData.imageUrl}
        onChange={handleChange}
      />
      <input
        type="text"
        name="topText"
        placeholder="Top Text"
        value={formData.topText}
        onChange={handleChange}
      />
      <input
        type="text"
        name="botText"
        placeholder="Bottom Text"
        value={formData.bopText}
        onChange={handleChange}
      />
      <button>Submit!</button>
    </form>
  )
};


export default MemeForm;