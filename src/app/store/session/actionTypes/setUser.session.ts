import { SessionInitialClass } from "../../../models/data/data.session";
import { TStoreAction } from "../../../models/data/data.store";

export const SESSION_SET_USER_TYPE = "SESSION_SET_USER_TYPE";
export const sessionSetUserAction = (
  user: SessionInitialClass
): TStoreAction => ({
  type: SESSION_SET_USER_TYPE,
  payload: user,
});
