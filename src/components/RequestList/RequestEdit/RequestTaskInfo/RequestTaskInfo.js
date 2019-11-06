import React, { Component } from 'react';
import Select from 'react-select';

import { getClassNameWithCurrentStatus } from '../../../../siteConstants/requestStatus'

import './RequestTaskInfo.scss';

export default class RequestTaskInfo extends Component {

  renderStatusOption() {
    const { requestStatuses, currentEditRequest, selectedStatus, handleSelectChange } = this.props;
    const options = requestStatuses.map(status => ({ value: status.name, label: status.name, id: status.id }));
    const checkedCurrentStatus = selectedStatus ? selectedStatus.value : currentEditRequest.statusName;
    return(
      <>
        <div className='statusTitle'>Статус:</div>
        <div className='taskContainer__status'>
          <span className={`currentStatus ${getClassNameWithCurrentStatus(checkedCurrentStatus)}`}></span>
          <Select
            value={ selectedStatus }
            options={ options }
            onChange={ value => handleSelectChange('selectedStatus', value)}
          />
        </div>
      </>
    )
  }

  renderCurrentExecutor() {
    const { requestUsers, selectedExecutor, handleSelectChange } = this.props;
    const options = requestUsers.map(executor => ({ value: executor.name, label: executor.name, id: executor.id }));
    return(
      <div className='taskContainer__executor'>
        <div className='executorTitle'>Исполнитель:</div>
        <Select
          value={selectedExecutor}
          options={ options }
          onChange={ value => handleSelectChange('selectedExecutor', value)}
        />
      </div>
    )
  }

  render() {
    return(
      <div className='taskContainer'>
        { this.renderStatusOption() }
        { this.renderCurrentExecutor() }
      </div>
    )
  }
}