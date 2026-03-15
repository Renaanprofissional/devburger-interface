import axios from 'axios';

export const api = axios.create({
  baseURL:
    window.location.hostname === 'localhost'
      ? 'http://localhost:3001'
      : 'https://dev-burguer-api.vercel.app',
});

api.interceptors.request.use(async (config) => {
  const userData = localStorage.getItem('devburger:userData');

  if (userData) {
    const token = JSON.parse(userData).token;
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
