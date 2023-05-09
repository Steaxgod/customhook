import { useState } from 'react';
import axios from 'axios';

const baseUrl = 'http://localhost:3000';

export const usePost = (url) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const postData = async (postData) => {
    setLoading(true);
    try {
      const response = await axios.post(`${baseUrl}/${url}`, postData);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { postData, data, loading, error };
};