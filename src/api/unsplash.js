import axios from 'axios';
import ApiKey from './secretVariables.json';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID ' + ApiKey.key
  }
});
