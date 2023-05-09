import React, { useState } from 'react';
import Form from '../src/component/Form';
import PostList from '../src/component/PostList';
import '../src/index.css';

function App() {
  const [posts, setPosts] = useState([]);

  // Добавляем новый пост в список постов
  const addPost = (postData) => {
    const newPost = { title: postData.title, body: postData.body };
    setPosts([...posts, newPost]);
  };

  return (
    <div className="flform">
      <h1>My Blog</h1>
      <Form onSubmit={addPost} />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
