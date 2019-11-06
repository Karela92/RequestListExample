import { CREATE_REQUEST, CLOSE_REQUEST_MODAL } from './actions';
import { OPEN_EDIT_MODAL, SET_NEW_REQUEST, GET_REQUEST_LIST } from '../apiInfo/actions';

const initialState = {
  isOpenedCreateRequestModal: false,
  isOpenedEditRequestModal: false,
  currentEditRequest: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_REQUEST_LIST:
      return {
        ...state,
        isOpenedCreateRequestModal: false,
        isOpenedEditRequestModal: false,
      };
    case CREATE_REQUEST:
      return {
        ...state,
        isOpenedCreateRequestModal: true,
        isOpenedEditRequestModal: false,
      };
    case OPEN_EDIT_MODAL:
      return {
        ...state,
        isOpenedCreateRequestModal: false,
        isOpenedEditRequestModal: true,
        currentEditRequest: action.payload
      };
    case CLOSE_REQUEST_MODAL:
      return {
        ...state,
        isOpenedCreateRequestModal: false,
        isOpenedEditRequestModal: false,
      };
    case SET_NEW_REQUEST:
      return {
        ...state,
        isOpenedCreateRequestModal: false,
        isOpenedEditRequestModal: true,
        currentEditRequest: action.payload
      };
    default:
      return state;
  }
};
