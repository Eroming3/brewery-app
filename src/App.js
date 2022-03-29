import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { BreweryHomePage } from './features'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={BreweryHomePage} />
    </Switch>
  );
}

export default App;
