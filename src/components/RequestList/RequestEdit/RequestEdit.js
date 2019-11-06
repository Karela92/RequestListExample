import React, { Component } from 'react';
import { changeTextContent } from '../../../utils/correctTextFormat';
import _ from 'lodash';
import moment from 'moment';
import 'moment/locale/ru';

import RequestTaskInfo from './RequestTaskInfo/RequestTaskInfo';
import Textarea from '../../ui/Textarea/Textarea';

import './RequestEdit.scss';

export default class RequestEdit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedStatus: {
        value: props.currentEditRequest.statusName,
        label: props.currentEditRequest.statusName,
        id: props.currentEditRequest.statusId
      },
      selectedExecutor: {
        value: props.currentEditRequest.executorName,
        label: props.currentEditRequest.executorName,
        id: props.currentEditRequest.executorId
      },
      isOpenedCommentaries: false,
      comment: ''
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentEditRequest } = this.props;
    if (prevProps.currentEditRequest.id !== currentEditRequest.id) {
      this.setState(() => ({
        selectedExecutor: {
          value: currentEditRequest.executorName,
          label: currentEditRequest.executorName,
          id: currentEditRequest.executorId
        },
        selectedStatus: {
          value: currentEditRequest.statusName,
          label: currentEditRequest.statusName,
          id: currentEditRequest.statusId
        }
      }))
    }
  }

  handleEditSave() {
    const { selectedStatus, selectedExecutor, comment } = this.state;
    const params = {
      id: this.props.currentEditRequest.id,
      comment,
      statusId: selectedStatus.id,
      executorId: selectedExecutor.id
    };
    this.props.updateSelectedRequest(params)
  }

  handleCommentariesView = () => {
    this.setState(prevState =>({
      isOpenedCommentaries: !prevState.isOpenedCommentaries
    }));
  };

  handleFieldChange = (fieldName, value) => {
    this.setState(() =>({
      [fieldName]: value
    }))
  };

  renderSubmitButton() {
    const submitDisabled = this.checkForRequestChanged();
    return(
      <div className='saveButton'>
        <button
          onClick={() => this.handleEditSave()}
          disabled={ submitDisabled }
        >
          Сохранить
        </button>
      </div>
    )
  }

  renderHeaderModal(currentEditRequest, closeRequestModal) {
    return(
      <div className='requestModal__header'>
        <h2>№ {currentEditRequest.id}</h2>
        <span>{currentEditRequest.name}</span>
        <span
          className='closeRequestOptions'
          onClick={closeRequestModal}
        >
            &#10006;
          </span>
      </div>
    )
  }

  renderCreateComment(comment, isOpenedCommentaries) {
    return(
      <div className='textContainer__name'>
        <div
          onClick={this.handleCommentariesView}
          className='textContainer__name--comment'
        >
          Добавление комментариев
        </div>
        {
          isOpenedCommentaries &&
          <Textarea
            value={ comment }
            handleChange={ ev => this.handleFieldChange('comment', ev.target.value) }
            rows={ 8 }
            cols={ 67 }
          />
        }
      </div>
    )
  }

  renderCommentsList() {
    const { currentEditRequest } = this.props;
    return(
      <div className='commentContainer'>
        {
          currentEditRequest.lifetimeItems.map(item => {
            if (item.comment) {
              return(
                <div className='commentContent' key={item.id}>
                  <div className='commentContent__createdTime'>
                    Комментарий от <span>{ moment(item.createdAt).format('D MMMM') } </span>
                    в <span> { moment(item.createdAt).format('HH:mm') }</span>
                  </div>
                  <div className='commentContent__text'>
                    { changeTextContent(item.comment) }
                  </div>
                </div>
              )
            } else {
              return null;
            }
          })
        }
      </div>
    )
  }

  checkForRequestChanged() {
    const { comment, selectedStatus, selectedExecutor } = this.state;
    const { currentEditRequest } = this.props;
    return _.isEqual(currentEditRequest.executorId, selectedExecutor.id) &&
      _.isEqual(currentEditRequest.statusId, selectedStatus.id) &&
      !comment
  }

  render() {
    const { comment, isOpenedCommentaries, selectedStatus, selectedExecutor } = this.state;
    const { currentEditRequest, closeRequestModal, requestStatuses, requestUsers } = this.props;
    const updatedRequestDescription = changeTextContent(currentEditRequest.description);
    return(
      <div className='requestModal'>
        { this.renderHeaderModal(currentEditRequest, closeRequestModal) }
        <div className='requestModal__body'>
          <div className='modal__left'>
            <div className='textContainer'>
              <div className='textContainer__name'>Описание</div>
              <div>{ updatedRequestDescription }</div>
            </div>
            <div className='textContainer'>
              { this.renderCreateComment(comment, isOpenedCommentaries) }
              { this.renderSubmitButton() }
              { this.renderCommentsList() }
            </div>
          </div>
          <div className='modal__right'>
            <RequestTaskInfo
              requestStatuses={ requestStatuses }
              requestUsers={ requestUsers }
              currentEditRequest={ currentEditRequest }
              selectedStatus={ selectedStatus }
              selectedExecutor={ selectedExecutor }
              handleSelectChange = { this.handleFieldChange }
            />
          </div>
        </div>
      </div>
    )
  }
}