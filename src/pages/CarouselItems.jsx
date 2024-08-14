import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import womanImage from '../assets/woman.jpg';
import northernImage from '../assets/Northern.webp';
import manImage from '../assets/man.webp';
import marketImage from '../assets/womanatfarm.jpg';

const carouselItems = [
  {
    image: womanImage,
    title: 'Improved Market Access for Farmers',
    description: 'FarmConnect Ghana bridges the gap between farmers and buyers, offering a platform where farmers can showcase their produce to a broader audience.',
  },
  {
    image: northernImage,
    title: 'Increased Efficiency and Transparency',
    description: 'Digitize your agricultural transactions with FarmConnect Ghana. Update product listings in real-time, negotiate directly with buyers, and enjoy a more transparent and efficient buying and selling process.',
  },
  {
    image: manImage,
    title: 'Empowerment of Smallholder Farmers',
    description: 'FarmConnect Ghana provides smallholder farmers with access to vital market information, educational resources, and opportunities to expand their reach.',
  },
  {
    image: marketImage,
    title: 'Support for Economic Growth and Development',
    description: 'By facilitating better market access and higher profitability for farmers, FarmConnect Ghana contributes to overall economic growth and development.',
  }
];

const CarouselComponent = () => {
  return (
    <div style={{ 
      position: 'relative', 
      width: '100%', 
      height: '100vh', // Full viewport height
      overflow: 'hidden' 
    }}>
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        showArrows={true}
        showStatus={false}
        transitionTime={500}
        style={{ width: '100%', height: '100%' }}
      >
        {carouselItems.map((item, index) => (
          <div 
            key={index} 
            style={{ 
              position: 'relative', 
              width: '100%', 
              height: '100vh' // Full viewport height
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover' // Cover the container
              }}
            />
            <div 
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                color: 'white',
                padding: '20px',
                textAlign: 'center'
              }}
            >
              <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '20px' }}>{item.title}</h2>
              <p style={{ fontSize: '18px', margin: '0' }}>{item.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
