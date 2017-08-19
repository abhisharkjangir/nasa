import * as types from '../actions/actionTypes';
import intialState from './InitialState';

export default function apodReducer(state = intialState.apod,action) {
   switch (action.type) {
     case types.LOAD_APOD_SUCCESS:
      return action.apod;
     default:
      return state;
   }
}
