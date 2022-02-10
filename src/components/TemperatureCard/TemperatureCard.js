import s from "./TemperatureCard.module.css";

function TemperatureCard({ temp, time }) {
  return (
    <div className={s.tempInfoCard}>
      <p className={s.time}>{time}</p>
      <p className={s.temp}>
        {temp} <span>&deg;C</span>
      </p>
    </div>
  );
}

export default TemperatureCard;
