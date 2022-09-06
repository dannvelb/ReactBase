import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./store.reducer";
import { persistStore } from "redux-persist";
import rootSaga from "./store.saga";
const sagaMiddleware = createSagaMiddleware();

// const optionsStore

const composeEnhancers =
  (window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] as typeof compose) || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga)

const persistore = persistStore(store);
export { store, persistore };
