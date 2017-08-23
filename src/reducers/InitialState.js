const getYesterdayDate = () => {
  let today = new Date();
  today.setDate(today.getDate()-1)
  return today;
}

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
