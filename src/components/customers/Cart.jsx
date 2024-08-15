// src/components/Cart.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function fetchCart() {
      try {
        const response = await axios.get('https://farm-connect-api.onrender.com/cart');
        setCartItems(response.data);
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    }

    fetchCart();
  }, []);

  const handleRemove = async (id) => {
    try {
      await axios.delete(`https://farm-connect-api.onrender.com/cart/${id}`);
      setCartItems(cartItems.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  return (
    <div>
      {cartItems.map(item => (
        <div key={item.id}>
          <h3>{item.productName}</h3>
          <button onClick={() => handleRemove(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
