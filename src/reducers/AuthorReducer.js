import * as types from '../actions/actionTypes';
import intialState from './InitialState';
export default function authorReducer(state = intialState.authors,action) {
   switch (action.type) {
     case types.LOAD_AUTHOR_SUCCESS:
      return action.authors;
     default:
      return state;
   }
}
