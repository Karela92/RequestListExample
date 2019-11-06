import React, { Component } from 'react';

import './Loader.scss';

export default class Loader extends Component {

  render() {
    return(
      <div className='loader'>
        <div className='loader__spiner'></div>
        <div className='loader__text'>Загрузка ...</div>
      </div>
    )
  }
}