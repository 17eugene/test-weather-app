import { useSelector } from "react-redux";

import getTemperature from "../../redux/selector/getTemperature";

import convertToCelsius from "../../utils/convertTemperature";
import convertToLocalTime from "../../utils/convertTime";

import TemperatureCard from "../TemperatureCard/TemperatureCard";

import s from "./TemperatureContainer.module.css";

function TemperatureContainer() {
  const hourlyTempCollection = useSelector(getTemperature).slice(1, 13);

  return (
    <div className={s.tempCardContainer}>
      <ul className={s.tempCardList}>
        {hourlyTempCollection.length > 0 &&
          hourlyTempCollection.map(({ dt, temp }, idx) => (
            <li
              key={dt}
              className={s.tempCardItem}
              style={{
                position: "relative",
                bottom:
                  (+convertToCelsius(hourlyTempCollection[idx]?.temp) -
                    +convertToCelsius(hourlyTempCollection[0]?.temp)) *
                    4 +
                  "px",
                marginRight: "2px",
                display: "inline-block",
              }}
            >
              <TemperatureCard
                temp={convertToCelsius(temp)}
                time={convertToLocalTime(dt)}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default TemperatureContainer;
