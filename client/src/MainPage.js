import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const fetchPosts = async () => {
    const { data } = await axios.get('http://localhost:5000/api/v1/posts');
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className='container'>
      {posts.map((post) => {
        const { id, title, user_name, likes } = post;

        return (
          <article className='post' key={id}>
            <h2
              className='title post-title'
              onClick={() => navigate(`/post/${id}`)}
            >
              {title}
            </h2>
            <h4 className='title'>{user_name}</h4>
            <span className='number-like'>Likes: {likes}</span>
          </article>
        );
      })}
    </div>
  );
};

export default MainPage;
