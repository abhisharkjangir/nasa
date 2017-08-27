export const getYesterdayDate = () => {
  let today = new Date();
  today.setDate(today.getDate()-1)
  return today;
}
