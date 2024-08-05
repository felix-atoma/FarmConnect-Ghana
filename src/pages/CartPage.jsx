import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Make sure this path is correct

const CartPage = () => {
  // Destructure the CartContext to get cartItems, removeFromCart, and clearCart
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  console.log('Cart Items:', cartItems);

  return (
    <div>
      <h1>Cart Page</h1>
      <ul>
        {cartItems && cartItems.length > 0 ? (
          cartItems.map(item => (
            <li key={item.id}>
              {item.name} - Quantity: {item.quantity}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))
        ) : (
          <p>No items in the cart.</p>
        )}
      </ul>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default CartPage;
