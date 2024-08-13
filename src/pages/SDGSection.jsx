import React, { useState } from 'react';
import { FaLeaf, FaWater, FaSun, FaRecycle, FaHeartbeat, FaBuilding, FaUsers, FaSchool, FaHandsHelping, FaMapMarkedAlt, FaChild, FaDollarSign, FaHandHoldingUsd, FaHandHoldingHeart, FaBook } from 'react-icons/fa'; // Correct icons

const SDGsSection = () => {
  // List of all SDGs with their icons and descriptions
  const sdgData = [
    { id: 1, icon: <FaLeaf />, title: 'No Poverty', description: 'End poverty in all its forms everywhere.' },
    { id: 2, icon: <FaHeartbeat />, title: 'Zero Hunger', description: 'End hunger, achieve food security and improved nutrition, and promote sustainable agriculture.' },
    { id: 3, icon: <FaWater />, title: 'Good Health and Well-being', description: 'Ensure healthy lives and promote well-being for all at all ages.' },
    { id: 4, icon: <FaSchool />, title: 'Quality Education', description: 'Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.' },
    { id: 5, icon: <FaHandsHelping />, title: 'Gender Equality', description: 'Achieve gender equality and empower all women and girls.' },
    { id: 6, icon: <FaSun />, title: 'Clean Water and Sanitation', description: 'Ensure availability and sustainable management of water and sanitation for all.' },
    { id: 7, icon: <FaRecycle />, title: 'Affordable and Clean Energy', description: 'Ensure access to affordable, reliable, sustainable, and modern energy for all.' },
    { id: 8, icon: <FaBuilding />, title: 'Decent Work and Economic Growth', description: 'Promote sustained, inclusive, and sustainable economic growth, full and productive employment, and decent work for all.' },
    { id: 9, icon: <FaUsers />, title: 'Industry, Innovation, and Infrastructure', description: 'Build resilient infrastructure, promote inclusive and sustainable industrialization, and foster innovation.' },
    { id: 10, icon: <FaMapMarkedAlt />, title: 'Reduced Inequality', description: 'Reduce inequality within and among countries.' },
    { id: 11, icon: <FaChild />, title: 'Sustainable Cities and Communities', description: 'Make cities and human settlements inclusive, safe, resilient, and sustainable.' },
    { id: 12, icon: <FaDollarSign />, title: 'Responsible Consumption and Production', description: 'Ensure sustainable consumption and production patterns.' },
    { id: 13, icon: <FaHandHoldingUsd />, title: 'Climate Action', description: 'Take urgent action to combat climate change and its impacts.' },
    { id: 14, icon: <FaHandHoldingHeart />, title: 'Life Below Water', description: 'Conserve and sustainably use the oceans, seas, and marine resources for sustainable development.' },
    { id: 15, icon: <FaBook />, title: 'Life on Land', description: 'Protect, restore, and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss.' },
    { id: 16, icon: <FaUsers />, title: 'Peace, Justice, and Strong Institutions', description: 'Promote peaceful and inclusive societies for sustainable development, provide access to justice for all, and build effective, accountable, and inclusive institutions at all levels.' },
    { id: 17, icon: <FaHandHoldingHeart />, title: 'Partnerships for the Goals', description: 'Strengthen the means of implementation and revitalize the global partnership for sustainable development.' }
  ];

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(sdgData.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = sdgData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div style={{ padding: '20px' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        flexWrap: 'wrap',
        marginBottom: '20px'
      }}>
        {currentItems.map(sdg => (
          <div
            key={sdg.id}
            style={{
              width: '200px',
              height: '200px',
              backgroundColor: '#F7931E', // Orange background by default
              borderRadius: '8px',
              color: '#FFFFFF',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.3s',
              cursor: 'pointer',
              textAlign: 'center',
              padding: '20px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              overflow: 'hidden' // Ensure content doesn't overflow
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#71B34A'} // Green on hover
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F7931E'} // Revert to orange on mouse leave
          >
            <div style={{ fontSize: '3rem', marginBottom: '10px' }}>
              {sdg.icon}
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '5px', wordBreak: 'break-word', margin: '0 auto' }}>
              {sdg.title}
            </h3>
            <p style={{ fontSize: '0.9rem', wordBreak: 'break-word', margin: '0 auto' }}>
              {sdg.description}
            </p>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            style={{
              backgroundColor: currentPage === index + 1 ? '#F7931E' : '#71B34A',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '4px',
              padding: '10px 20px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SDGsSection;
