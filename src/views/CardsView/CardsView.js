import { useDispatch, useSelector } from "react-redux";

import operations from "../../redux/Card/operations/operations";
import tempOperations from "../../redux/Temperature/operations/operations";
import getCards from "../../redux/selector/getCards";
// import getTemperature from "../../redux/selector/getTemperature";

import CardList from "../../components/CardList/CardList";
import AddForm from "../../components/AddForm/AddForm";

function CardsView() {
  const dispatch = useDispatch();
  const cards = useSelector(getCards);

  const getTempHandler = (data) => {
    dispatch(tempOperations.addTemp(data));
  };

  const submitFormHandler = (data) => {
    dispatch(operations.addCity(data));
  };

  const updateBtnHandler = (data) => {
    dispatch(operations.getCityToUpdate(data));
  };

  const deleteBtnHandler = (data) => {
    dispatch(operations.getCityToDelete(data));
  };
  return (
    <>
      <AddForm cards={cards} submitForm={submitFormHandler} />
      <CardList
        getTempHandler={getTempHandler}
        // tempArr={tempArr}
        cards={cards}
        onUpdBtn={updateBtnHandler}
        onDeleteBtn={deleteBtnHandler}
      />
    </>
  );
}

export default CardsView;
