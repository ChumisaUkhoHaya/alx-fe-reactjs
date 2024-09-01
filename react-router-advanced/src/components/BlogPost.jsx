// src/components/BlogPost.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { postId } = useParams();

  return <div>Blog Post {postId} Content</div>;
}

export default BlogPost;
