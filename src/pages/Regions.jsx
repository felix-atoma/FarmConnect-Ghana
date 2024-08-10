import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdSearch } from 'react-icons/md';

const regions = [
    {
        name: 'Greater Accra Region',
        coordinates: { lat: 5.6037, lng: -0.1870 },
        districts: [
          { name: 'Accra', coordinates: { lat: 5.6037, lng: -0.1870 } },
          { name: 'Tema', coordinates: { lat: 5.6666, lng: -0.0167 } },
          { name: 'Gbawe', coordinates: { lat: 5.5600, lng: -0.2136 } },
          { name: 'Adenta', coordinates: { lat: 5.6622, lng: -0.1615 } },
        ],
      },
      {
        name: 'Ashanti Region',
        coordinates: { lat: 6.6882, lng: -1.6232 },
        districts: [
          { name: 'Kumasi', coordinates: { lat: 6.6882, lng: -1.6232 } },
          { name: 'Obuasi', coordinates: { lat: 6.2053, lng: -1.6735 } },
          { name: 'Konongo', coordinates: { lat: 6.6494, lng: -1.1810 } },
          { name: 'Kumawu', coordinates: { lat: 6.6860, lng: -1.3808 } },
        ],
      },
      {
        name: 'Eastern Region',
        coordinates: { lat: 6.1890, lng: -0.8180 },
        districts: [
          { name: 'Koforidua', coordinates: { lat: 6.1018, lng: -0.2662 } },
          { name: 'Suhum', coordinates: { lat: 6.1291, lng: -0.2258 } },
          { name: 'Nkawkaw', coordinates: { lat: 6.1280, lng: -0.7214 } },
          { name: 'Bunso', coordinates: { lat: 6.2204, lng: -0.6827 } },
        ],
      },
      {
        name: 'Central Region',
        coordinates: { lat: 5.5976, lng: -0.4086 },
        districts: [
          { name: 'Cape Coast', coordinates: { lat: 5.1058, lng: -1.2470 } },
          { name: 'Elmina', coordinates: { lat: 5.0877, lng: -1.3528 } },
          { name: 'Winneba', coordinates: { lat: 5.3514, lng: -0.6110 } },
          { name: 'Ajumako', coordinates: { lat: 5.4588, lng: -0.5837 } },
        ],
      },
      {
        name: 'Western Region',
        coordinates: { lat: 5.1898, lng: -2.6910 },
        districts: [
          { name: 'Takoradi', coordinates: { lat: 4.8945, lng: -1.7614 } },
          { name: 'Sekondi', coordinates: { lat: 4.9340, lng: -1.7055 } },
          { name: 'Shama', coordinates: { lat: 5.0937, lng: -1.8751 } },
          { name: 'Axim', coordinates: { lat: 4.9718, lng: -2.2584 } },
        ],
      },
      {
        name: 'Western North Region',
        coordinates: { lat: 7.4151, lng: -2.0122 },
        districts: [
          { name: 'Sefwi Wiawso', coordinates: { lat: 6.7886, lng: -2.0615 } },
          { name: 'Bibiani', coordinates: { lat: 6.2360, lng: -2.3285 } },
          { name: 'Enchi', coordinates: { lat: 6.0197, lng: -2.2477 } },
          { name: 'Sefwi Bekwai', coordinates: { lat: 6.6225, lng: -2.3478 } },
        ],
      },
      {
        name: 'Northern Region',
        coordinates: { lat: 9.4024, lng: -0.8328 },
        districts: [
          { name: 'Tamale', coordinates: { lat: 9.4074, lng: -0.8460 } },
          { name: 'Yendi', coordinates: { lat: 9.4582, lng: -0.0242 } },
          { name: 'Gushegu', coordinates: { lat: 9.2914, lng: -0.5838 } },
          { name: 'Bimbilla', coordinates: { lat: 9.0783, lng: -0.8510 } },
        ],
      },
      {
        name: 'Upper East Region',
        coordinates: { lat: 10.0553, lng: -0.5978 },
        districts: [
          { name: 'Bolgatanga', coordinates: { lat: 10.7747, lng: -0.8555 } },
          { name: 'Bawku', coordinates: { lat: 11.0047, lng: -0.4287 } },
          { name: 'Zebilla', coordinates: { lat: 10.6197, lng: -0.1703 } },
          { name: 'Navrongo', coordinates: { lat: 10.8712, lng: -0.5716 } },
        ],
      },
      {
        name: 'Upper West Region',
        coordinates: { lat: 10.1780, lng: -1.1600 },
        districts: [
          { name: 'Wa', coordinates: { lat: 10.0513, lng: -1.5611 } },
          { name: 'Tumu', coordinates: { lat: 10.2511, lng: -1.5728 } },
          { name: 'Nandom', coordinates: { lat: 10.3938, lng: -1.4424 } },
          { name: 'Lambussie', coordinates: { lat: 10.4497, lng: -1.2112 } },
        ],
      },
      {
        name: 'Volta Region',
        coordinates: { lat: 7.1400, lng: 0.3870 },
        districts: [
          { name: 'Ho', coordinates: { lat: 7.0330, lng: 0.5012 } },
          { name: 'Keta', coordinates: { lat: 5.9213, lng: 0.9840 } },
          { name: 'Denu', coordinates: { lat: 5.9413, lng: 1.1143 } },
          { name: 'Kpando', coordinates: { lat: 7.1057, lng: 0.4765 } },
        ],
      },
      {
        name: 'Oti Region',
        coordinates: { lat: 7.4754, lng: 0.5971 },
        districts: [
          { name: 'Dambai', coordinates: { lat: 7.4555, lng: 0.6152 } },
          { name: 'Nkwanta', coordinates: { lat: 7.2258, lng: 0.7202 } },
          { name: 'Bimbila', coordinates: { lat: 7.1460, lng: 0.7632 } },
          { name: 'Kadjebi', coordinates: { lat: 7.2522, lng: 0.3984 } },
        ],
      },
      {
        name: 'Bono East Region',
        coordinates: { lat: 7.5301, lng: -0.6971 },
        districts: [
          { name: 'Techiman', coordinates: { lat: 7.3701, lng: -0.6831 } },
          { name: 'Kintampo', coordinates: { lat: 8.1615, lng: -1.6463 } },
          { name: 'Nkoranza', coordinates: { lat: 7.4167, lng: -0.6653 } },
          { name: 'Prang', coordinates: { lat: 7.7886, lng: -0.9890 } },
        ],
      },
      {
        name: 'North East Region',
        coordinates: { lat: 10.0677, lng: -0.6510 },
        districts: [
          { name: 'Walewale', coordinates: { lat: 10.2083, lng: -0.7440 } },
          { name: 'Bunkpurugu', coordinates: { lat: 10.6261, lng: -0.9734 } },
          { name: 'Chereponi', coordinates: { lat: 10.1411, lng: -0.3984 } },
          { name: 'Nalerigu', coordinates: { lat: 10.3681, lng: -0.7203 } },
        ],
      },
      {
        name: 'Western Region',
        coordinates: { lat: 5.1898, lng: -2.6910 },
        districts: [
          { name: 'Takoradi', coordinates: { lat: 4.8945, lng: -1.7614 } },
          { name: 'Sekondi', coordinates: { lat: 4.9340, lng: -1.7055 } },
          { name: 'Shama', coordinates: { lat: 5.0937, lng: -1.8751 } },
          { name: 'Axim', coordinates: { lat: 4.9718, lng: -2.2584 } },
        ],
      },
      {
        name: 'Western North Region',
        coordinates: { lat: 7.4151, lng: -2.0122 },
        districts: [
          { name: 'Sefwi Wiawso', coordinates: { lat: 6.7886, lng: -2.0615 } },
          { name: 'Bibiani', coordinates: { lat: 6.2360, lng: -2.3285 } },
          { name: 'Enchi', coordinates: { lat: 6.0197, lng: -2.2477 } },
          { name: 'Sefwi Bekwai', coordinates: { lat: 6.6225, lng: -2.3478 } },
        ],
      },
      {
        name: 'Bono Region',
        coordinates: { lat: 7.5301, lng: -0.6971 },
        districts: [
          { name: 'Techiman', coordinates: { lat: 7.3701, lng: -0.6831 } },
          { name: 'Kintampo', coordinates: { lat: 8.1615, lng: -1.6463 } },
          { name: 'Nkoranza', coordinates: { lat: 7.4167, lng: -0.6653 } },
          { name: 'Prang', coordinates: { lat: 7.7886, lng: -0.9890 } },
        ],
      },
      {
        name: 'Northern Region',
        coordinates: { lat: 9.4024, lng: -0.8328 },
        districts: [
          { name: 'Tamale', coordinates: { lat: 9.4074, lng: -0.8460 } },
          { name: 'Yendi', coordinates: { lat: 9.4582, lng: -0.0242 } },
          { name: 'Gushegu', coordinates: { lat: 9.2914, lng: -0.5838 } },
          { name: 'Bimbilla', coordinates: { lat: 9.0783, lng: -0.8510 } },
        ],
      },
      {
        name: 'Upper East Region',
        coordinates: { lat: 10.0553, lng: -0.5978 },
        districts: [
          { name: 'Bolgatanga', coordinates: { lat: 10.7747, lng: -0.8555 } },
          { name: 'Bawku', coordinates: { lat: 11.0047, lng: -0.4287 } },
          { name: 'Zebilla', coordinates: { lat: 10.6197, lng: -0.1703 } },
          { name: 'Navrongo', coordinates: { lat: 10.8712, lng: -0.5716 } },
        ],
      },
      {
        name: 'Upper West Region',
        coordinates: { lat: 10.1780, lng: -1.1600 },
        districts: [
          { name: 'Wa', coordinates: { lat: 10.0513, lng: -1.5611 } },
          { name: 'Tumu', coordinates: { lat: 10.2511, lng: -1.5728 } },
          { name: 'Nandom', coordinates: { lat: 10.3938, lng: -1.4424 } },
          { name: 'Lambussie', coordinates: { lat: 10.4497, lng: -1.2112 } },
        ],
      },
];

const Regions = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRegion, setFilteredRegion] = useState(null);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    
    const regionWithDistrict = regions.find(region =>
      region.districts.some(district => district.name.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    setFilteredRegion(regionWithDistrict || null);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#EAF4F0' }}>
      <h2>All Ghana</h2>

      <div style={{
        backgroundColor: '#71B34A',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <form onSubmit={handleSearchSubmit} style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#FFFFFF',
          padding: '10px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          width: '80%',
          maxWidth: '600px',
        }}>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search for a district or town..."
            style={{
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ddd',
              flex: '1',
              borderColor: '#71B34A'
            }}
          />
          <button
            type="submit"
            style={{
              padding: '10px',
              backgroundColor: '#71B34A',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              marginLeft: '10px',
            }}
          >
            <MdSearch size={20} style={{ marginRight: '5px' }} />
            Search
          </button>
        </form>
      </div>

      {filteredRegion ? (
        <div>
          <h3>{filteredRegion.name}</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {filteredRegion.districts.map((district, index) => (
              <li key={index} style={{ marginBottom: '10px' }}>
                <Link to={`/regions/${filteredRegion.name.replace(/\s+/g, '%20')}/${district.name.replace(/\s+/g, '%20')}`} style={{ textDecoration: 'none', color: '#71B34A', fontWeight: 'bold' }}>
                  {district.name}
                </Link>
                <p style={{ margin: '5px 0', color: '#555' }}>
                  Coordinates: {district.coordinates.lat.toFixed(4)}, {district.coordinates.lng.toFixed(4)}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {regions.filter(region => region.name.toLowerCase().includes(searchQuery.toLowerCase())).map((region, index) => (
            <li key={index} style={{ marginBottom: '20px' }}>
              <Link to={`/regions/${region.name.replace(/\s+/g, '%20')}`} style={{ textDecoration: 'none', color: '#71B34A', fontWeight: 'bold' }}>
                {region.name}
              </Link>
              <p style={{ margin: '5px 0', color: '#555' }}>
                Coordinates: {region.coordinates.lat.toFixed(4)}, {region.coordinates.lng.toFixed(4)}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Regions;
