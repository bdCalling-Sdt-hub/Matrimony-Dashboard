import axios from 'axios';

const baseAxios = axios.create({
    
    baseURL: "http://103.145.138.78:3009/v1",
    timeout: 10000,
    headers: {'X-Custom-Header': 'foobar'}
  });

  export default baseAxios;