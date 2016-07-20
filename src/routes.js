import React from 'react';
import { Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import CustomerPage from './components/customer/CustomerPage';
import ManageCustomerPage from './components/customer/ManageCustomerPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component = {HomePage} />
    <Route path="customers" component={CustomerPage} />
    <Route path="customer" component={ManageCustomerPage} />
    <Route path="customer/:id" component={ManageCustomerPage} />
   </Route>
);
