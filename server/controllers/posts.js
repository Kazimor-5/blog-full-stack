const db = require('../config/db');

const getAllPosts = (req, res) => {
  db.query('SELECT * FROM posts', (err, result) => {
    if (err) {
      console.log(err);
    }

    res.send(result);
  });
};

const createPost = (req, res) => {
  const username = req.body.userName;
  const title = req.body.title;
  const text = req.body.text;

  db.query(
    `INSERT INTO posts (title, post_text, user_name) VALUE(?,?,?)`,
    [title, text, username],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    }
  );
  res.json(req.body);
};

const getPost = (req, res) => {
  const { id } = req.params;

  db.query('SELECT * FROM posts where id = ?', id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
};

const deletePost = (req, res) => {
  const { id } = req.params;

  db.query('DELETE FROM posts WHERE id = ?', id, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });

  res.end();
};

const likePost = (req, res) => {
  const { id } = req.params;
  db.query(
    'UPDATE posts SET likes = likes + 1 WHERE id = ?',
    id,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    }
  );
  res.end();
};

module.exports = {
  getAllPosts,
  createPost,
  getPost,
  deletePost,
  likePost,
};
