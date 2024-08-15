// src/components/ProduceList.js

import React, { useEffect, useState } from 'react';
import { fetchProduceData } from '../../services/Api'

const ProduceList = () => {
  const [produceData, setProduceData] = useState({});

  useEffect(() => {
    const getProduceData = async () => {
      const data = await fetchProduceData();
      setProduceData(data);
    };

    getProduceData();
  }, []);

  return (
    <div>
      <h1>Produce List</h1>
      <ul>
        {Object.keys(produceData).map((produceName) => (
          <li key={produceName}>
            <h2>{produceName}</h2>
            <ul>
              {produceData[produceName].categories.map((category) => (
                <li key={category}>
                  {category}: {produceData[produceName].prices[category]}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProduceList;
