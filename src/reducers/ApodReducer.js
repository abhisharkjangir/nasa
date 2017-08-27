import * as types from '../actions/actionTypes';
import intialState from './InitialState';

export default function apodReducer(state = intialState.apod,action) {
   switch (action.type) {
     case types.APOD_SAVE:
      return { ...state, data: action.apod};
    case types.APOD_DATE_UPDATE:
     return { ...state, date: action.date};
     case types.APOD_HOME_SAVE:
      return { ...state, home: action.apod};
     default:
      return state;
   }
}
