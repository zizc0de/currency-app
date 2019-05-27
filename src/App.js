import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import Home from './pages/Home';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact name="home" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default hot(module)(App);