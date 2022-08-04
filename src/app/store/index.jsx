import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from "./reducers/index";
import { persistStore } from "redux-persist";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers()
);

const persistore = persistStore(store);
export { store, persistore };
