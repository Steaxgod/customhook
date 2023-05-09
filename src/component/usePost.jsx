import { useState, useCallback } from 'react';

const usePost = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (url, method = 'POST', data = null) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const responseData = await response.json();
      setIsLoading(false);

      return responseData;
    } catch (err) {
      setIsLoading(false);
      setError(err.message || 'Something went wrong!');
      throw err;
    }
  }, []);

  return { isLoading, error, sendRequest };
};

export default usePost;
