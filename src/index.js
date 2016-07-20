import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import {loadCustomers} from './action/customerActions';
import {loadHotels} from './action/hotelActions';
import './styles/styles.css';  //Webpack importing css
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();
store.dispatch(loadCustomers());
store.dispatch(loadHotels());
render(
  <Provider store={store}>
    <Router history ={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);