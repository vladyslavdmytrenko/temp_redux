import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

instance.interceptors.response.use((response) => response.data);

export default instance;
