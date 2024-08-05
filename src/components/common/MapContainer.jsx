import React, { useState, useEffect } from 'react';

const MapContainer = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch('/api/locations');
        const data = await response.json();
        if (Array.isArray(data)) {
          setLocations(data);
        } else {
          console.error('Unexpected data format:', data);
        }
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    fetchLocations();
  }, []);

  if (!locations.length) {
    return <div>No locations available</div>;
  }

  return (
    <div>
      {locations.map(location => (
        <div key={location.id}>{location.name}</div>
      ))}
    </div>
  );
};

export default MapContainer;
