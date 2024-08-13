import React from 'react';

// Correct import paths and extensions
import bananaImg from '../assets/banana.jpg';
import customersImg from '../assets/customers.webp'; // Correct extension
import farmerImg from '../assets/farmer-agrocenta-p-800.webp';
import cornImg from '../assets/corn.jpg';
import ladyImg from '../assets/LadyImage2.jpg';
import marketImg from '../assets/market.jpeg';
import groundnutImg from '../assets/Groundnut.webp';
import manImg from '../assets/man.webp';
import fruitImg from '../assets/fruitImage.jpg';

const testimonials = [
  { image: bananaImg, name: 'Alice Anaba', testimony: 'FarmConnect has significantly increased my market reach. Now I can connect with buyers from different regions!' },
  { image: customersImg, name: 'Bob Atongo', testimony: 'The app’s transparency in pricing and direct communication with farmers is a game-changer for sourcing quality produce.' },
  { image: farmerImg, name: 'Charlie Kumi', testimony: 'FarmConnect’s user-friendly interface and market insights have made it easier for me to manage my farm and find new buyers.' },
  { image: cornImg, name: 'Dana Asamoah', testimony: 'I appreciate the direct communication with farmers. It makes negotiating prices and arranging deliveries much simpler.' },
  { image: ladyImg, name: 'Eva Quaye', testimony: 'The app’s diverse product listings and search functionalities save me a lot of time in sourcing produce for my business.' },
  { image: marketImg, name: 'Frank Akologo', testimony: 'FarmConnect provides valuable market data that helps me make better decisions about what crops to grow and when to sell.' },
  { image: groundnutImg, name: 'Grace Bawa', testimony: 'The transparency in product information and pricing ensures that I’m always getting fair deals on the produce I buy.' },
  { image: manImg, name: 'Henry Nimako', testimony: 'The ease of finding specific products and communicating directly with sellers has greatly improved my purchasing process.' },
  { image: fruitImg, name: 'Ivy Doe', testimony: 'FarmConnect has expanded my market reach and increased my sales by connecting me with buyers I wouldn’t have reached otherwise.' },
  { image: customersImg, name: 'Jack Atoma', testimony: 'The app’s features for real-time updates and direct communication have streamlined my farm’s operations significantly.' },
];

const Testimonials = () => {
  return (
    <div style={{ backgroundColor: '#FFFFFF', paddingTop: '40px', paddingBottom: '40px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1 style={{ color: '#71B34A', fontSize: '40px', marginBottom: '20px' }}>What They Say</h1>
      </div>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '8px'
      }}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              height: '280px',
              width: '240px',
              backgroundColor: '#71B34A',
              border: '1px solid #71B34A',
              borderRadius: '8px',
              transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out',
              paddingTop: '15px',
              cursor: 'pointer',
              overflow: 'hidden',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#F7931E';
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#71B34A';
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
            }}
          >
            <div style={{ padding: '10px' }}>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '50%' }}
              />
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '10px 20px',
              textAlign: 'center',
              color: '#FFFFFF'
            }}>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#FFFFFF' }}>{testimonial.name}</h3>
              <p style={{ fontSize: '14px', marginTop: '10px', lineHeight: '1.4' }}>{testimonial.testimony}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
