import { SessionInitialClass } from "../../../models/data/data.session";
import { SESSION_CLOSE_USER_TYPE } from "../actionTypes/closeSession.session";
import { SESSION_SET_USER_TYPE } from "../actionTypes/setUser.session";
import closeUserHandler from "./closeSession.session";
import setUserHandler from "./setUser.session";

export const initialState: SessionInitialClass = new SessionInitialClass();

export const Session = (state = initialState, action) => {
  const handlers = {
    [SESSION_SET_USER_TYPE]: setUserHandler,
    [SESSION_CLOSE_USER_TYPE]: closeUserHandler,
  };
  const handler = handlers[action.type];
  return handler ? handler(state, action, initialState) : state;
};
