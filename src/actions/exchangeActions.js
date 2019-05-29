import { exchangeConstants } from 'constants';
import { exchangeService } from 'services';

const getRates = (query = {}) => {
  return (dispatch) => {
    dispatch({
      type: exchangeConstants.GET_EXCHANGE_RATE_REQUEST
    });
    return exchangeService
      .getRates(query)
      .then((res) => {
        dispatch({
          type: exchangeConstants.GET_EXCHANGE_RATE_SUCCESS,
          data: {
            base: res.base,
            date: res.date,
            rates: res.rates
          }
        });
      })
      .catch((err) => {
        dispatch({
          type: exchangeConstants.GET_EXCHANGE_RATE_FAILURE
        });
      });
  }
}

export const exchangeActions = {
  getRates
}