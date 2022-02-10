import axios from "axios";

import { baseURL } from "../../../service/url";
import { API_KEY } from "../../../service/api-key";

import actions from "../actions/actions";

const addTemp =
  ({ lat, lon }) =>
  async (dispatch) => {
    dispatch(actions.addTempRequest());

    try {
      const response = await axios.get(
        `${baseURL}/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,daily&appid=${API_KEY}`
      );
      dispatch(actions.addTempSuccess(response.data.hourly));
    } catch (error) {
      dispatch(actions.addTempError(error));
    }
  };

const operations = {
  addTemp,
};

export default operations;
