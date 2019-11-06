import React, { Component } from 'react';

import './RequestCreate.scss';

export default class RequestCreate extends Component {

  render() {
    return (
      <div className='requestCreate'>
        <button
          type='submit'
          onClick= { this.props.handleCreateRequest }
        >
          Cоздать заявку
        </button>
      </div>
    );
  }
}