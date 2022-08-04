import { combineReducers } from "redux";
import { Session } from "./session.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  session: persistReducer(
    {
      key: "session",
      storage,
    },
    Session
  ),
});

export default persistReducer(
  {
    key: "state",
    storage,
  },
  rootReducer
);
