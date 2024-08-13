import { apiClient } from './Config/';

// User Authentication
export const apiRegister = async (payload) => {
    try {
        const response = await apiClient.post("/auth/register", payload);
        return response;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
};

export const apiLogin = async (payload) => {
    try {
        const response = await apiClient.post("/auth/token/login", payload);
        return response;
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
};

export const apiCheckEmailExists = async (email) => {
    try {
        const response = await apiClient.get(`/auth/check-email`, { params: { email } });
        return response;
    } catch (error) {
        console.error("Error checking email existence:", error);
        throw error;
    }
};

export const apiGetUserProfile = async () => {
    try {
        const response = await apiClient.get("/users/profile");
        return response;
    } catch (error) {
        console.error("Error fetching user profile:", error);
        throw error;
    }
};

// Order Management
export const fetchOrders = async () => {
    try {
        const response = await apiClient.get('/orders');
        return response;
    } catch (error) {
        console.error("Error fetching orders:", error);
        throw error;
    }
};

export const updateOrder = async (orderId, updateData) => {
    try {
        const response = await apiClient.put(`/orders/${orderId}`, updateData);
        return response;
    } catch (error) {
        console.error("Error updating order:", error);
        throw error;
    }
};

// Customer Communication
export const fetchMessages = async () => {
    try {
        const response = await apiClient.get('/messages'); // Adjust endpoint if needed
        return response;
    } catch (error) {
        console.error("Error fetching messages:", error);
        throw error;
    }
};

export const sendMessage = async (message) => {
    try {
        const response = await apiClient.post('/messages', { message }); // Adjust endpoint and payload if needed
        return response;
    } catch (error) {
        console.error("Error sending message:", error);
        throw error;
    }
};
