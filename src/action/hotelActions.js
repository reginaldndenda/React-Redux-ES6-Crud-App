import * as types  from './actionTypes';
import HotelApi from '../api/mockHotelApi';
import {beginAjaxCall} from './ajaxStatusActions';


export function loadHotelsSuccess(hotels){
  return {type: types.LOAD_HOTELS_SUCCESS, hotels};
}

export function loadHotels() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return HotelApi.getAllHotels().then(hotels => {
      dispatch(loadHotelsSuccess(hotels));
    }).catch(error => {
      throw(error);
    });
  };
}
