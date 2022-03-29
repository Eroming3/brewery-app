import React from 'react'; //Packages should always be listed at the top
import PropTypes from 'prop-types';
import {Router, Route, Switch, withRouter } from 'react-router-dom';
import { BreweryHomePage, BreweryDetailPage } from './pages';
import { createBrowserHistory } from "history";

const newHistory = createBrowserHistory();

const BreweryPage = () => (
    <Router history={newHistory}>
      <Switch>
        <Route exact path="/" component={BreweryHomePage} />
        <Route path="/details/:brewryid" component={BreweryDetailPage} />
      </Switch>
    </Router>
);

export default BreweryPage;
