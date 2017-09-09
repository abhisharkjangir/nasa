import * as types from './actionTypes';
import * as API from '../apis/NasaApis';
import {beginAjaxCall,ajaxCallError} from './ajaxStatusActions';
import Moment from 'moment';
import toastr from 'toastr';


const storeEarthData = (filters) => {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return fetch(`https://api.nasa.gov/planetary/earth/imagery?lon=${filters.long}&lat=${filters.lat}&date=${Moment(filters.date).format('YYYY-MM-DD')}&cloud_score=${filters.cloud}&api_key=VnMVNR0ECoKfGa9z6V3vtwTHCZB6UI8MWNdndAew`).then((response) => {
      response.json().then(json => {
        if(json.error) toastr.error(json.error + ' ' +  json.message);
        else dispatch({type: types.STORE_EARTH_DATA, data : json})
        dispatch(ajaxCallError());
      })
    }).catch(error => {
      dispatch(ajaxCallError());
      throw(error);
    })
  }
}

export {storeEarthData}
