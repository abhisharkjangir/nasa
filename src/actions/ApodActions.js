import * as types from './actionTypes';
import * as API from '../apis/NasaApis';
import Moment from 'moment';
import toastr from 'toastr';
import {beginAjaxCall,ajaxCallError} from './ajaxStatusActions';


export function saveApod(apod) {
  return {
    type : types.APOD_SAVE,apod
  };
}

export function updateApodDate(date) {
  return {
    type : types.APOD_DATE_UPDATE,date
  };
}

export function updateDate(date) {
  return function (dispatch) {
    dispatch(updateApodDate(date))
  }
}

export function fetchApod(date) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return fetch(`https://api.nasa.gov/planetary/apod?date=${Moment(date).format('YYYY-MM-DD')}&api_key=VnMVNR0ECoKfGa9z6V3vtwTHCZB6UI8MWNdndAew`).then((response) => {
      response.json().then(json => {
        if (!json.code) {
          dispatch(saveApod(json))
          dispatch(ajaxCallError());
        }else {
          dispatch(ajaxCallError());
          toastr.error(json.msg)
        }
      })
    }).catch(error => {
      dispatch(ajaxCallError());
      throw(error);
    })
  }
}
