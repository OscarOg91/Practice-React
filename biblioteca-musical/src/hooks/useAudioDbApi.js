import { useState, useEffect } from 'react';
import { fetchWithFallback } from '../utils/apiUtils';

const useAudioDbApi = (artistName) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!artistName) {
      setData(null);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        console.log('Fetching albums for:', artistName);
        const result = await fetchWithFallback(artistName);
        setData(result.data);
        console.log('Successfully fetched data using proxy', result.proxyUsed + 1);
      } catch (err) {
        console.error('All proxies failed:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [artistName]);

  const refetch = () => {
    if (artistName) {
      const fetchData = async () => {
        setLoading(true);
        setError(null);
        
        try {
          const result = await fetchWithFallback(artistName);
          setData(result.data);
        } catch (err) {
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

export default useAudioDbApi;