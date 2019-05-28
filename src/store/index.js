import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from 'reducers';

const middleware = process.env.NODE_ENV === 'production' ? applyMiddleware(thunk) : applyMiddleware(thunk, logger);

export function configureStore(initialState) {
  const store = createStore(reducers, initialState, middleware);
  return store;
}