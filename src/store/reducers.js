import { combineReducers } from 'redux';
import requestListReducer from './requestList/reducers';
import apiReduser from './apiInfo/reducers';

export default combineReducers({
  requestList: requestListReducer,
  apiInfo: apiReduser
});
