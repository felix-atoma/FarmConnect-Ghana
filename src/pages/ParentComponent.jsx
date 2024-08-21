import React, { useState, useEffect } from 'react';
import UnifiedSearchComponent from './UnifiedSearchComponent';

// Sample product data
const initialItems = [
  { id: 1, name: 'Banana', type: 'Fruit', price: 3, quantity: '1 kg', description: 'Fresh bananas from the farm.', image: 'bananaImage', date: '2024-08-20' },
  { id: 2, name: 'Tangerine', type: 'Fruit', price: 4, quantity: '1 kg', description: 'Sweet and juicy tangerines.', image: 'tangerineImage', date: '2024-08-20' },
  { id: 3, name: 'Pineapple', type: 'Fruit', price: 5, quantity: '1 kg', description: 'Tropical pineapples, ripe and ready.', image: 'pineappleImage', date: '2024-08-20' },
  { id: 4, name: 'Custard Apple', type: 'Fruit', price: 6, quantity: '1 kg', description: 'Creamy custard apples, rich in flavor.', image: 'custardAppleImage', date: '2024-08-20' },
  { id: 5, name: 'Watermelon', type: 'Fruit', price: 3, quantity: '1 kg', description: 'Juicy watermelon slices, perfect for summer.', image: 'watermelonImage', date: '2024-08-20' },
  { id: 6, name: 'Strawberry', type: 'Fruit', price: 7, quantity: '1 kg', description: 'Fresh strawberries, sweet and tangy.', image: 'strawberryImage', date: '2024-08-20' },
  { id: 7, name: 'Orange', type: 'Fruit', price: 4, quantity: '1 kg', description: 'Citrusy oranges, perfect for juicing.', image: 'orangeImage', date: '2024-08-20' },
  { id: 8, name: 'Savoy Cabbage', type: 'Vegetable', price: 2, quantity: '1 kg', description: 'Crunchy savoy cabbage, ideal for salads.', image: 'savoyCabbageImage', date: '2024-08-20' },
  { id: 9, name: 'Mint', type: 'Vegetable', price: 1, quantity: '100 g', description: 'Fresh mint leaves, great for teas and garnishing.', image: 'mintImage', date: '2024-08-20' },
  { id: 10, name: 'Tomatoes', type: 'Vegetable', price: 3, quantity: '1 kg', description: 'Ripe tomatoes, versatile and flavorful.', image: 'tomatoesImage', date: '2024-08-20' },
  { id: 11, name: 'Pumpkin', type: 'Vegetable', price: 4, quantity: '1 piece', description: 'Hearty pumpkins, perfect for soups and pies.', image: 'pumpkinImage', date: '2024-08-20' },
  { id: 12, name: 'Bell Pepper', type: 'Vegetable', price: 3, quantity: '1 kg', description: 'Colorful bell peppers, sweet and crisp.', image: 'bellPepperImage', date: '2024-08-20' },
  { id: 13, name: 'Cucumber', type: 'Vegetable', price: 2, quantity: '1 kg', description: 'Fresh cucumbers, hydrating and crunchy.', image: 'cucumberImage', date: '2024-08-20' },
  { id: 14, name: 'Garlic', type: 'Vegetable', price: 6, quantity: '1 kg', description: 'Aromatic garlic cloves, essential for cooking.', image: 'garlicImage', date: '2024-08-20' },
  { id: 15, name: 'Yam', type: 'Root', price: 10, quantity: '1 piece', description: 'Starchy yams, a staple in many dishes.', image: 'yamImage', date: '2024-08-20' },
  { id: 16, name: 'Sweet Potato', type: 'Root', price: 8, quantity: '1 kg', description: 'Sweet potatoes, rich in vitamins.', image: 'sweetPotatoImage', date: '2024-08-20' },
  { id: 17, name: 'Yuca', type: 'Root', price: 7, quantity: '1 kg', description: 'Cassava root, versatile in many dishes.', image: 'yucaImage', date: '2024-08-20' },
  { id: 18, name: 'Rice', type: 'Grain', price: 5, quantity: '1 kg', description: 'Long grain rice, perfect for every meal.', image: 'riceImage', date: '2024-08-20' },
  { id: 19, name: 'Beans', type: 'Legume', price: 4, quantity: '1 kg', description: 'Protein-rich beans, great for stews.', image: 'beansImage', date: '2024-08-20' },
  { id: 20, name: 'Sorghum', type: 'Grain', price: 6, quantity: '1 kg', description: 'Sorghum grains, used in various recipes.', image: 'sorghumImage', date: '2024-08-20' },
  { id: 21, name: 'Peanuts', type: 'Nut', price: 3, quantity: '1 kg', description: 'Roasted peanuts, perfect for snacking.', image: 'peanutsImage', date: '2024-08-20' },
  { id: 22, name: 'Hazelnuts', type: 'Nut', price: 8, quantity: '1 kg', description: 'Crunchy hazelnuts, rich in flavor.', image: 'hazelnutsImage', date: '2024-08-20' },
  { id: 23, name: 'Beef Cut', type: 'Meat', price: 15, quantity: '1 kg', description: 'Fresh beef cuts, ready for grilling.', image: 'beefCutImage', date: '2024-08-20' },
  { id: 24, name: 'Fish', type: 'Seafood', price: 12, quantity: '1 kg', description: 'Fresh fish, perfect for frying or grilling.', image: 'fishImage', date: '2024-08-20' },
  { id: 25, name: 'Eggs', type: 'Dairy', price: 3, quantity: '12 pcs', description: 'Farm-fresh eggs, ideal for breakfast.', image: 'eggsImage', date: '2024-08-20' },
  { id: 26, name: 'Yogurt', type: 'Dairy', price: 4, quantity: '500 g', description: 'Creamy yogurt, available in various flavors.', image: 'yogurtImage', date: '2024-08-20' },
];

const ParentComponent = () => {
  const [items, setItems] = useState(initialItems);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    setFilteredItems(items); // Initialize filteredItems with all items on load
  }, [items]);

  const handleSearch = (filters) => {
    const { searchQuery, category, description, minPrice, maxPrice, sortOrder } = filters;

    const results = items.filter(item => {
      return (
        (searchQuery === '' || item.name.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (category === '' || item.type.toLowerCase() === category.toLowerCase()) &&
        (description === '' || item.description.toLowerCase().includes(description.toLowerCase())) &&
        (minPrice === '' || item.price >= parseFloat(minPrice)) &&
        (maxPrice === '' || item.price <= parseFloat(maxPrice))
      );
    });

    // Sort results
    results.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

    setFilteredItems(results);
  };

  return (
    <div>
      <UnifiedSearchComponent onSearch={handleSearch} />
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>
            {item.name} - {item.type} - {item.description} - GHS {item.price} - {item.quantity}
            <img src={item.image} alt={item.name} width="100" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParentComponent;
