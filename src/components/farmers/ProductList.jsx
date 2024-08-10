// src/components/ProduceDetail.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import { produceData } from '../customers/ProduceData';

const ProduceDetail = () => {
    const { id } = useParams(); // Get the ID from the URL
    const produce = produceData[id];

    if (!produce) {
        return <div>Produce not found</div>;
    }

    return (
        <div>
            <h1>{id}</h1>
            {/* Render details for the produce item */}
            <ul>
                {Object.keys(produce.categories).map((category) => (
                    <li key={category}>
                        <strong>{category}</strong>: {produce.prices[category]}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProduceDetail;
