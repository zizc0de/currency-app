import axios from 'axios';
import querystring from 'querystring';
import config from 'config';

const getRates = (query = {}) => {
  let params = querystring.stringify(query);

  return axios
    .get(`${config.EXCHANGE_API}/latest?${params}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return Promise.reject(err);
    });
}

export const exchangeService = {
  getRates
}