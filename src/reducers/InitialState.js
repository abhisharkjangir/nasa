import {getYesterdayDate} from '../service/commonService';

export default {
  ajaxCallsInProgress : false,
  apod : {
    date: getYesterdayDate()
  },
  epic : {
    types: [
      {
        id: 1,
        value: 'natural',
        name: 'Natural'
      }, {
        id: 2,
        value: 'enhanced',
        name: 'Enhanced'
      }
    ],
    dates: [],
    filter: {
      type: 'natural',
      date: ''
    }
  },
  earth : {
    lat: 28.448552,
    long: 77.072434,
    date: new Date(),
    cloud: true
  }
};
