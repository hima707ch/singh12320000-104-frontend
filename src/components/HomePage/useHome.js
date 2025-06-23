import { useState } from 'react';

const useHome = () => {
  const [searchParams, setSearchParams] = useState({
    location: '',
    minPrice: '',
    maxPrice: '',
    type: ''
  });

  const handleSearch = async (params) => {
    try {
      const queryString = new URLSearchParams(params).toString();
      const response = await fetch(`/api/properties/search?${queryString}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Search error:', error);
      return { error: 'Failed to search properties' };
    }
  };

  const handleContact = async (type) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type,
          timestamp: new Date().toISOString()
        })
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Contact error:', error);
      return { error: 'Failed to submit contact request' };
    }
  };

  return {
    searchParams,
    setSearchParams,
    handleSearch,
    handleContact
  };
};

export default useHome;