import { TStoreAction } from "../../../models/data/data.store";

export const SESSION_CLOSE_USER_TYPE = "SESSION_CLOSE_USER_TYPE";

export const sessionCloseUserAction = (): TStoreAction => ({
  type: SESSION_CLOSE_USER_TYPE,
  payload: null,
});
