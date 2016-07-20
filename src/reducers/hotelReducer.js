import * as types  from '../action/actionTypes';
import initialState from './initialState';

export default function hotelReducer(state = initialState.hotels, action){
  switch (action.type) {
    case types.LOAD_HOTELS_SUCCESS:
      return action.hotels;

    default:
      return state;
  }
}
