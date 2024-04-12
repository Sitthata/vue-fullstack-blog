import axios from 'axios';
const API_URL = 'http://localhost:3000';

export const login = async (userCredentials) => {
    try {
        const response = await axios.post(`${API_URL}/login`, {
            email: userCredentials.email,
            password: userCredentials.password
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error(error.response.data.message);
    }
}

export const register = async (userCredentials) => {
    try {
        const response = await axios.post(`${API_URL}/register`, {
            email: userCredentials.email,
            password: userCredentials.password
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error(error.response.data.message);
    }
}