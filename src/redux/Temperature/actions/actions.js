import { createAction } from "@reduxjs/toolkit";

const addTempRequest = createAction("temp/addTempRequest");
const addTempSuccess = createAction("temp/addTempSuccess");
const addTempError = createAction("temp/addTempError");

const actions = {
  addTempRequest,
  addTempSuccess,
  addTempError,
};

export default actions;
