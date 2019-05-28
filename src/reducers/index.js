import { combineReducers } from 'redux';

import currency from './currencyReducer';

const reducers = combineReducers({
  currency
});

export default reducers;