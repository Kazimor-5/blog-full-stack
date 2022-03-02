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
    <div>
      {posts.map((post) => {
        const { id, title, post_text, user_name, likes } = post;

        return (
          <article key={id} onClick={() => navigate(`/post/${id}`)}>
            <h1>{title}</h1>
            <p>{post_text}</p>
            <h4>{user_name}</h4>
            <span>{likes}</span>
            <button>like</button>
          </article>
        );
      })}
    </div>
  );
};

export default MainPage;
