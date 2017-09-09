import * as types from '../actions/actionTypes';
import intialState from './InitialState';

export default function epicReducer(state = intialState.epic,action) {
   switch (action.type) {
     case types.SAVE_EPIC_DATES:
      return Object.assign({},state,{dates : action.dates});
      case types.EPIC_FILTER_UPDATE:
       return {
         ...state,
         filter: {
           ...state.filter,
           ...action.filter
         }
       };
     case types.EPIC_LIST_UPDATE:
      return Object.assign({},state,{list : action.list});
    case types.EPIC_LIST_CLEAR:
     return Object.assign({},state,{list : []});
     default:
      return state;
   }
}
