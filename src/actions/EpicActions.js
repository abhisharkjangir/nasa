import * as types from './actionTypes';
import * as API from '../apis/NasaApis';
import {beginAjaxCall,ajaxCallError} from './ajaxStatusActions';

export function saveEpicDates(dates) {
  return {
    type : types.SAVE_EPIC_DATES,dates
  };
}

export function setDateFilter(date) {
  return {
    type : types.SET_DATE_FILTER,date
  };
}

export function EpicListUpdate(list) {
  return {
    type : types.EPIC_LIST_UPDATE,list
  }
}

export function updateFilters (filter) {return {type:'EPIC_FILTER_UPDATE',filter}}

const transformDates = (dates) => {
  return dates.map(date => {
    return Object.assign({},date,{name: date.date,value : date.date});
  })
}

export function fetchEpicDates(epictype) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return fetch(API.EPIC_NATURAL_DATES).then((response) => {
      response.json().then(json => {
        let transformedDates = transformDates(json)
        dispatch(saveEpicDates(transformedDates))
        dispatch(updateFilters({date : transformedDates[0].value}))
        dispatch(ajaxCallError());
      })
    }).catch(error => {
      dispatch(ajaxCallError());
      throw(error);
    })
  }
}

const getImageUrl = (epic,type) => {
  let date = epic.date.split(' ')[0].split('-').join('/');
  return `https://epic.gsfc.nasa.gov/archive/${type}/${date}/thumbs/${epic.image}.jpg`;
}

const transformEpics = (epics,type) => {
  return epics.map(epic => {
    return Object.assign({},epic,{type : type,imgurl : getImageUrl(epic,type)});
  })
}


export function fetchEpic(filter) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return fetch(`https://api.nasa.gov/EPIC/api/${filter.type}/date/${filter.date}?api_key=VnMVNR0ECoKfGa9z6V3vtwTHCZB6UI8MWNdndAew`)
    .then((response) => {
      response.json()
      .then(json => {
        dispatch(EpicListUpdate(transformEpics(json,filter.type)))
        dispatch(ajaxCallError());
      })
    }).catch(error => {
      dispatch(ajaxCallError());
      throw(error);
    })
  }
}
