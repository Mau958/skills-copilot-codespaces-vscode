// Create web server  
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/comments', { useNewUrlParser: true, useUnifiedTopology: true });

// Comment schema
const commentSchema = new mongoose.Schema({
  name: String,
  comment: String,
});

// Comment model
const Comment = mongoose.model('Comment', commentSchema);

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the comments API!');
});