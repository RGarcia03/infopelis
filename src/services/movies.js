import axios from 'axios';
import { API_KEY, LANGUAGE } from '../utils/constants';
import { MOVIES_ENDPOINT } from './urls';

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

export { getMovies };
