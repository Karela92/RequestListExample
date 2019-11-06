import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navItems } from '../../siteConstants/requestListNav';

import './Navigation.scss';

export default class Navigation extends Component {

  render() {
    return (
      <div className='navBar'>
        <ul className='navBar__menu'>
          {
            navItems.map((item, index) => {
              return(
                <li key={ index }>
                  <NavLink
                    to={item.routePath}
                    exact
                    activeClassName='selectedOption'
                  >
                    <span><FontAwesomeIcon icon={item.icon} /></span>
                    { item.name }
                  </NavLink>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}