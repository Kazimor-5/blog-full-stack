import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import MainPage from './MainPage';
import SinglePost from './SinglePost';
import CreatePost from './CreatePost';

const App = () => {
  return (
    <Router>
      <nav>
        <Link to='/'>Main Posts</Link>
        <Link to='/create-post'>Create Post</Link>
      </nav>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path='/create-post' element={<CreatePost />} />
        <Route path='/post/:id' element={<SinglePost />} />
      </Routes>
    </Router>
  );
};

export default App;
