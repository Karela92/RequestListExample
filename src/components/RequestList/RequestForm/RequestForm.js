import React, { Component } from 'react';

import Textarea from '../../ui/Textarea/Textarea';

import './RequestForm.scss';

const DEFAULT_STATE = {
  requestName: '',
  requestDescription: '',
};

export default class RequestForm extends Component {

  state = {
    ...DEFAULT_STATE
  };

  handleFieldChange(fieldName, value) {
    this.setState(() =>({
      [fieldName]: value
    }))
  }

  handleSubmit() {
    const { requestName, requestDescription } = this.state;
    const params = {
      name: requestName,
      description: requestDescription,
    };
    this.setState(() => ({ ...DEFAULT_STATE }));
    this.props.setNewRequest(params);
  }

  renderDescriptionContainer(requestDescription) {
    return(
      <>
        <div className='textContainer__name'>Описание</div>
        <Textarea
          value={ requestDescription }
          handleChange={ ev => this.handleFieldChange('requestDescription', ev.target.value) }
          rows={ 8 }
          cols={ 67 }
        />
      </>
    )
  }

  renderRequestName(requestName) {
    return(
      <>
        <div className='textContainer__name'>Название</div>
        <Textarea
          value={ requestName }
          handleChange={ ev => this.handleFieldChange('requestName', ev.target.value) }
          rows={ 8 }
          cols={ 67 }
        />
      </>
    )
  }

  render() {
    const { requestName, requestDescription } = this.state;
    const isDisabled = !requestName.trim() || !requestDescription.trim();
    return(
      <div className='requestModal'>
        <div className='requestModal__header'>
          <h2>Новая заявка</h2>
          <span
            className='closeRequestOptions'
            onClick={this.props.closeRequestModal}
          >
            &#10006;
          </span>
        </div>
        <div className='requestModal__body'>
          <div className='modal__left'>
            <div className='textContainer'>
              { this.renderRequestName(requestName) }
            </div>
            <div className='textContainer'>
              { this.renderDescriptionContainer(requestDescription) }
            </div>
            <div className='saveButton'>
              <button
                disabled={ isDisabled }
                onClick={() => this.handleSubmit()}
              >
                Сохранить
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}