import axios from 'axios';
import { parseCookies } from 'nookies';

axios.defaults.baseURL = 'http://localhost:3333';

axios.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const { _token } = parseCookies();

    config.headers.Authorization = 'Bearer ' + _token;
  }

  return config;
});

export default axios;
