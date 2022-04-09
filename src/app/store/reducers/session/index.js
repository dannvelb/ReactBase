import { type as closeSessionType } from "../../actionTypes/session/closeSession";
import { type as deleteSessionType } from "../../actionTypes/session/deleteSession";
import { type as setSessionType } from "../../actionTypes/session/setSession";
import closeSesionHandler from "./closeSesionHandler";

import deleteSessionHandler from "./deleteSessionHandler";
import setSessionHandler from "./setSessionHandler";

export const IS_USER_AUTH = "IS_USER_AUTH";
export const USER_TYPE = "USER_TYPE";

export const initialState = {
  [IS_USER_AUTH]: false,
  [USER_TYPE]: null,
  user: null,
  token: null,
  cliente: null, 
};

const typeToHandler = {
  [closeSessionType]: closeSesionHandler,
  [deleteSessionType]: deleteSessionHandler,
  [setSessionType]: setSessionHandler,
};

export const reducer = (state = initialState, action) => {
  const handler = typeToHandler[action.type];
  return handler ? handler(state, action, initialState) : state;
};
