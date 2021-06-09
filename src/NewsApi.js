import axios from 'axios';

const BASE_URL_NEWS = 'https://newsapi.org/v2';
const API_KEY = '1074547b3e934518b50cddb64fef6df3';

const PARAMS = {
    apiKey:API_KEY
}
export default axios.create({
  baseURL:BASE_URL_NEWS,
  params:PARAMS
});