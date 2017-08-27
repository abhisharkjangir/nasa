import {getYesterdayDate} from '../service/commonService';

export default {
  ajaxCallsInProgress:false,
  apod : {
    date : getYesterdayDate()
  },
  epic : {
    types :[{id:1,value:'natural',name:'Natural'},{id:2,value:'enhanced',name:'Enhanced'}],
    dates : [],
    filter : {type :'natural',date : ''}
  }
};
