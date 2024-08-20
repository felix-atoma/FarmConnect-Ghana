import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UnifiedSearchComponent from '../pages/UnfiedSearchComponent';
import ImageCarousel from '../pages/CarouselItems'; // Ensure this component is correctly implemented
import { FaMapMarkerAlt, FaCartPlus, FaHeart, FaInfoCircle } from 'react-icons/fa';
import Support from '../pages/Support'

// Example images for the carousel with correct import
import tomato from '../assets/tomato.webp';
import salad from '../assets/salad.webp';
import vegetable from '../assets/vegetable.jpeg';
import pepper from '../assets/pepper.webp';
import mart from '../assets/mart.jpeg';
import laitua from '../assets/laitua.jpeg';
import ginger from '../assets/ginger.jpeg';
import mango from '../assets/mango-8283268_1280.webp'; // Fixed typo
import carrot from '../assets/carot.jpeg'; // Fixed typo
import tomatomato from '../assets/tomatomato.webp';

// Fruits images
import banana from '../assets/bananas-8364511_640.webp';
import tangerine from '../assets/tangerine-8886641_640.webp'; // Fixed typo
import pineapple from '../assets/pineapple-8134236_640.jpg';
import custard from '../assets/custard-apple-8818055_640.webp';
import watermelon from '../assets/watermelon-8283269_640.jpg';
import strawberry from '../assets/strawberry-5213787_640.jpg';
import orange from '../assets/oranges-8193789_640.jpg';

// Vegetables images
import savoy from '../assets/savoy-4637421_640.jpg';
import mint from '../assets/mint-5229226_640.jpg';
import tomatoes from '../assets/tomatoes-7433786_640.jpg'; // Fixed typo
import pumpkin from '../assets/pumpkins-8317227_640.jpg'; // Fixed typo
import pepperImg from '../assets/pepper-4721896_640.jpg'; // Renamed to avoid conflict
import garlic from '../assets/garlic-1238337_640.jpg';
import bellpepper from '../assets/bell-pepper-2179100_640.jpg';
import cucumberImg from '../assets/cucumber.jpeg'; // Fixed typo
import ginger2 from '../assets/ginger.jpeg';
import carrotImg from '../assets/carrots-673184_640.jpg'; // Renamed to avoid conflict

// Roots and tubers images
import yam from '../assets/yam-5318942_1280.jpg';
import yam2 from '../assets/yam-1650131_640.jpg';
import sweet from '../assets/sweet-potato-8964275_640.jpg';
import yuca from '../assets/yuca-1353258_1280.jpg';
import yam3 from '../assets/yam-69543_1280.jpg';
import ghana from '../assets/ghana.jpeg';
import ghanayam from '../assets/ghanayamcase_890x.webp';

// Cereals and grains images
import grains from '../assets/grain-563128_640.jpg';
import beans from '../assets/beans-2606866_1280.jpg';
import beans2 from '../assets/beans-8147491_1280.webp';
import seed from '../assets/seeds-5388208_640.jpg';
import rice from '../assets/rice-2061877_1280.jpg';
import roasted from '../assets/roasted-coffee-6853956_1280.jpg';
import sorghum from '../assets/images.jpeg';

// Legumes images
import peas from '../assets/peas-512254_640.jpg';
import coriander from '../assets/coriander-6476225_640.jpg'; // Fixed typo
import chives from '../assets/chives-8231068_640.jpg';
import beans3 from '../assets/beans-3399804_640.jpg';
import beans34 from '../assets/bean-3239827_640.jpg'; // Fixed typo

// Herbs and spices images
import spice1 from '../assets/spice-7385163_640.jpg';
import spice2 from '../assets/spice-8699560_640.jpg';
import spice3 from '../assets/spices-2548653_640.jpg';
import spice4 from '../assets/onions-4681577_640.jpg';
import spice5 from '../assets/garlic-139659_640.jpg';

// Nuts and seeds images
import nut1 from '../assets/peanuts-1850809_640.jpg';
import nut2 from '../assets/nuts-3248743_640.jpg';
import nut3 from '../assets/hazelnuts-3783066_640.jpg';
import nut4 from '../assets/group-oil-palm-fruits-on-260nw-1219139275.webp';
import nut5 from '../assets/cores-73915_640.jpg';
import nut6 from '../assets/anacardium-3523449_640.jpg';
import nut7 from '../assets/images (3).jpeg';

// Animal products images
import animal1 from '../assets/images (1).jpeg';
import animal2 from '../assets/images (2).jpeg';
import animal3 from '../assets/isolated-4992733_1280.webp';
import animal4 from '../assets/Guinea-Fowls.jpg';
import animal5 from '../assets/fish-3088483_1280-1024x682.jpg';
import animal6 from '../assets/eggs-3183410_1280.jpg';
import animal7 from '../assets/eggs-7396087_640.jpg';
import animal8 from '../assets/beef-cut.jpg';

// Dairy products images
import dairy1 from '../assets/yogurt-1442034_1280.jpg';
import dairy2 from '../assets/images (5).jpeg';
import dairy3 from '../assets/images (4).jpeg'; // Renamed to avoid conflict




const carouselImages = [
  tomato,
  salad,
  vegetable,
  pepper,
  mart,
  laitua,
  ginger,
  mango,
  carrot,
  tomatomato
];

const products = [
  // Fruits
  { name: 'Banana', price: 'GHS 5', image: banana },
  { name: 'Tangerine', price: 'GHS 8', image: tangerine },
  { name: 'Pineapple', price: 'GHS 10', image: pineapple },
  { name: 'Custard Apple', price: 'GHS 12', image: custard },
  { name: 'Watermelon', price: 'GHS 7', image: watermelon },
  { name: 'Strawberry', price: 'GHS 15', image: strawberry },
  { name: 'Orange', price: 'GHS 6', image: orange },

  // Vegetables
  { name: 'Savoy Cabbage', price: 'GHS 20', image: savoy },
  { name: 'Mint', price: 'GHS 10', image: mint },
  { name: 'Tomatoes', price: 'GHS 12', image: tomatoes },
  { name: 'Pumpkin', price: 'GHS 15', image: pumpkin },
  { name: 'Pepper', price: 'GHS 8', image: pepperImg },
  { name: 'Garlic', price: 'GHS 5', image: garlic },
  { name: 'Bell Pepper', price: 'GHS 10', image: bellpepper },
  { name: 'Cucumber', price: 'GHS 5', image: cucumberImg },
  { name: 'Ginger', price: 'GHS 20', image: ginger2 },
  { name: 'Carrot', price: 'GHS 7', image: carrotImg },

  // Roots and Tubers
  { name: 'Yam', price: 'GHS 30', image: yam },
  { name: 'Yam', price: 'GHS 25', image: yam2 },
  { name: 'Sweet Potato', price: 'GHS 18', image: sweet },
  { name: 'cassava', price: 'GHS 20', image: yuca },
  { name: 'Yam', price: 'GHS 28', image: yam3 },
  { name: ' Yam', price: 'GHS 35', image: ghana },
  { name: 'Yam', price: 'GHS 40', image: ghanayam },

  // Cereals and Grains
  { name: 'Grains', price: 'GHS 22', image: grains },
  { name: 'Beans', price: 'GHS 20', image: beans },
  { name: 'Beans', price: 'GHS 18', image: beans2 },
  { name: 'Seed', price: 'GHS 30', image: seed },
  { name: 'Rice', price: 'GHS 35', image: rice },
  { name: 'Roasted Coffee', price: 'GHS 45', image: roasted },
  { name: 'Sorghum', price: 'GHS 25', image: sorghum },

  // Legumes
  { name: 'Peas', price: 'GHS 15', image: peas },
  { name: 'Coriander', price: 'GHS 12', image: coriander },
  { name: 'Chives', price: 'GHS 10', image: chives },
  { name: 'Beans', price: 'GHS 18', image: beans3 },
  { name: 'Beans', price: 'GHS 22', image: beans34 },

  // Herbs and Spices
  { name: 'Spice', price: 'GHS 30', image: spice1 },
  { name: 'Spice', price: 'GHS 28', image: spice2 },
  { name: 'Spices', price: 'GHS 25', image: spice3 },
  { name: 'Onions', price: 'GHS 15', image: spice4 },
  { name: 'Garlic', price: 'GHS 12', image: spice5 },

  // Nuts and Seeds
  { name: 'Peanuts', price: 'GHS 20', image: nut1 },
  { name: 'Nuts', price: 'GHS 18', image: nut2 },
  { name: 'Hazelnuts', price: 'GHS 25', image: nut3 },
  { name: 'Palm Fruits', price: 'GHS 30', image: nut4 },
  { name: 'Cores', price: 'GHS 35', image: nut5 },
  { name: 'Cashew Nuts', price: 'GHS 40', image: nut6 },
  { name: 'Mixed Nuts', price: 'GHS 45', image: nut7 },

  // Animal Products
  { name: 'Chicken', price: 'GHS 60', image: animal1 },
  { name: 'Chicken', price: 'GHS 50', image: animal2 },
  { name: 'cheese', price: 'GHS 40', image: animal3 },
  { name: 'Guinea Fowl', price: 'GHS 55', image: animal4 },
  { name: 'Fresh Fish', price: 'GHS 70', image: animal5 },
  { name: ' Organic Eggs', price: 'GHS 25', image: animal6 },
  { name: 'Eggs', price: 'GHS 20', image: animal7 },
  { name: 'Beef Cut', price: 'GHS 80', image: animal8 },

  // Dairy Products
  { name: 'Yogurt', price: 'GHS 30', image: dairy1 },
  { name: 'Milk', price: 'GHS 25', image: dairy2 },
  { name: 'Cheese', price: 'GHS 35', image: dairy3 }
];

const Home = () => {
  
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeIcon, setActiveIcon] = useState(null);
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    navigate(`/category/${category}`);
  };

  const handleSearch = (filters) => {
    const query = new URLSearchParams({
      query: filters.searchQuery,
      category: filters.category || selectedCategory, // Use selectedCategory if filters.category is undefined
      description: filters.description,
      minPrice: filters.minPrice,
      maxPrice: filters.maxPrice,
      sortOrder: filters.sortOrder
    }).toString();

    navigate(`/search?${query}`);
  };

  const handleIconClick = (iconType) => {
    setActiveIcon(iconType);
    navigate('/register');
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.querySelector('.icon-overlay').style.opacity = '1';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.querySelector('.icon-overlay').style.opacity = '0';
  };

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);


  return (
    <div style={{ 
       backgroundColor: '#FFFFFF', 
      minHeight: '100vh',
      padding: '20px'
    }}>
      <style>{`
        @keyframes dance {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(10deg); }
          50% { transform: rotate(-10deg); }
          75% { transform: rotate(10deg); }
          100% { transform: rotate(0deg); }
        }
        .icon-overlay {
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.3);
        }
        .icon-overlay button {
          background: transparent;
          border: none;
          color: #FFFFFF;
          font-size: 1.5rem;
          margin: 5px;
          cursor: pointer;
          transition: color 0.3s ease, border 0.3s ease;
        }
        .icon-overlay button:hover {
          color: #71B34A;
          animation: dance 1s infinite;
          border: 2px solid #71B34A;
        }
        .product-card {
          position: relative;
          width: calc(20% - 20px);
          box-sizing: border-box;
          margin-bottom: 20px;
          overflow: hidden;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: transform 0.3s ease;
        }
        .product-card:hover {
          transform: scale(1.05);
        }
        .product-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        .product-info {
          padding: 10px;
          text-align: center;
          background: #FFFFFF;
          color: #000000; /* Text color set to black */
          font-size: 0.9rem;
        }
      `}</style>
      
      {/* Header with Full-Page Background Image */}
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', margin: '0', textAlign :'center' }}>
            Find Fresh Farm Produce & <br /> Get Them Directly From <br /> Farm To Your Kitchen
          </h1>
      <div style={{ 
        marginBottom: '20px',
        textAlign: 'center'
      }}>
        <UnifiedSearchComponent onSearch={handleSearch} />
      </div>
      {/* Carousel Component */}
      <div style={{ 
        marginBottom: '20px',
        border: '1px solid #ddd',
        boxSizing: 'border-box'
      }}>
        <ImageCarousel images={carouselImages} />
      </div>

     

      {/* Title and Category Links */}
      <div style={{ 
        textAlign: 'center',
        marginBottom: '20px'
      }}>
        <h2 style={{ 
          marginBottom: '20px',
          fontSize: '2rem'
        }}>Available Products</h2>
        <div>
          <a href="#all" style={{ 
            margin: '0 10px',
            textDecoration: 'none',
            color: 'black',
            fontSize: '1rem'
          }}>All</a>
          <a href="#category1" style={{ 
            margin: '0 10px',
            textDecoration: 'none',
            color: 'black',
            fontSize: '1rem'
          }}>Fruits</a>
          <a href="#category2" style={{ 
            margin: '0 10px',
            textDecoration: 'none',
            color: 'black',
            fontSize: '1rem'
          }}>Vegetables</a>
          <a href="#category3" style={{ 
            margin: '0 10px',
            textDecoration: 'none',
            color: 'black',
            fontSize: '1rem'
          }}>Roots and Tubers</a>
          <a href="#category4" style={{ 
            margin: '0 10px',
            textDecoration: 'none',
            color: 'black',
            fontSize: '1rem'
          }}>Cereals and grains</a>
          <a href="#category4" style={{ 
            margin: '0 10px',
            textDecoration: 'none',
            color: 'black',
            fontSize: '1rem'
          }}>Legumes</a>
          <a href="#category4" style={{ 
            margin: '0 10px',
            textDecoration: 'none',
            color: 'black',
            fontSize: '1rem'
          }}>Herbs and Spices</a>
          <a href="#category4" style={{ 
            margin: '0 10px',
            textDecoration: 'none',
            color: 'black',
            fontSize: '1rem'
          }}>Nuts and Seeds</a>
          <a href="#category4" style={{ 
            margin: '0 10px',
            textDecoration: 'none',
            color: 'black',
            fontSize: '1rem'
          }}>Animal producuct</a>
          <a href="#category4" style={{ 
            margin: '0 10px',
            textDecoration: 'none',
            color: 'black',
            fontSize: '1rem'
          }}>Dairy products</a>
          <a href="#category4" style={{ 
            margin: '0 10px',
            textDecoration: 'none',
            color: 'black',
            fontSize: '1rem'
          }}>Dairy products</a>
        </div>
        
      </div>

      {/* Product Image Cards */}
      <div 
        style={{ 
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between'
        }}
      >
        {products.map((product, index) => (
          <div 
            key={index} 
            className="product-card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
            <div className="icon-overlay">
              <button onClick={() => handleIconClick('cart')}>
                <FaCartPlus />
              
              </button>
              <button onClick={() => handleIconClick('heart')}>
                <FaHeart />
              </button>
              <button onClick={() => handleIconClick('info')}>
                <FaInfoCircle />
              </button>
            </div>
          </div>
        ))}
      </div>
      <Support/>
    </div>
  );
};

export default Home;
