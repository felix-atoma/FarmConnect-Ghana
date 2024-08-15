import React, { useState, useEffect } from 'react';

const DatabaseImagesSection = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/images`);
        if (response.ok) {
          const data = await response.json();
          setImages(data);
        } else {
          console.error('Failed to fetch images');
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.url} // Adjust according to your API response
          alt={image.description} // Adjust according to your API response
          style={{ width: '100%', maxWidth: '400px', borderRadius: '8px', objectFit: 'cover' }}
        />
      ))}
    </div>
  );
};

export default DatabaseImagesSection;
