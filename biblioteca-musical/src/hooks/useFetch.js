import { useState, useEffect } from 'react';

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        console.log('Fetching URL:', url);
        const response = await fetch(url, options);
        
        console.log('Response status:', response.status);
        console.log('Response headers:', response.headers);
        
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
        }
        
        const result = await response.json();
        console.log('API Response:', result);
        setData(result);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options]);

  const refetch = () => {
    if (url) {
      const fetchData = async () => {
        setLoading(true);
        setError(null);
        
        try {
          console.log('Refetching URL:', url);
          const response = await fetch(url, options);
          
          console.log('Refetch Response status:', response.status);
          
          if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
          }
          
          const result = await response.json();
          console.log('Refetch API Response:', result);
          setData(result);
        } catch (err) {
          console.error('Refetch error:', err);
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  };

  return { data, loading, error, refetch };
};

export default useFetch;