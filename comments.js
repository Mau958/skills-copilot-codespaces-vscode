// Create web server
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const bodyParser = require('body-parser');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Comments array to store comments
let comments = [];

// Endpoint to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Endpoint to add a comment
app.post('/comments', (req, res) => {
  const { name, comment } = req.body;
  if (!name || !comment) {
    return res.status(400).json({ error: 'Name and comment are required' });
  }
  const newComment = { name, comment };
  comments.push(newComment);
  res.status(201).json(newComment);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});