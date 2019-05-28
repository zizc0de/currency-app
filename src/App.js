import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import { configureStore } from './store';

import Home from './pages/Home';

class App extends React.Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact name="home" component={Home} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default hot(module)(App);