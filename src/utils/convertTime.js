const convertToLocalTime = (unixTime) => {
  let date = new Date(unixTime * 1000);
  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();

  let formattedTime = hours + ":" + minutes.substr(-2);

  return formattedTime;
};

export default convertToLocalTime;
