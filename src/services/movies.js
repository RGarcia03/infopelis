import axios from 'axios';
import { API_KEY, LANGUAGE } from '../utils/constants';
import { MOVIES_ENDPOINT, SEARCH_ENDPOINT } from './urls';

const getMovies = (page) => {
  const url = MOVIES_ENDPOINT + 'popular';
  const params = {
    params: {
      api_key: API_KEY,
      language: LANGUAGE,
      page: page,
    },
  };
  return axios.get(url, params).then((response) => response && response.data);
};

const searchMovies = (movie, page) => {
  const params = {
    params: {
      api_key: API_KEY,
      query: movie,
      page: page,
    },
  };
  return axios
    .get(SEARCH_ENDPOINT, params)
    .then((response) => response && response.data);
};

export { getMovies, searchMovies };
