import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import getCards from "../../redux/selector/getCards";
import { iconURL } from "../../service/url";

import convertTemperature from "../../utils/convertTemperature";
import handleLinkClick from "../../utils/handleLinkClick";

import Card from "../Card/Card";
import SubmitBtn from "../SubmitBtn/SubmitBtn";
import CloseBtn from "../CloseBtn/CloseBtn";

import s from "./CardList.module.css";

function CardList({ onUpdBtn, onDeleteBtn, getTempHandler }) {
  const cards = useSelector(getCards);
  const { pathname } = useLocation();

  const submitUpdate = (cityName) => {
    onUpdBtn(cityName);
  };

  const deleteCard = (cityName) => {
    onDeleteBtn(cityName);
  };

  return (
    <div className={s.cardListContainer}>
      <ul className={s.cardList}>
        {cards.length > 0 &&
          cards.map(({ id, name, main, sys, weather, coord }) => (
            <li className={s.cardListItem} key={id}>
              <SubmitBtn
                onClick={() => submitUpdate(name)}
                className={s.updateBtn}
              >
                Update
              </SubmitBtn>
              <Link onClick={handleLinkClick} to={`${pathname}${name}`}>
                <Card
                  getTempHandler={() =>
                    getTempHandler({ lat: coord?.lat, lon: coord?.lon })
                  }
                  closeBtn={
                    <CloseBtn
                      deleteCard={() => deleteCard(name)}
                      className={s.closeBtn}
                    />
                  }
                  className={s}
                  name={name}
                  country={sys?.country}
                  temp={convertTemperature(main?.temp)}
                  weather={weather[0].main}
                  iconURL={`${iconURL}/${weather[0].icon}@2x.png`}
                ></Card>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default CardList;
