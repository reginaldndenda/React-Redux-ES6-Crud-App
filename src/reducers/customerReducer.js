import * as types  from '../action/actionTypes';
import initialState from './initialState';

export default function customerReducer(state = initialState.customers, action){
  switch (action.type) {
    case types.LOAD_CUSTOMERS_SUCCESS:
       return action.customers;

    case types.CREATE_CUSTOMER_SUCCESS:
          return [
            ...state,
            Object.assign({}, action.customer)
          ];
    case types.UPDATE_CUSTOMER_SUCCESS:
          return [
            ...state.filter(customer => customer.id !== action.customer.id),
            Object.assign({}, action.customer)
          ];
    case types.DELETE_CUSTOMER_SUCCESS:
      return [
        ...state.filter(customer => customer.id === action.id)

      ];

    default:
      return state;
  }
}
