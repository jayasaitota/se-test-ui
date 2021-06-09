import axios from 'axios';
const BASE_URL_NEWS = 'http://localhost:4000';
export default axios.create({
  baseURL:BASE_URL_NEWS
});