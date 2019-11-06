import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import './Search.scss';

export default class Search extends Component {

  render() {
    return (
      <div className='search'>
        <div>
          <span>
            <FontAwesomeIcon icon={ faSearch } />
          </span>
          <input type='text'/>
        </div>
      </div>
    );
  }
}