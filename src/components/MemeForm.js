import React, { useState } from 'react';
import '../styles/Form.css';

function MemeForm({ initialFormData, addMeme }) {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData(data => ({
      ...data,
      [name]: value
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addMeme();
    setFormData(initialFormData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="url"
        name="imageUrl"
        placeholder="Image URl"
        value={formData.imageUrl}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="topText"
        placeholder="Top Text"
        value={formData.topText}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="botText"
        placeholder="Bottom Text"
        value={formData.botText}
        onChange={handleChange}
        required
      />
      <button>Submit!</button>
    </form>
  )
};


export default MemeForm;