import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchSearchResults } from '../services/Search';

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const searchQuery = queryParams.get('query') || '';
  const category = queryParams.get('category') || '';
  const description = queryParams.get('description') || '';
  const minPrice = queryParams.get('minPrice') || '';
  const maxPrice = queryParams.get('maxPrice') || '';
  const sortOrder = queryParams.get('sortOrder') || 'asc';

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetchSearchResults({
          searchQuery,
          category,
          description,
          minPrice,
          maxPrice,
          sortOrder,
        });
        setResults(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchResults();
  }, [searchQuery, category, description, minPrice, maxPrice, sortOrder]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Search Results</h1>
      <ul>
        {results.map(result => (
          <li key={result.id}>
            <h2>{result.name}</h2>
            <p>{result.description}</p>
            <p>Price: {result.price}</p>
            <p>Category: {result.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
