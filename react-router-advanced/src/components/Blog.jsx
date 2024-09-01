// src/components/Blog.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Blog() {
  // Example posts
  const posts = [
    { id: 1, title: 'First Post' },
    { id: 2, title: 'Second Post' }
  ];

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blog;
