import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://logiclike.com/docs',
  timeout: 10000,
});

export default axiosInstance;