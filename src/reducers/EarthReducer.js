import * as types from '../actions/actionTypes';
import intialState from './InitialState';

export default function earthReducer(state = intialState.earth,action) {
   switch (action.type) {
     case types.SAVE_LAT_LONG:
      return {...state, ...action.coordinates};
     default:
      return state;
   }
}
