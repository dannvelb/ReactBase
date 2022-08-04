import { IS_USER_AUTH, USER_TYPE } from "../const";
import { TYPES_ACTIONS } from "../types";

// SET SESSION CLIENT REDUCER

export const SESSION_SET_CLIENT_ACTION = (client) => ({
  type: TYPES_ACTIONS.SESSION.SET_CLIENT_TYPE,
  client,
});

const setClientHandler = (state, { client }, initialState) => ({
  ...state,
  client,
});

// SET SESSION USER REDUCER

export const SESSION_SET_USER_ACTION = (user, token) => ({
  type: TYPES_ACTIONS.SESSION.SET_USER_TYPE,
  user,
  token,
});

const setUserHandler = (state, { user, token }, initialState) => ({
  ...state,
  user,
  token,
  [IS_USER_AUTH]: true,
});

// CLOSE SESION USER REDUCER

export const SESSION_CLOSE_USER_ACTION = () => ({
  type: TYPES_ACTIONS.SESSION.CLOSE_USER_TYPE,
});

const closeUserHandler = (state, action, initialState) => ({
  ...state,
  user: null,
  token: null,
  [IS_USER_AUTH]: false,
});

// CLOSE SESION CLIENT REDUCER

export const SESSION_CLOSE_CLIENT_ACTION = () => ({
  type: TYPES_ACTIONS.SESSION.CLOSE_CLIENT_TYPE,
});

const closeClientHandler = (state, action, initialState) => initialState;

export const initialState = {
  [IS_USER_AUTH]: false,
  [USER_TYPE]: null,
  user: null,
  token: null,
  client: null,
};

//REDUCER SESSION HANDLER

export const Session = (state = initialState, action) => {
  const handlers = {
    [TYPES_ACTIONS.SESSION.SET_CLIENT_TYPE]: setClientHandler,
    [TYPES_ACTIONS.SESSION.SET_USER_TYPE]: setUserHandler,
    [TYPES_ACTIONS.SESSION.CLOSE_CLIENT_TYPE]: closeClientHandler,
    [TYPES_ACTIONS.SESSION.CLOSE_USER_TYPE]: closeUserHandler,
  };
  const handler = handlers[action.type];
  return handler ? handler(state, action, initialState) : state;
};
