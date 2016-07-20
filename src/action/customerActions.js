import * as types  from './actionTypes';
import customerApi from '../api/mockCustomerApi';
import {beginAjaxCall,ajaxCallError} from './ajaxStatusActions';

export function loadCustomersSuccess(customers){
  return {type: types.LOAD_CUSTOMERS_SUCCESS, customers};
}

export function createCustomerSuccess(customer) {
  return {type: types.CREATE_CUSTOMER_SUCCESS, customer};
}

export function updateCustomerSuccess(customer) {
  return {type: types.UPDATE_CUSTOMER_SUCCESS, customer};
}

export function deleteCustomerSuccess(customer) {
  return {type: types.DELETE_CUSTOMER_SUCCESS, customer};
}

export function loadCustomers() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return customerApi.getAllCustomers().then(customers => {
      dispatch(loadCustomersSuccess(customers));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveCustomer(customer) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return customerApi.saveCustomer(customer).then(Customer => {
      customer.id ? dispatch(updateCustomerSuccess(Customer)) :
        dispatch(createCustomerSuccess(Customer));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

export function deleteCustomer(id) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return customerApi.deleteCustomer(id).then(Customer => {
      dispatch(deleteCustomerSuccess(id));

    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
