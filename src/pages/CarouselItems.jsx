import React, { useState, useEffect } from 'react';
import tomato from '../assets/tomato.webp';
import salad from '../assets/salad.webp';
import vegetable from '../assets/vegetable.jpeg';
import pepper from '../assets/pepper.webp';
import mart from '../assets/mart.jpeg';
import laitua from '../assets/laitua.jpeg';
import ginger from '../assets/ginger.jpeg';
import cucumber from '../assets/cocumber.jpeg';
import carrot from '../assets/carot.jpeg';
import tomatomato from '../assets/tomatomato.webp';

const images = [
  { src: tomato, name: 'Tomato', price: 'GHS 10' },
  { src: salad, name: 'Salad', price: 'GHS 15' },
  { src: vegetable, name: 'Vegetable', price: 'GHS 12' },
  { src: pepper, name: 'Pepper', price: 'GHS 8' },
  { src: mart, name: 'Mart', price: 'GHS 20' },
  { src: laitua, name: 'Laitua', price: 'GHS 18' },
  { src: ginger, name: 'Ginger', price: 'GHS 25' },
  { src: cucumber, name: 'Cucumber', price: 'GHS 7' },
  { src: carrot, name: 'Carrot', price: 'GHS 5' },
  { src: tomatomato, name: 'Tomato Tomato', price: 'GHS 22' }
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const numberOfImages = images.length;
  const visibleImages = 5;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % numberOfImages);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % numberOfImages);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? numberOfImages - 1 : prevIndex - 1
    );
  };

  return (
    <div style={{ 
      position: 'relative', 
      width: '100%', 
      height: '300px', // Adjust the height as needed
      overflow: 'hidden',
      border: '1px solid #ddd',
      boxSizing: 'border-box'
    }}>
      <div style={{
        display: 'flex',
        transition: 'transform 0.5s ease',
        transform: `translateX(-${(currentIndex * 100) / visibleImages}%)`,
        height: '100%', // Ensures the inner container covers the full height
        boxSizing: 'border-box'
      }}>
        {images.map((image, index) => (
          <div key={index} style={{
            flex: `0 0 ${100 / visibleImages}%`, // Show 5 images at a time
            boxSizing: 'border-box',
            padding: '5px',
            height: '100%', // Ensures the image container covers the full height
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end' // Align content to the bottom
          }}>
            <img src={image.src} alt={`Slide ${index}`} style={{
              width: '100%',
              height: '80%', // Adjust to leave space for text
              objectFit: 'cover',
              display: 'block',
              border: 'none'
            }} />
            <div style={{
              background: 'linear-gradient(0deg, rgba(255, 165, 0, 0.6), rgba(0, 128, 0, 0.6))', // Gradient from orange to green
              color: '#FFFFFF',
              textAlign: 'center',
              padding: '5px',
              fontSize: '0.9rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <span>{image.name}</span>
              <span>{image.price}</span>
            </div>
          </div>
        ))}
      </div>
      <button 
        onClick={handlePrev}
        style={{ 
          position: 'absolute', 
          left: '10px', 
          top: '50%', 
          transform: 'translateY(-50%)',
          backgroundColor: '#71B34A',
          color: '#FFFFFF',
          border: 'none',
          padding: '10px',
          cursor: 'pointer'
        }}
      >
        &lt;
      </button>
      <button 
        onClick={handleNext}
        style={{ 
          position: 'absolute', 
          right: '10px', 
          top: '50%', 
          transform: 'translateY(-50%)',
          backgroundColor: '#71B34A',
          color: '#FFFFFF',
          border: 'none',
          padding: '10px',
          cursor: 'pointer'
        }}
      >
        &gt;
      </button>
    </div>
  );
};

export default ImageCarousel;
