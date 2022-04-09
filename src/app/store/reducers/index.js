import { combineReducers } from "redux";

import { reducer as login } from "./auth/index";
import { reducer as session} from './session/index'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const rootReducer = combineReducers({
  login,
  session/*: persistReducer({
    key: 'session',
    storage
  }, session)*/
});
//
export default rootReducer/* persistReducer({
  key: 'state',
  storage
}, rootReducer)*/;
