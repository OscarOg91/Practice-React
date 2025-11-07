import React, { useState } from 'react';
import { audioDbApi, testDirectApi, fetchWithFallback } from '../utils/apiUtils';

const ApiTest = () => {
  const [testResult, setTestResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const testApiDirect = async () => {
    setIsLoading(true);
    setTestResult('Testing Direct API...');
    
    try {
      const testUrl = testDirectApi('Coldplay');
      console.log('Testing Direct URL:', testUrl);
      
      const response = await fetch(testUrl);
      console.log('Direct Test Response:', response);
      
      if (!response.ok) {
        setTestResult(`❌ Direct API HTTP Error: ${response.status} ${response.statusText}`);
        return;
      }
      
      const data = await response.json();
      console.log('Direct Test Data:', data);
      
      if (data && data.album && data.album.length > 0) {
        setTestResult(`✅ Direct API Working! Found ${data.album.length} albums for Coldplay`);
      } else {
        setTestResult('⚠️ Direct API responded but no albums found');
      }
      
    } catch (error) {
      console.error('Direct Test Error:', error);
      setTestResult(`❌ Direct API Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const testApiProxy = async () => {
    setIsLoading(true);
    setTestResult('Testing Proxy API...');
    
    try {
      const testUrl = audioDbApi.searchAlbums('Coldplay');
      console.log('Testing Proxy URL:', testUrl);
      
      const response = await fetch(testUrl);
      console.log('Proxy Test Response:', response);
      
      if (!response.ok) {
        setTestResult(`❌ Proxy API HTTP Error: ${response.status} ${response.statusText}`);
        return;
      }
      
      const data = await response.json();
      console.log('Proxy Test Data:', data);
      
      if (data && data.album && data.album.length > 0) {
        setTestResult(`✅ Proxy API Working! Found ${data.album.length} albums for Coldplay`);
      } else {
        setTestResult('⚠️ Proxy API responded but no albums found');
      }
      
    } catch (error) {
      console.error('Proxy Test Error:', error);
      setTestResult(`❌ Proxy API Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const testApiFallback = async () => {
    setIsLoading(true);
    setTestResult('Testing Fallback API System...');
    
    try {
      const result = await fetchWithFallback('Coldplay');
      console.log('Fallback Test Result:', result);
      
      if (result.data && result.data.album && result.data.album.length > 0) {
        setTestResult(`✅ Fallback API Working! Found ${result.data.album.length} albums using proxy ${result.proxyUsed + 1}`);
      } else {
        setTestResult('⚠️ Fallback API responded but no albums found');
      }
      
    } catch (error) {
      console.error('Fallback Test Error:', error);
      setTestResult(`❌ Fallback API Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ 
      padding: '20px', 
      border: '2px solid #ccc', 
      margin: '20px', 
      borderRadius: '8px',
      backgroundColor: '#f9f9f9'
    }}>
      <h3>API Connection Test</h3>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '10px', flexWrap: 'wrap' }}>
        <button 
          onClick={testApiDirect} 
          disabled={isLoading}
          style={{
            padding: '8px 16px',
            backgroundColor: '#ff9800',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            fontSize: '14px'
          }}
        >
          {isLoading ? 'Testing...' : 'Test Direct API'}
        </button>
        <button 
          onClick={testApiProxy} 
          disabled={isLoading}
          style={{
            padding: '8px 16px',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            fontSize: '14px'
          }}
        >
          {isLoading ? 'Testing...' : 'Test Proxy API'}
        </button>
        <button 
          onClick={testApiFallback} 
          disabled={isLoading}
          style={{
            padding: '8px 16px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            fontSize: '14px'
          }}
        >
          {isLoading ? 'Testing...' : 'Test Fallback System'}
        </button>
      </div>
      {testResult && (
        <div style={{ marginTop: '10px', padding: '10px', backgroundColor: 'white', borderRadius: '4px' }}>
          <strong>Result:</strong> {testResult}
        </div>
      )}
    </div>
  );
};

export default ApiTest;