import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import womanImage from '../assets/woman.jpg';
import northernImage from '../assets/Northern.webp';
import manImage from '../assets/man.webp';
import marketImage from '../assets/market.jpeg';

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
    <div className="relative w-full h-screen overflow-hidden">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        showArrows={true}
        showStatus={false}
        transitionTime={500}
        className="w-full h-full"
      >
        {carouselItems.map((item, index) => (
          <div key={index} className="relative w-full h-full">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
              style={{ height: '100vh' }} // Ensure image takes full viewport height
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-gray-900 bg-opacity-50 text-white p-6 text-center">
              <h2 className="text-4xl font-bold mb-4">{item.title}</h2>
              <p className="text-lg">{item.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
