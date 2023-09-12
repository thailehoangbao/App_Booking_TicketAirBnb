import axios from "axios";
import { TOKEN } from './_constantsUtils';

const api = axios.create({
    baseURL: 'https://airbnbnew.cybersoft.edu.vn/api/'
});

api.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,
        TokenCybersoft:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MCIsIkhldEhhblN0cmluZyI6IjE4LzAxLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwNTUzNjAwMDAwMCIsIm5iZiI6MTY3NzQzMDgwMCwiZXhwIjoxNzA1NjgzNjAwfQ.s4X0R0Wi80X0f9MLJ2XYxRKJdQJBW27dwvkpfN03100',
        Token: JSON.parse(localStorage.getItem(TOKEN))
    };

    return config;
});


export default api;