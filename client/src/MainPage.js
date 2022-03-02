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
        const { id, title, user_name, likes } = post;

        return (
          <article key={id}>
            <h2 onClick={() => navigate(`/post/${id}`)}>{title}</h2>
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
