import { combineReducers } from "redux";
import { Session } from "./session/reducers/session";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { UIReducer } from "./UI/reducers/ui";

const rootReducer = combineReducers({
  session: persistReducer(
    {
      key: "session",
      storage,
    },
    Session
  ),
  UI: UIReducer,
});

export default rootReducer;
