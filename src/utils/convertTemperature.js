const convertToCelsius = (K) => {
  let celsius = (K - 273).toFixed(0);
  return celsius;
};

export default convertToCelsius;
