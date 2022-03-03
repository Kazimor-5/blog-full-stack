import axios from 'axios';
import { useState } from 'react';

const CreatePost = () => {
  const [value, setValue] = useState({ name: '', title: '', text: '' });

  const handleChange = (e) => {
    const val = e.target.name;
    setValue({ ...value, [val]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, title, text } = value;

    if (name && title && text) {
      await axios.post('http://localhost:5000/api/v1/posts', {
        userName: name,
        title,
        text,
      });
    }
    setValue({ name: '', title: '', text: '' });
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <h3 className='title'>Create Post</h3>
      <div className='form-row'>
        <label className='form-label'>user name</label>
        <input
          className='form-input'
          type='text'
          name='name'
          value={value.name}
          onChange={handleChange}
        />
      </div>

      <div className='form-row'>
        <label className='form-label'>title</label>
        <input
          className='form-input'
          type='text'
          name='title'
          value={value.title}
          onChange={handleChange}
        />
      </div>

      <div className='form-row'>
        <label className='form-label'>text</label>
        <textarea
          className='form-textarea'
          cols='30'
          rows='10'
          name='text'
          value={value.text}
          onChange={handleChange}
        ></textarea>
      </div>

      <button className='btn btn-block' type='submit'>
        create
      </button>
    </form>
  );
};

export default CreatePost;
