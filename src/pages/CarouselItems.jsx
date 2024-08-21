import React, { useState, useEffect } from 'react';
import tomato from '../assets/tomato.webp';
import salad from '../assets/salad.webp';
import vegetable from '../assets/vegetable.jpeg';
import pepper from '../assets/pepper.webp';
import mart from '../assets/mart.jpeg';
import laitua from '../assets/laitua.jpeg';
import ginger from '../assets/ginger.jpeg';
import mango from '../assets/mango-8283268_1280.webp';
import carrot from '../assets/carot.jpeg';
import tomatomato from '../assets/tomatomato.webp';

const images = [
  { src: tomato, name: 'Tomato', price: 'GHS 10' },
  { src: salad, name: 'Salad', price: 'GHS 15' },
  { src: vegetable, name: 'Vegetable', price: 'GHS 12' },
  { src: pepper, name: 'Pepper', price: 'GHS 8' },
  { src: mart, name: 'Mart', price: 'GHS 20' },
  { src: laitua, name: 'Laitus', price: 'GHS 18' },
  { src: ginger, name: 'Ginger', price: 'GHS 25' },
  { src: mango, name: 'Mango', price: 'GHS 7' },
  { src: carrot, name: 'Carrot', price: 'GHS 5' },
  { src: tomatomato, name: 'Tomato', price: 'GHS 22' }
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const numberOfImages = images.length;
  const visibleImages = 5; // Show 5 images at a time
  const gap = 10; // Gap between images in pixels

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % numberOfImages);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? numberOfImages - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === numberOfImages - visibleImages) {
          return 0; // Reset to the first image when reaching the end
        }
        return prevIndex + 1; // Move to the next image
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, [numberOfImages]);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '300px',
        overflow: 'hidden',
        border: '1px solid #ddd',
        boxSizing: 'border-box'
      }}
    >
      <div
        style={{
          display: 'flex',
          transition: 'transform 0.5s ease',
          transform: `translateX(-${currentIndex * (100 / visibleImages)}%)`,
          height: '100%',
          boxSizing: 'border-box'
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              flex: `0 0 ${100 / visibleImages}%`, // Show 5 images at a time
              boxSizing: 'border-box',
              padding: `0 ${gap / 2}px`,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end'
            }}
          >
            <img
              src={image.src}
              alt={`Slide ${index}`}
              style={{
                width: '100%',
                height: '80%',
                objectFit: 'cover',
                display: 'block',
                border: 'none'
              }}
            />
            <div
              style={{
                background: 'linear-gradient(0deg, rgba(255, 165, 0, 0.6), rgba(0, 128, 0, 0.6))',
                color: '#FFFFFF',
                textAlign: 'center',
                padding: '5px',
                fontSize: '0.9rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
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
          cursor: 'pointer',
          zIndex: 1
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
          cursor: 'pointer',
          zIndex: 1
        }}
      >
        &gt;
      </button>
    </div>
  );
};

export default ImageCarousel;
