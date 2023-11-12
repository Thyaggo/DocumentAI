import axios from 'axios';
const baseURL = import.meta.env.VITE_BASE_URL;

const loginAxiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default loginAxiosInstance;
