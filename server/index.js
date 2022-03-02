const express = require('express');
const app = express();
const cors = require('cors');

const posts = require('./routes/posts');

const PORT = 5000;

app.use(express.json());
app.use(cors());
app.use('/api/v1/posts', posts);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
