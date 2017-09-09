/*eslint-disable import/default*/
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/ConfigureStore';
import {Provider} from 'react-redux';
import {Router, browserHistory, hashHistory} from 'react-router';
import {fetchEpicDates} from './actions/EpicActions';
import {fetchHomeApod} from './actions/ApodActions';
import routes from './routes';
import '../node_modules/toastr/build/toastr.min.css';
import './styles/styles.css';
import {getYesterdayDate} from './service/commonService';

const store = configureStore();

//For Laoding Data on App Load
store.dispatch(fetchEpicDates('natural'));
store.dispatch(fetchHomeApod(getYesterdayDate()));

render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);
