import s from "./Card.module.css";

function Card({
  name,
  temp,
  feels_like,
  sunrise_time,
  sunset_time,
  weather,
  iconURL,
  wind,
  className,
  closeBtn,
}) {
  return (
    <div className={className.cardContainer}>
      {closeBtn && <div>{closeBtn}</div>}
      <h3 className={className.cardTitle}>{name}</h3>
      <div className={s.cardIconWrapper}>
        <img className={className.cardIcon} src={iconURL} alt={name} />
      </div>
      <p className={className.weather}>{weather}</p>
      <div className={s.tempBlock}>
        <p className={className.currentTemp}>
          {temp} <span>&deg;C</span>
        </p>

        {feels_like && (
          <p className={className.feelsLikeTemp}>
            Feels like{" "}
            <span className={s.feelsLikeTempValue}>{feels_like}</span>{" "}
            <span className={s.feelsLikeTempMeasure}>&deg;C</span>
          </p>
        )}
      </div>
      {wind && (
        <p className={className.wind}>
          Wind speed: <span className={s.windSpeed}>{wind} m/s</span>
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
