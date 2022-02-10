import { createReducer } from "@reduxjs/toolkit";
import actions from "../../Temperature/actions/actions";

const temperature = createReducer([], {
  [actions.addTempSuccess]: (state, action) => {
    return action.payload;
  },
});

export default temperature;
