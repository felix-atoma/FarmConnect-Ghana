// src/components/AddToCart.jsx
import axios from 'axios';

function AddToCart({ productId }) {
  const handleAddToCart = async () => {
    try {
      await axios.post('https://farm-connect-api.onrender.com/cart', { productId, quantity: 1 });
      alert('Added to cart!');
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  return <button onClick={handleAddToCart}>Add to Cart</button>;
}

export default AddToCart;
