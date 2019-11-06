import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  getRequestList, getRequestPriorities, getRequestUsers,
  updateSelectedRequest, setNewRequest, editCurrentRequest
} from '../../store/apiInfo/actions'
import { handleCreateRequest, closeRequestModal } from '../../store/requestList/actions';

import RequestCreate from '../../components/RequestList/RequestCreate/RequestCreate';
import RequestListTable from '../../components/RequestList/RequestListTable/RequestListTable';
import RequestForm from '../../components/RequestList/RequestForm/RequestForm';
import RequestEdit from '../../components/RequestList/RequestEdit/RequestEdit';

import './RequestListContainer.scss';

class RequestListContainer extends Component {

  static propTypes = {
    getRequestList: PropTypes.func,
    getRequestPriorities: PropTypes.func,
    getRequestUsers: PropTypes.func,
    updateSelectedRequest: PropTypes.func,
    setNewRequest: PropTypes.func,
    editCurrentRequest: PropTypes.func,
    handleCreateRequest: PropTypes.func,
    closeRequestModal: PropTypes.func,
    requestListItems: PropTypes.array,
    isOpenedCreateRequestModal: PropTypes.bool,
    isOpenedEditRequestModal: PropTypes.bool,
    currentEditRequest: PropTypes.object,
    requestUsers: PropTypes.array,
    requestStatuses: PropTypes.array
  };

  componentDidMount() {
    this.props.getRequestList();
    this.props.getRequestUsers();
    this.props.getRequestPriorities();
  }

  render() {
    const {
      requestListItems, handleCreateRequest, isOpenedCreateRequestModal,
      closeRequestModal, editCurrentRequest, isOpenedEditRequestModal,
      currentEditRequest, requestUsers, requestStatuses, setNewRequest,
      updateSelectedRequest
    } = this.props;
    return (
      <>
        <div className='requestListContent'>
          <RequestCreate
            handleCreateRequest={ handleCreateRequest }
          />
          <RequestListTable
            requestListItems={ requestListItems }
            editCurrentRequest={ editCurrentRequest }
          />
        </div>
        { isOpenedCreateRequestModal &&
          <RequestForm
            closeRequestModal={ closeRequestModal }
            setNewRequest={ setNewRequest }
          />
        }
        { isOpenedEditRequestModal &&
          <RequestEdit
            updateSelectedRequest={ updateSelectedRequest }
            closeRequestModal={ closeRequestModal }
            currentEditRequest={ currentEditRequest }
            requestStatuses={ requestStatuses }
            requestUsers={ requestUsers }
          />
        }
      </>
    );
  }
}

const mapStateToProps = state => ({
  requestListItems: state.apiInfo.requestListItems,
  requestUsers: state.apiInfo.requestUsers,
  requestStatuses: state.apiInfo.requestStatuses,
  isOpenedCreateRequestModal: state.requestList.isOpenedCreateRequestModal,
  isOpenedEditRequestModal: state.requestList.isOpenedEditRequestModal,
  currentEditRequest: state.requestList.currentEditRequest
});

const mapDispatchToProps = {
  getRequestList,
  handleCreateRequest,
  closeRequestModal,
  setNewRequest,
  editCurrentRequest,
  getRequestPriorities,
  getRequestUsers,
  updateSelectedRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestListContainer);