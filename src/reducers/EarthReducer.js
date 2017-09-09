import * as types from '../actions/actionTypes';
import intialState from './InitialState';

export default function earthReducer(state = intialState.earth,action) {
   switch (action.type) {
     case types.UPDATE_EARTH_FILTERS:
      return {...state, filters : action.filters};
      case types.STORE_EARTH_DATA:
       return {...state, data : action.data};
     case types.CLEAR_EARTH_DATA:
      return {...state, data : undefined};
     default:
      return state;
   }
}
