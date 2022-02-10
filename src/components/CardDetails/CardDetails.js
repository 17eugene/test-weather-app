import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Card from "../../components/Card/Card";

import s from "./CardDetails.module.css";

import convertTime from "../../utils/convertTime";
import convertTemperature from "../../utils/convertTemperature";
import { iconURL, baseURL } from "../../service/url";
import { API_KEY } from "../../service/api-key";

function CardDetails() {
  const [card, setCard] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    fetch(`${baseURL}/weather/?q=${name}&appid=${API_KEY}`)
      .then((response) => response.json())
      .then(setCard);
  }, [name]);

  return (
    <div className={s.cardDetailContainer}>
      {card && (
        <Card
          className={s}
          name={card?.name}
          country={card?.sys?.country}
          temp={convertTemperature(card?.main?.temp)}
          feels_like={convertTemperature(card?.main?.feels_like)}
          sunrise_time={convertTime(card?.sys?.sunrise)}
          sunset_time={convertTime(card?.sys?.sunset)}
          weather={card?.weather ? card.weather[0].main : undefined}
          iconURL={`${iconURL}/${
            card?.weather ? card.weather[0].icon : undefined
          }@2x.png`}
          wind={card?.wind?.speed}
        />
      )}
    </div>
  );
}

export default CardDetails;
