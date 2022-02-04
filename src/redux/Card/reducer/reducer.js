import { createReducer, combineReducers } from "@reduxjs/toolkit";

import actions from "../actions/actions";

const cards = createReducer([], {
  [actions.addCardSuccess]: (state, action) => {
    const duplicate = state.find((card) => card.name === action.payload.name);
    if (!duplicate) return [...state, action.payload];
  },
  [actions.updateCardSuccess]: (state, action) => {
    return state.forEach((card, idx) =>
      card.name === action.payload.name ? (state[idx] = action.payload) : state
    );
  },
  [actions.deleteCardSuccess]: (state, action) => {
    return state.filter((card) => card.name !== action.payload.name);
  },
});

const loading = createReducer(false, {
  [actions.addCardRequest]: () => true,
  [actions.addCardSuccess]: () => false,
  [actions.addCardError]: () => false,
  [actions.updateCardRequest]: () => true,
  [actions.updateCardSuccess]: () => false,
  [actions.updateCardError]: () => false,
  [actions.deleteCardRequest]: () => true,
  [actions.deleteCardSuccess]: () => false,
  [actions.deleteCardError]: () => false,
});

export default combineReducers({
  cards,
  loading,
});
