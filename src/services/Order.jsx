// src/services/OrderService.js
import api from "./Api";

export const fetchOrders = async () => {
  try {
    const response = await api.get('/orders');
    return response.data;
  } catch (error) {
    throw error;
  }
};
