import axios from "axios";

import { baseURL } from "../../../service/url";
import { API_KEY } from "../../../service/api-key";

import actions from "../actions/actions";

const addCity = (cityName) => async (dispatch) => {
  dispatch(actions.addCardRequest());

  try {
    const response = await axios.get(
      `${baseURL}/weather/?q=${cityName}&appid=${API_KEY}`
    );
    dispatch(actions.addCardSuccess(response.data));
  } catch (error) {
    dispatch(actions.addCardError(error));
  }
};

const getCityToUpdate = (cityName) => async (dispatch) => {
  dispatch(actions.updateCardRequest());

  try {
    const response = await axios.get(
      `${baseURL}/weather/?q=${cityName}&appid=${API_KEY}`
    );
    dispatch(actions.updateCardSuccess(response.data));
  } catch (error) {
    dispatch(actions.updateCardError(error));
  }
};

const getCityToDelete = (cityName) => async (dispatch) => {
  dispatch(actions.deleteCardRequest());

  try {
    const response = await axios.get(
      `${baseURL}/weather/?q=${cityName}&appid=${API_KEY}`
    );
    dispatch(actions.deleteCardSuccess(response.data));
  } catch (error) {
    dispatch(actions.deleteCardError(error));
  }
};

const operations = {
  addCity,
  getCityToUpdate,
  getCityToDelete,
};

export default operations;
