function Card({
  name,
  country,
  temp,
  feels_like,
  sunrise_time,
  sunset_time,
  weather,
  iconURL,
  wind,
  className,
  closeBtn,
  getTempHandler,
}) {
  return (
    <div className={className.cardContainer} onClick={getTempHandler}>
      {closeBtn && <div>{closeBtn}</div>}
      <h3 className={className.cardTitle}>
        {name}, {country}
      </h3>
      <div>
        <img className={className.cardIcon} src={iconURL} alt={name} />
      </div>
      <p className={className.weather}>{weather}</p>
      <div>
        <p className={className.currentTemp}>
          {temp} <span>&deg;C</span>
        </p>

        {feels_like && (
          <p className={className.feelsLikeTemp}>
            Feels like <span>{feels_like}</span> <span>&deg;C</span>
          </p>
        )}
      </div>
      {wind && (
        <p className={className.wind}>
          Wind speed: <span>{wind} m/s</span>
        </p>
      )}

      {sunrise_time && (
        <div className={className.sunActivityBlock}>
          <p className={className.sunrise}>Sunrise at {sunrise_time}</p>
          <p className={className.sunset}>Sunset at {sunset_time}</p>
        </div>
      )}
    </div>
  );
}

export default Card;
