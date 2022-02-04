import { createAction } from "@reduxjs/toolkit";

const addCardRequest = createAction("cards/addCardRequest");
const addCardSuccess = createAction("cards/addCardSuccess");
const addCardError = createAction("cards/addCardError");

const updateCardRequest = createAction("cards/updateCardRequest");
const updateCardSuccess = createAction("cards/updateCardSuccess");
const updateCardError = createAction("cards/updateCardError");

const deleteCardRequest = createAction("cards/deleteCardRequest");
const deleteCardSuccess = createAction("cards/deleteCardSuccess");
const deleteCardError = createAction("cards/deleteCardError");

const actions = {
  addCardRequest,
  addCardSuccess,
  addCardError,
  updateCardRequest,
  updateCardSuccess,
  updateCardError,
  deleteCardRequest,
  deleteCardSuccess,
  deleteCardError,
};

export default actions;
