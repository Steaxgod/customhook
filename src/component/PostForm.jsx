import React, { useState } from 'react';
import PostingForm from './PostingForm';
import { useFetch } from '../hooks/useFetch';

function PostForm() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

  const [postData, setPostData] = useState(null);

  const handlePostSubmit = async (formData) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    const data = await response.json();
    setPostData(data);
  };

  return (
    <div>
      <h2>Post Form</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <PostingForm users={data} onPost={handlePostSubmit} />
      )}
      {postData && (
        <div>
          <h3>Posted data:</h3>
          <p>Title: {postData.title}</p>
          <p>Body: {postData.body}</p>
        </div>
      )}
    </div>
  );
}

export default PostForm;
