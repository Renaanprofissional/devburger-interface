import axios from 'axios';

export const api = axios.create({
  baseURL:
    window.location.hostname === 'localhost'
      ? 'http://localhost:3001'
      : 'https://dev-burguer-api.vercel.app',
});

api.interceptors.request.use((config) => {
  const userData = localStorage.getItem('devburger:userData');

  const token = userData && JSON.parse(userData).token;

  config.headers.Authorization = `Bearer ${token}`;

  return config;
});
