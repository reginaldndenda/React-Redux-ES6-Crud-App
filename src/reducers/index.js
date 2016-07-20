import {combineReducers} from 'redux';
import customers from './customerReducer';
import hotels from './hotelReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  customers,
  hotels,
  ajaxCallsInProgress
});

export default rootReducer;
