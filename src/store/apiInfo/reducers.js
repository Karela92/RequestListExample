import { GET_REQUEST_LIST, GET_STATUSES, GET_USERS, SET_NEW_REQUEST } from './actions';

const initialState = {
  requestListItems: [],
  requestUsers: [],
  requestStatuses: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_REQUEST_LIST:
      return {
        ...state,
        requestListItems: [...action.payload],
      };
    case GET_STATUSES:
      return {
        ...state,
        requestStatuses: [...action.payload],
      };
    case GET_USERS:
      return {
        ...state,
        requestUsers: [...action.payload],
      };
    case SET_NEW_REQUEST:
      return {
        ...state,
        requestListItems: [...state.requestListItems, action.payload]
      };
    default:
      return state;
  }
};
