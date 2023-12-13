import axios from 'axios';

const baseAxios = axios.create({
    
    baseURL: import.meta.env.VITE_BACKEND_ENDPOINT,
    timeout: 10000,
    headers: {'X-Custom-Header': 'foobar'}
  });

  export default baseAxios;