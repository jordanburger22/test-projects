const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const fs = require('fs'); // Import the fs module

const app = express();

// Create the uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Connect to MongoDB
mongoose.connect('mongodb+srv://jordanburger22:6a2B0fDAm4QQWZpv@cluster0.fhwflo4.mongodb.net/', { useNewUrlParser: true });

// Define the Post model
const PostSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: {
    type: String,
    default: null
  },
});

const Post = mongoose.model('Post', PostSchema);

// Define the Multer upload middleware
const upload = multer({
  storage: multer.diskStorage({
    destination: uploadsDir, // Use the uploadsDir as the destination
    filename: (req, file, cb) => {
      // Remove the ".jpg" extension from the filename
      const originalFilenameWithoutExtension = path.parse(file.originalname).name;
      cb(null, originalFilenameWithoutExtension);
    }
  })
});

// Define the routes
app.post('/api/posts', upload.single('image'), (req, res) => {
  // Create a new post
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
    image: req.file.filename
  });

  // Save the post to the database
  post.save((err) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error creating post');
    } else {
      res.send('Post created successfully!');
    }
  });
});

app.get('/api/posts', async (req, res) => {
  // Get all posts from the database
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching posts');
  }
});

// Start the server
const PORT = 3005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

