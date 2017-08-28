import * as types from './actionTypes';
import * as API from '../apis/NasaApis';
import {beginAjaxCall,ajaxCallError} from './ajaxStatusActions';

export function SAVE_LAT_LONG(coordinates) {
  return {
    type : types.SAVE_LAT_LONG, coordinates
  };
}
