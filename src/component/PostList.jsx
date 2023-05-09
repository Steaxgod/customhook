import React, { useState } from 'react';

function PostList(props) {
  const [posts, setPosts] = useState(props.posts);

  // Обновляем список постов, когда получаем новые данные
  if (props.posts !== posts) {
    setPosts(props.posts);
  }

  return (
    <ul>
      {posts.map((post, index) => (
        <li key={index}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}

export default PostList;
