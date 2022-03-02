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
    <form onSubmit={handleSubmit}>
      <h3>Create Post</h3>
      <div>
        <label>user name</label>
        <input
          type='text'
          name='name'
          value={value.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>title</label>
        <input
          type='text'
          name='title'
          value={value.title}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>text</label>
        <textarea
          cols='30'
          rows='10'
          name='text'
          value={value.text}
          onChange={handleChange}
        ></textarea>
      </div>

      <button type='submit'>create</button>
    </form>
  );
};

export default CreatePost;
