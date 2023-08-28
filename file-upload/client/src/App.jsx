import React, { useState, useEffect } from 'react';
import axios from 'axios';

const proxy = {
  '/api': {
    target: 'http://localhost:3001',
    changeOrigin: true,
    pathRewrite: {
      '^/api/uploads': '/uploads'
    }
  }
};

function App() {
  const [newPost, setNewPost] = useState({
    title: '',
    description: '',
    image: null,
  });
  const [posts, setPosts] = useState([]);

  const createPost = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', newPost.title);
    formData.append('description', newPost.description);
    formData.append('image', newPost.image);

    await axios.post('/api/posts', formData);

    setNewPost({
      title: '',
      description: '',
      image: null,
    });

    await fetchPosts();
  };

  const fetchPosts = async () => {
    const response = await axios.get('/api/posts');
    setPosts(response.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleImageChange = (event) => {
    setNewPost((prevState) => ({
      ...prevState,
      image: event.target.files[0],
    }));
  };

  return (
    <div>
      <h1>My Posts App</h1>

      <form onSubmit={createPost}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          required
          value={newPost.title}
          onChange={(e) =>
            setNewPost((prevState) => ({ ...prevState, title: e.target.value }))
          }
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          required
          value={newPost.description}
          onChange={(e) =>
            setNewPost((prevState) => ({
              ...prevState,
              description: e.target.value,
            }))
          }
        />

        <label htmlFor="image">Image:</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />

        <button type="submit">Create Post</button>
      </form>

      {posts.length > 0 && (
        <div>
          <h2>Posts:</h2>
          <ul>
            {posts.map((post) => (
              <li key={post._id}>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                {post.image && (
                  <img src={proxy.pathname + `/uploads/${post.image}.jpg`} alt="My Image" />
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;