const express = require('express');
const router = express.Router();
const {
  getAllPosts,
  createPost,
  getPost,
  deletePost,
  likePost,
} = require('../controllers/posts');

router.route('/').get(getAllPosts).post(createPost);
router.route('/:id').get(getPost).delete(deletePost).put(likePost);

module.exports = router;
