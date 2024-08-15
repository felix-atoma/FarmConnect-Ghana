// src/services/apiService.js

export const fetchProduceData = async () => {
  try {
    const response = await fetch('https://api.yourapp.com/produce');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching produce data:', error);
    return {}; // Return an empty object or handle error as needed
  }
};
