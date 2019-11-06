export const GET_REQUEST_LIST = 'GET_REQUEST_LIST';
export const GET_STATUSES = 'GET_STATUSES';
export const GET_USERS = 'GET_USERS';
export const SET_NEW_REQUEST = 'SET_NEW_REQUEST';
export const OPEN_EDIT_MODAL = 'OPEN_EDIT_MODAL';

const API_URL = 'http://intravision-task.test01.intravision.ru';
const tenantGuidId = '6440e4bd-4003-4ee6-bb69-6d1a44174fe1';

export const getRequestList = () => {
  return dispatch => {
    fetch(`${API_URL}/odata/tasks?tenantguid=${tenantGuidId}`)
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: GET_REQUEST_LIST,
          payload: data.value,
        })
      })
  }
};

export const getRequestPriorities = () => {
  return dispatch => {
    fetch(`${API_URL}/api/${tenantGuidId}/Statuses`)
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: GET_STATUSES,
          payload: data,
        })
      })
  }
};

export const getRequestUsers = () => {
  return dispatch => {
    fetch(`${API_URL}/api/${tenantGuidId}/Users`)
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: GET_USERS,
          payload: data,
        })
      })
  }
};

export const setNewRequest = params => {
  return dispatch => {
    fetch(`${API_URL}/api/${tenantGuidId}/Tasks`, {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'content-type': 'application/json',
        "Accept": "application/json",
      }
    })
      .then(response => response.json())
      .then(requestId => {
        fetch(`${API_URL}/api/${tenantGuidId}/Tasks/${requestId}`)
          .then(response => response.json())
          .then(newRequest => {
            dispatch({
              type: SET_NEW_REQUEST,
              payload: newRequest,
            })
          })
      })
  }
};

export const updateSelectedRequest = params => {
  return dispatch => {
    fetch(`${API_URL}/api/${tenantGuidId}/Tasks`, {
      method: 'PUT',
      body: JSON.stringify(params),
      headers: {
        'content-type': 'application/json'
      }
    }).then(() => {
      fetch(`${API_URL}/odata/tasks?tenantguid=${tenantGuidId}`)
        .then(response => response.json())
        .then(data => {
          dispatch({
            type: GET_REQUEST_LIST,
            payload: data.value,
          })
        })
    })
  }
};

export const editCurrentRequest = currentItemId => {
  return dispatch => {
    fetch(`${API_URL}/api/${tenantGuidId}/Tasks/${currentItemId}`)
      .then(response => response.json())
      .then(newRequest => {
        dispatch({
          type: OPEN_EDIT_MODAL,
          payload: newRequest,
        })
      })
  }
};