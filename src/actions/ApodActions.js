import * as types from './actionTypes';
import * as API from '../apis/NasaApis';

export function loadAPODSuccess(apod) {
  return {
    type : types.LOAD_APOD_SUCCESS,apod
  };
}

export function fetchAPOD() {
  return function (dispatch) {
    return fetch(API.APOD_API_ENDPOINT).then((response) => {
      response.json().then(json => {
        dispatch(loadAPODSuccess(json))
      })
    }).catch(error => {
      throw(error);
    })
  }
}
