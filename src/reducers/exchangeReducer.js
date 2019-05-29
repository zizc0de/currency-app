import { exchangeConstants } from 'constants';

const AsyncState = {
  idle: 'idle',
  loading: 'loading',
  loaded: 'loaded',
  error: 'error'
};

const initialState = {
  base: '',
  rates: {},
  date: '',
  asyncState: AsyncState.idle
};

const exchangeReducer = (state = initialState, action) => {
  switch (action.type) {
    case exchangeConstants.GET_EXCHANGE_RATE_REQUEST:
      state = {
        ...state,
        asyncState: AsyncState.loading
      }
      break;
    case exchangeConstants.GET_EXCHANGE_RATE_SUCCESS:
      state = {
        base: action.data.base,
        rates: action.data.rates,
        date: action.data.date,
        asyncState: AsyncState.loaded
      }
      break;
    case exchangeConstants.GET_EXCHANGE_RATE_FAILURE:
      state = {
        ...state,
        asyncState: AsyncState.error
      }
      break;
    default:
      return state;
  }
  return state;
};

export default exchangeReducer;