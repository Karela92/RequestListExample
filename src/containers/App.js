import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import store from '../store/configureStore';
import routes from '../siteConstants/routes';
import RouteWithSubRoutes from '../siteConstants/routerWithSubRoutes';

import Navigation from '../components/Navigation/Navigation';
import Search from '../components/RequestList/Search/Search';

import './App.scss';
import './Common.scss';

export default class App extends Component {

  render() {
    return (
      <Provider store={ store }>
        <Router>
          <div className='main'>
            <Navigation />
            <div className='main__container'>
              <Search />
              <Switch>
                {routes.map(route => (
                  <RouteWithSubRoutes key={route.path} {...route} />
                ))}
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}