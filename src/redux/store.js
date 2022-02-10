import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cardsReducer from "./Card/reducer/reducer";
import temperatureReducer from "./Temperature/reducer/reducer";

const persistConfig = {
  key: "cities",
  storage,
};

const rootReducer = {
  cards: cardsReducer,
  temperature: temperatureReducer,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers(rootReducer)
);

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false,
  }),
];

const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

const persistedStore = {
  store,
  persistor,
};

export default persistedStore;
