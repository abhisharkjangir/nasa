import {combineReducers} from 'redux';
import apod from './ApodReducer';
import epic from './EpicReducer';
import earth from './EarthReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
const rootReducer = combineReducers({
  apod,epic,earth,ajaxCallsInProgress
})

export default rootReducer
