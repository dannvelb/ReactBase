import { TStoreAction } from "../../../models/data/data.store";
import { TAuthCredentials } from "../../../models/http/auth.http";

export const AUTH_LOGIN_TYPE = "AUTH_LOGIN_TYPE";

export const authLoginAction = (
  credentials: TAuthCredentials
): TStoreAction => ({
  type: AUTH_LOGIN_TYPE,
  payload: credentials,
});
