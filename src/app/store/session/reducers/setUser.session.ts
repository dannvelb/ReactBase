import {
  SessionInitialClass,
  TAuthSetUserAction,
} from "../../../models/data/data.session";

const setUserHandler = (
  state: SessionInitialClass,
  { payload: { code, token } }: TAuthSetUserAction,
  initialState: SessionInitialClass
): SessionInitialClass => ({
  ...state,
  code,
  token,
});

export default setUserHandler;
