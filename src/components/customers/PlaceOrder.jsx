// src/components/PlaceOrder.jsx
import axios from 'axios';

function PlaceOrder({ cartItems }) {
  const handlePlaceOrder = async () => {
    try {
      await axios.post('https://farm-connect-api.onrender.com/orders', { items: cartItems });
      alert('Order placed successfully!');
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  return <button onClick={handlePlaceOrder}>Place Order</button>;
}

export default PlaceOrder;
