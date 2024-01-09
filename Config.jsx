import axios from 'axios';

const baseAxios = axios.create({
    
    baseURL: "http://167.71.208.193:3009/v1",
    timeout: 10000,
    headers: {'X-Custom-Header': 'foobar'}
  });

  export default baseAxios;