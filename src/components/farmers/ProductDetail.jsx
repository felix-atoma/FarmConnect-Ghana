// src/components/ProduceDetails.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import { produceData } from '../data/produceData';

const ProduceDetails = () => {
  const { produceName } = useParams();
  const details = produceData[decodeURIComponent(produceName)] || { categories: [], prices: {} };

  return (
    <div style={{ padding: '20px' }}>
      <h1>{produceName}</h1>
      <h2>Categories:</h2>
      <ul>
        {details.categories.length > 0 ? (
          details.categories.map((category, index) => (
            <li key={index}>{category}</li>
          ))
        ) : (
          <li>No categories available</li>
        )}
      </ul>
      <h2>Prices:</h2>
      <ul>
        {Object.entries(details.prices).length > 0 ? (
          Object.entries(details.prices).map(([category, price], index) => (
            <li key={index}>{category}: {price}</li>
          ))
        ) : (
          <li>No price information available</li>
        )}
      </ul>
    </div>
  );
};

export default ProduceDetails;
