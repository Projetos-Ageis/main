import axios from 'axios';

const ID_TOKEN = "id_token";

let api = axios.create({
    baseURL: "https://localhost:5173/api",
});


api.interceptors.request.use(config => {
    if (config.url !== '/login') {
        const token = localStorage.getItem(ID_TOKEN);
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export default api;