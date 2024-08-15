// src/services/Order.js
export const fetchOrders = async () => {
  try {
    const response = await fetch('/api/orders'); // Adjust the URL as necessary
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.orders; // Ensure this matches the structure of your data
  } catch (error) {
    console.error('Error fetching orders:', error);
    return []; // Return an empty array on error
  }
};
