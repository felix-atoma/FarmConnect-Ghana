import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const apiClient = axios.create({
    baseURL: baseUrl,
    // withCredentials: true, // Uncomment if needed
});

// Request interceptor to add the token if available
apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("accessToken");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
