import {combineReducers} from 'redux';
import apod from './ApodReducer';
import epic from './EpicReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
const rootReducer = combineReducers({
  apod,epic,ajaxCallsInProgress
});

export default rootReducer;
