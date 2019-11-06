import React, { Component } from 'react';
import { getClassNameWithCurrentStatus } from '../../../siteConstants/requestStatus';

import Loader from '../../ui/Loader/Loader';

import './RequestListTable.scss';

export default class RequestListTable extends Component {

  render() {
    const { requestListItems, editCurrentRequest } = this.props;
    if (!requestListItems.length) {
      return <Loader />;
    }
    return (
      <div className='requestTable'>
        <div className='requestTable__title'>
          <div className='requestTable__title--id'><span>ID</span></div>
          <div className='requestTable__title--name'><span>Название</span></div>
          <div className='requestTable__title--status'><span>Статус</span></div>
          <div className='requestTable__title--executor'><span>Исполнитель</span></div>
        </div>
        <div className='requestTable__content'>
          { requestListItems.map((item, index) => {
            return(
              <div
                className='requestTable__description'
                key={ index }
                  onClick={() => editCurrentRequest(item.id)}
              >
                <div className='requestTable__description--id'><span>{ item.id }</span></div>
                <div className='requestTable__description--name'><span>{ item.name }</span></div>
                <div className={`requestTable__description--status`}>
                  <div className={`${getClassNameWithCurrentStatus( item.statusName )}`}>
                    <span>
                    { item.statusName }
                  </span>
                  </div>
                </div>
                <div className='requestTable__description--executor'><span>{ item.executorName }</span></div>
              </div>
            )
          }) }
        </div>
      </div>
    );
  }
}