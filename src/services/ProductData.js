import bananaImage from '../assets/bananas-8364511_640.webp';
import tangerineImage from '../assets/tangerine-8886641_640.webp';
import pineappleImage from '../assets/pineapple-8134236_640.jpg';
import custardAppleImage from '../assets/custard-apple-8818055_640.webp';
import watermelonImage from '../assets/watermelon-8283269_640.jpg';
import strawberryImage from '../assets/strawberry-5213787_640.jpg';
import orangeImage from '../assets/oranges-8193789_640.jpg';

import savoyCabbageImage from '../assets/savoy-4637421_640.jpg';
import mintImage from '../assets/mint-5229226_640.jpg';
import tomatoesImage from '../assets/tomatoes-7433786_640.jpg';
import pumpkinImage from '../assets/pumpkins-8317227_640.jpg';
import bellPepperImage from '../assets/bell-pepper-2179100_640.jpg';
import cucumberImage from '../assets/cucumber.jpeg';
import garlicImage from '../assets/garlic-1238337_640.jpg';

import yamImage from '../assets/yam-5318942_1280.jpg';
import sweetPotatoImage from '../assets/sweet-potato-8964275_640.jpg';
import yucaImage from '../assets/yuca-1353258_1280.jpg';

import riceImage from '../assets/rice-2061877_1280.jpg';
import beansImage from '../assets/beans-2606866_1280.jpg';
import sorghumImage from '../assets/images.jpeg';

import peanutsImage from '../assets/peanuts-1850809_640.jpg';
import hazelnutsImage from '../assets/hazelnuts-3783066_640.jpg';

import beefCutImage from '../assets/beef-cut.jpg';
import fishImage from '../assets/fish-3088483_1280-1024x682.jpg';
import eggsImage from '../assets/eggs-3183410_1280.jpg';

import yogurtImage from '../assets/yogurt-1442034_1280.jpg';

const productsData = [
  {
    id: 1,
    name: 'Banana',
    type: 'Fruit',
    price: 3,
    quantity: '1 kg',
    description: 'Fresh bananas from the farm.',
    image: bananaImage,
    date: '2024-08-20',
  },
  {
    id: 2,
    name: 'Tangerine',
    type: 'Fruit',
    price: 4,
    quantity: '1 kg',
    description: 'Sweet and juicy tangerines.',
    image: tangerineImage,
    date: '2024-08-20',
  },
  {
    id: 3,
    name: 'Pineapple',
    type: 'Fruit',
    price: 5,
    quantity: '1 kg',
    description: 'Tropical pineapples, ripe and ready.',
    image: pineappleImage,
    date: '2024-08-20',
  },
  {
    id: 4,
    name: 'Custard Apple',
    type: 'Fruit',
    price: 6,
    quantity: '1 kg',
    description: 'Creamy custard apples, rich in flavor.',
    image: custardAppleImage,
    date: '2024-08-20',
  },
  {
    id: 5,
    name: 'Watermelon',
    type: 'Fruit',
    price: 3,
    quantity: '1 kg',
    description: 'Juicy watermelon slices, perfect for summer.',
    image: watermelonImage,
    date: '2024-08-20',
  },
  {
    id: 6,
    name: 'Strawberry',
    type: 'Fruit',
    price: 7,
    quantity: '1 kg',
    description: 'Fresh strawberries, sweet and tangy.',
    image: strawberryImage,
    date: '2024-08-20',
  },
  {
    id: 7,
    name: 'Orange',
    type: 'Fruit',
    price: 4,
    quantity: '1 kg',
    description: 'Citrusy oranges, perfect for juicing.',
    image: orangeImage,
    date: '2024-08-20',
  },
  {
    id: 8,
    name: 'Savoy Cabbage',
    type: 'Vegetable',
    price: 2,
    quantity: '1 kg',
    description: 'Crunchy savoy cabbage, ideal for salads.',
    image: savoyCabbageImage,
    date: '2024-08-20',
  },
  {
    id: 9,
    name: 'Mint',
    type: 'Vegetable',
    price: 1,
    quantity: '100 g',
    description: 'Fresh mint leaves, great for teas and garnishing.',
    image: mintImage,
    date: '2024-08-20',
  },
  {
    id: 10,
    name: 'Tomatoes',
    type: 'Vegetable',
    price: 3,
    quantity: '1 kg',
    description: 'Ripe tomatoes, versatile and flavorful.',
    image: tomatoesImage,
    date: '2024-08-20',
  },
  {
    id: 11,
    name: 'Pumpkin',
    type: 'Vegetable',
    price: 4,
    quantity: '1 piece',
    description: 'Hearty pumpkins, perfect for soups and pies.',
    image: pumpkinImage,
    date: '2024-08-20',
  },
  {
    id: 12,
    name: 'Bell Pepper',
    type: 'Vegetable',
    price: 3,
    quantity: '1 kg',
    description: 'Colorful bell peppers, sweet and crisp.',
    image: bellPepperImage,
    date: '2024-08-20',
  },
  {
    id: 13,
    name: 'Cucumber',
    type: 'Vegetable',
    price: 2,
    quantity: '1 kg',
    description: 'Fresh cucumbers, hydrating and crunchy.',
    image: cucumberImage,
    date: '2024-08-20',
  },
  {
    id: 14,
    name: 'Garlic',
    type: 'Vegetable',
    price: 6,
    quantity: '1 kg',
    description: 'Aromatic garlic cloves, essential for cooking.',
    image: garlicImage,
    date: '2024-08-20',
  },
  {
    id: 15,
    name: 'Yam',
    type: 'Root',
    price: 10,
    quantity: '1 piece',
    description: 'Starchy yams, a staple in many dishes.',
    image: yamImage,
    date: '2024-08-20',
  },
  {
    id: 16,
    name: 'Sweet Potato',
    type: 'Root',
    price: 8,
    quantity: '1 kg',
    description: 'Sweet potatoes, rich in vitamins.',
    image: sweetPotatoImage,
    date: '2024-08-20',
  },
  {
    id: 17,
    name: 'Yuca',
    type: 'Root',
    price: 7,
    quantity: '1 kg',
    description: 'Cassava root, versatile in many dishes.',
    image: yucaImage,
    date: '2024-08-20',
  },
  {
    id: 18,
    name: 'Rice',
    type: 'Grain',
    price: 5,
    quantity: '1 kg',
    description: 'Long grain rice, perfect for every meal.',
    image: riceImage,
    date: '2024-08-20',
  },
  {
    id: 19,
    name: 'Beans',
    type: 'Legume',
    price: 4,
    quantity: '1 kg',
    description: 'Protein-rich beans, great for stews.',
    image: beansImage,
    date: '2024-08-20',
  },
  {
    id: 20,
    name: 'Sorghum',
    type: 'Grain',
    price: 6,
    quantity: '1 kg',
    description: 'Sorghum grains, used in various recipes.',
    image: sorghumImage,
    date: '2024-08-20',
  },
  {
    id: 21,
    name: 'Peanuts',
    type: 'Nut',
    price: 3,
    quantity: '1 kg',
    description: 'Roasted peanuts, perfect for snacking.',
    image: peanutsImage,
    date: '2024-08-20',
  },
  {
    id: 22,
    name: 'Hazelnuts',
    type: 'Nut',
    price: 8,
    quantity: '1 kg',
    description: 'Crunchy hazelnuts, rich in flavor.',
    image: hazelnutsImage,
    date: '2024-08-20',
  },
  {
    id: 23,
    name: 'Beef Cut',
    type: 'Meat',
    price: 15,
    quantity: '1 kg',
    description: 'Fresh beef cuts, ready for grilling.',
    image: beefCutImage,
    date: '2024-08-20',
  },
  {
    id: 24,
    name: 'Fish',
    type: 'Seafood',
    price: 12,
    quantity: '1 kg',
    description: 'Fresh fish, perfect for frying or grilling.',
    image: fishImage,
    date: '2024-08-20',
  },
  {
    id: 25,
    name: 'Eggs',
    type: 'Dairy',
    price: 3,
    quantity: '12 pcs',
    description: 'Farm-fresh eggs, ideal for breakfast.',
    image: eggsImage,
    date: '2024-08-20',
  },
  {
    id: 26,
    name: 'Yogurt',
    type: 'Dairy',
    price: 4,
    quantity: '500 g',
    description: 'Creamy yogurt, available in various flavors.',
    image: yogurtImage,
    date: '2024-08-20',
  },
];

export default productsData;
