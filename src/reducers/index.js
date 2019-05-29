import { combineReducers } from 'redux';

import currency from './currencyReducer';
import exchange from './exchangeReducer';

const reducers = combineReducers({
  currency,
  exchange
});

export default reducers;