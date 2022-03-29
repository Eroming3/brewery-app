import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { BreweryHomePage } from './features'

function App() {
  return (
    <BreweryHomePage />
  );
}

export default withRouter(App);
