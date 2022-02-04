import { useDispatch, useSelector } from "react-redux";

import operations from "../../redux/Card/operations/operations";
import getCards from "../../redux/selector/getCards";

import CardList from "../../components/CardList/CardList";
import AddForm from "../../components/AddForm/AddForm";

function CardsView() {
  const dispatch = useDispatch();
  const cards = useSelector(getCards);

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
        cards={cards}
        onUpdBtn={updateBtnHandler}
        onDeleteBtn={deleteBtnHandler}
      />
    </>
  );
}

export default CardsView;
