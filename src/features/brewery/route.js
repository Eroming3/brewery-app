import React from 'react'; //Packages should always be listed at the top
import PropTypes from 'prop-types';
import {Route, Switch, withRouter } from 'react-router-dom';
import { BreweryHomePage } from './pages';

const BreweryPage = ({ match }) => (
    <Switch>
      <Route exact path={`${match.url}`} component={BreweryHomePage} />
    </Switch>
);

BreweryPage.propTypes = {
  match: PropTypes.shape({
    url: ''
  })
};

BreweryPage.defaultProps = {
  match: {}
};

export default withRouter(BreweryPage);
