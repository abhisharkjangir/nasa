/*eslint-disable import/default*/
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/ConfigureStore';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import {fetchEpicDates} from './actions/EpicActions';
import routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import './styles/styles.css';
const store = configureStore();

//For Laoding Data on App Load
store.dispatch(fetchEpicDates('natural'));

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);
