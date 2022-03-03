import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BiLike } from 'react-icons/bi';

const SinglePost = () => {
  const [post, setPost] = useState([]);
  const [likes, setLikes] = useState(0);
  const { id } = useParams();

  const url = `http://localhost:5000/api/v1/posts/${id}`;

  const fetchPost = useCallback(async () => {
    const response = await axios.get(url);
    const { data } = response;
    setPost(data[0]);
    setLikes(data[0].likes);
  }, [url]);

  const handleLike = async () => {
    setLikes(likes + 1);
    await axios.put(url, { likes: likes + 1 });
  };

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  const { date_posted, post_text, title, user_name } = post;

  return (
    <article className='singlePost'>
      <h1 className='title singlePost-title'>{title}</h1>
      <h5>
        {user_name} {date_posted}
      </h5>
      <p>{post_text}</p>
      <div className='like'>
        <span>{likes}</span>
        <button className='btn-like' onClick={handleLike}>
          <BiLike />
        </button>
      </div>
    </article>
  );
};

export default SinglePost;
